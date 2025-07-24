import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    UseGuards,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiConsumes,
    ApiBody,
} from '@nestjs/swagger';
import { MusicCategoryService } from './music-category.service';
import { CreateMusicCategoryDto } from './dto/create-music-category.dto';
import { AuthGuard } from '../auth/auth.guard';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Music Categories')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('music-categories')
export class MusicCategoryController {
    constructor(private readonly musicCategoryService: MusicCategoryService) {}

    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/music-categories',
                filename: (req, file, cb) => {
                    const uniqueName = `${Date.now()}-${Math.round(
                        Math.random() * 1e9,
                    )}${extname(file.originalname)}`;
                    cb(null, uniqueName);
                },
            }),
        }),
    )
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: CreateMusicCategoryDto })
    async create(
        @Body() dto: CreateMusicCategoryDto,
        @UploadedFile() image: Express.Multer.File,
    ) {
        console.log('Body:', dto);
        console.log('Image file:', image);

        if (image) {
            dto.image = image.filename;
        }

        return this.musicCategoryService.create(dto);
    }


    @Get()
    @ApiOperation({ summary: 'Get all music categories' })
    findAll() {
        return this.musicCategoryService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single music category by ID' })
    findOne(@Param('id') id: string) {
        return this.musicCategoryService.findOne(+id);
    }
}
