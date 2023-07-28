import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    UseGuards,
    UseInterceptors,
    NestInterceptor, ExecutionContext, CallHandler, BadRequestException, UploadedFiles, Injectable
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {
    deleteFileFromUploads,
    handleUploadOnCreate,
    handleUploadOnUpdate,
} from "../helpers/helper";
import {MediaService} from "../media/media.service";
import {CreateMediaDto} from "../media/dto/create-media.dto";

@Injectable()
export class MaxFileSizeInterceptor implements NestInterceptor {
    constructor() {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const files = request.files;

        this.checkForFiles(files, files.video, 100000000);
        this.checkForFiles(files, files.audio, 100000000);
        this.checkForFiles(files, files.image, 100000000);
        this.checkForFiles(files, files.pdf, 100000000);

        if (files.images) {
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
    ) {}

    @Post()
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
        try {
            createPostDto.video = await handleUploadOnCreate(files, files.video, '/uploads/posts/videos/');
            createPostDto.audio = await handleUploadOnCreate(files, files.audio, '/uploads/posts/audios/');
            createPostDto.image = await handleUploadOnCreate(files, files.image, '/uploads/posts/images/');
            createPostDto.pdf = await handleUploadOnCreate(files, files.pdf, '/uploads/posts/pdfs/');
        } catch (error) {
            throw new BadRequestException(error.message);
        }

        createPostDto.created_at = Date.now().toString();
        let res = await this.postsService.create(createPostDto);

        //multiple image upload
        if (files.images) {
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
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.postsService.findAll(page, limit);

        res.data = await Promise.all(
            res.data.map(async (post) => {
                let media_res = await this.mediaService.findAll(1, 1000, {
                    where: {
                        module: 'post',
                        module_id: post.id,
                    }
                });

                return {
                    ...post,
                    images: media_res.data
                };

            })
        );

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.postsService.findOne(+id);

        let images = await this.mediaService.findAll(1, 1000, {
            where: {
                module: 'post',
                module_id: res.id,
            }
        });

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : {...res, images},
        }
    }

    @Post(':id')
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
            updatePostDto.video = await handleUploadOnUpdate(files, files.video, post.video, '/uploads/posts/videos/');
            updatePostDto.audio = await handleUploadOnUpdate(files, files.audio, post.audio, '/uploads/posts/audios/');
            updatePostDto.image = await handleUploadOnUpdate(files, files.image, post.image, '/uploads/posts/images/');
            updatePostDto.pdf = await handleUploadOnUpdate(files, files.pdf, post.pdf, '/uploads/posts/pdfs/');

            //multiple image upload
            if (files.images) {
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

        let res = await this.postsService.update(+id, updatePostDto);

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
}
