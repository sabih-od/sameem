import {
    BadRequestException,
    Body,
    CallHandler,
    Controller,
    Delete,
    ExecutionContext,
    Get,
    Inject,
    Injectable,
    NestInterceptor,
    Param,
    Post,
    Query,
    UploadedFiles,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {PostsService} from './posts.service';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';
import {ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {Observable} from "rxjs";
import {Post as PostEntity} from './entities/post.entity';
import {map} from "rxjs/operators";
import {deleteFileFromUploads, handleUploadOnCreate, handleUploadOnUpdate,} from "../helpers/helper";
import {MediaService} from "../media/media.service";
import {CreateMediaDto} from "../media/dto/create-media.dto";
import {IsNull, Repository} from "typeorm";
import {CategoriesService} from "../categories/categories.service";

@Injectable()
export class MaxFileSizeInterceptor implements NestInterceptor {
    constructor() {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const files = request.files;

        if (files) {
            this.checkForFiles(files, files.video, 100000000);
            this.checkForFiles(files, files.audio, 100000000);
            this.checkForFiles(files, files.image, 100000000);
            this.checkForFiles(files, files.pdf, 100000000);
        }

        if (files && files.images) {
            files.images.forEach((image) => {
                this.checkForFiles(files, image, 100000000);
            });
        }

        return next.handle().pipe(
            map((data) => {
                return data;
            }),
        );
    }

    checkForFiles(files, module, max_size) {
        if (files && module && module[0] && module[0].size > max_size) {
            throw new BadRequestException(`File size exceeds the limit of ${max_size} bytes`);
        }
    }
}

@ApiTags('Posts')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly mediaService: MediaService,
        private readonly categoryService: CategoriesService,
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<PostEntity>,
    ) {}

    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                video: {type: 'string', format: 'binary'},
                audio: {type: 'string', format: 'binary'},
                image: {type: 'string', format: 'binary'},
                pdf: {type: 'string', format: 'binary'},
                images: {
                    type: 'array',
                    items: { type: 'string', format: 'binary' },
                },
            }
        }
    })
    @UseInterceptors(
        FileFieldsInterceptor([
            {name: 'video', maxCount: 1},
            {name: 'audio', maxCount: 1},
            {name: 'image', maxCount: 1},
            {name: 'pdf', maxCount: 1},
            {name: 'images', maxCount: 100},
        ]),
        new MaxFileSizeInterceptor(),
    )
    async create(
        @Body() createPostDto: CreatePostDto,
        @UploadedFiles() files: {
            video?: Express.Multer.File[],
            audio?: Express.Multer.File[],
            image?: Express.Multer.File[],
            pdf?: Express.Multer.File[],
            images?: Express.Multer.File[],
        }
    ) {
        //file uploads
        if (files) {
            try {
                createPostDto.video = await handleUploadOnCreate(files, files.video, '/uploads/posts/videos/');
                createPostDto.audio = await handleUploadOnCreate(files, files.audio, '/uploads/posts/audios/');
                createPostDto.image = await handleUploadOnCreate(files, files.image, '/uploads/posts/images/');
                createPostDto.pdf = await handleUploadOnCreate(files, files.pdf, '/uploads/posts/pdfs/');
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }

        createPostDto.created_at = Date.now().toString();
        let res = await this.postsService.create(createPostDto);

        //attach categories
        if (createPostDto.category_ids) {
            let post = await this.postRepository.findOne({
                where: {
                    id: res.id
                }
            });

            post.categories = await Promise.all(
                createPostDto.category_ids.map(async (category_id) => {
                    let category = await this.categoryService.findOne(+category_id);

                    if (!category.error) {
                        return category;
                    }
                }).filter((item) => {
                    return item !== null && item !== undefined;
                })
            );

            await this.postRepository.save(post);
        }

        //multiple image upload
        if (files && files.images) {
            try {
                await Promise.all(
                    files.images.map(async (file) => {
                        let createMediaDto = new CreateMediaDto();
                        createMediaDto.module = 'post';
                        createMediaDto.module_id = res.id;
                        createMediaDto.url = await handleUploadOnCreate(files, file, '/uploads/posts/images/', false); //use false for multiple images
                        createMediaDto.created_at = Date.now().toString();

                        await this.mediaService.create(createMediaDto);
                    })
                );
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }

        res = await this.postsService.findOne(res.id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Post created successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get()
    @ApiQuery({ name: 'page', required: false})
    @ApiQuery({ name: 'limit', required: false})
    @ApiQuery({ name: 'category_id', required: false})
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number, @Query('category_id') category_id?: number) {
        let where_object = {
            where: {}
        };

        if (category_id) {
            let category = await this.categoryService.findOne(category_id);
            if (category.error) {
                return {
                    success: false,
                    message: category.error,
                    data: [],
                }
            }

            where_object = {
                where: {
                    categories: {
                        id: category_id,
                    },
                }
            }
        }

        let res = await this.postsService.findAll(page, limit, {
            relations: ['images', 'categories.children'],
            ...where_object
        });

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get('/screen-wise')
    @ApiQuery({ name: 'category_id', required: false})
    async findAllScreenWise(@Query('category_id') category_id?: number) {
        let video_where_object = { where: {} };
        let audio_where_object = { where: {} };
        let image_where_object = { where: {} };
        let pdf_where_object = { where: {} };

        if (category_id) {
            let category = await this.categoryService.findOne(category_id);
            if (category.error) {
                return {
                    success: false,
                    message: category.error,
                    data: [],
                }
            }

            video_where_object.where['categories'] = { id: category_id };
            audio_where_object.where['categories'] = { id: category_id };
            image_where_object.where['categories'] = { id: category_id };
            pdf_where_object.where['categories'] = { id: category_id };
        }

        video_where_object.where['video'] = !IsNull();
        let videos = await this.postsService.findAllNoPagination({
            relations: ['images', 'categories.children'],
            ...video_where_object
        });

        audio_where_object.where['audio'] = !IsNull();
        let audios = await this.postsService.findAllNoPagination({
            relations: ['images', 'categories.children'],
            ...audio_where_object
        });

        image_where_object.where['image'] = !IsNull();
        let images = await this.postsService.findAllNoPagination({
            relations: ['images', 'categories.children'],
            ...image_where_object
        });

        pdf_where_object.where['pdf'] = !IsNull();
        let pdfs = await this.postsService.findAllNoPagination({
            relations: ['images', 'categories.children'],
            ...pdf_where_object
        });

        return {
            success: true,
            message: '',
            data: {
                videos,
                audios,
                images,
                pdfs,
            }
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.postsService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @Post(':id')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                video: {type: 'string', format: 'binary'},
                audio: {type: 'string', format: 'binary'},
                image: {type: 'string', format: 'binary'},
                pdf: {type: 'string', format: 'binary'},
                images: {
                    type: 'array',
                    items: { type: 'string', format: 'binary'},
                },
            }
        }
    })
    @UseInterceptors(
        FileFieldsInterceptor([
            {name: 'video', maxCount: 1},
            {name: 'audio', maxCount: 1},
            {name: 'image', maxCount: 1},
            {name: 'pdf', maxCount: 1},
            {name: 'images', maxCount: 100},
        ]),
        new MaxFileSizeInterceptor(),
    )
    async update(
        @Param('id') id: number,
        @Body() updatePostDto: UpdatePostDto,
        @UploadedFiles() files: {
            video?: Express.Multer.File[],
            audio?: Express.Multer.File[],
            image?: Express.Multer.File[],
            pdf?: Express.Multer.File[],
            images?: Express.Multer.File[],
        },
    ) {
        let post = await this.postsService.findOne(+id);
        if (post.error) {
            return {
                success: false,
                message: post.error,
                data: [],
            }
        }

        //file uploads
        try {
            if (files) {
                updatePostDto.video = await handleUploadOnUpdate(files, files.video, post.video, '/uploads/posts/videos/');
                updatePostDto.audio = await handleUploadOnUpdate(files, files.audio, post.audio, '/uploads/posts/audios/');
                updatePostDto.image = await handleUploadOnUpdate(files, files.image, post.image, '/uploads/posts/images/');
                updatePostDto.pdf = await handleUploadOnUpdate(files, files.pdf, post.pdf, '/uploads/posts/pdfs/');
            }

            //multiple image upload
            if (files && files.images) {
                await Promise.all(
                    files.images.map(async (file) => {
                        let createMediaDto = new CreateMediaDto();
                        createMediaDto.module = 'post';
                        createMediaDto.module_id = post.id;
                        createMediaDto.url = await handleUploadOnCreate(files, file, '/uploads/posts/images/', false);
                        createMediaDto.created_at = Date.now().toString();

                        await this.mediaService.create(createMediaDto);
                    })
                );
            }
        }
         catch (error) {
            throw new BadRequestException(error.message);
        }

        let newUpdatePostDto = updatePostDto;
        delete newUpdatePostDto.category_ids;
        let res = await this.postsService.update(+id, newUpdatePostDto);

        //attach categories
        if (updatePostDto.category_ids) {
            let post = await this.postRepository.findOne({
                where: {
                    id: id
                }
            });

            post.categories = await Promise.all(
                updatePostDto.category_ids.map(async (category_id) => {
                    let category = await this.categoryService.findOne(+category_id);

                    if (!category.error) {
                        return category;
                    }
                }).filter((item) => {
                    return item !== null && item !== undefined;
                })
            );

            await this.postRepository.save(post);
        }

        return {
            success: !res.error,
            message: res.error ? res.error : 'Post updated successfully!',
            data: res.error ? [] : res,
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let post = await this.postsService.findOne(+id);
        if (post.error) {
            return {
                success: false,
                message: post.error,
                data: [],
            }
        }

        // Delete uploaded file
        let app_url = process.env.APP_URL + ':' + process.env.PORT;
        await deleteFileFromUploads(app_url, post.video);
        await deleteFileFromUploads(app_url, post.audio);
        await deleteFileFromUploads(app_url, post.image);
        await deleteFileFromUploads(app_url, post.pdf);

        //multiple image delete
        let media_res = await this.mediaService.findAll(1, 1000, {
           where: {
               module: 'post',
               module_id: post.id,
           }
        });

        await Promise.all(
            media_res.data.map(async (media) => {
                await this.mediaService.remove(media.id);
            })
        );

        let res = await this.postsService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Post deleted successfully!',
            data: res.error ? [] : res,
        }
    }


    @Get('category-post/:id')
    async findByCategoryById(@Param('id') id: string) {
        let res = await this.postsService.findAllByCategory(+id,1, 1000);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }
}
