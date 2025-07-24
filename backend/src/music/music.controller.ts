import {
    Controller,
    Post,
    UseGuards,
    UploadedFiles,
    UseInterceptors,
    Body,
    Get,
    Put,
    Param,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { AuthGuard } from '../auth/auth.guard';
import {
    ApiBearerAuth,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiBody,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Music')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('music')
export class MusicController {
    constructor(private readonly musicService: MusicService) {}

    @Post()
    @ApiOperation({ summary: 'Create music with audio and image upload' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'My Song' },
                description: { type: 'string', example: 'This is a great song.' },
                categoryId: { type: 'number', example: 1 },
                image: {
                    type: 'string',
                    format: 'binary',
                },
                audio: {
                    type: 'string',
                    format: 'binary',
                },
            },
            required: ['title', 'description', 'categoryId', 'image', 'audio'],
        },
    })
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'image', maxCount: 1 },
                { name: 'audio', maxCount: 1 },
            ],
            {
                storage: diskStorage({
                    destination: './uploads/music',
                    filename: (req, file, cb) => {
                        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
                    },
                }),
            },
        ),
    )
    async createMusic(
        @UploadedFiles()
            files: {
            image?: Express.Multer.File[];
            audio?: Express.Multer.File[];
        },
        @Body() body: any,
    ) {
        return this.musicService.create(body, files);
    }

    @Get()
    @ApiOperation({ summary: 'Get all music tracks' })
    findAll() {
        return this.musicService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get music track by ID' })
    findOne(@Param('id') id: string) {
        return this.musicService.findOne(+id);
    }




    @Get('by-category/:id')
    @ApiOperation({ summary: 'Get music list by category ID' })
    async getByCategory(@Param('id') id: number) {
        return this.musicService.getByCategory(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update music by ID (with optional files)' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'Updated Title' },
                description: { type: 'string', example: 'Updated Description' },
                categoryId: { type: 'number', example: 2 },
                image: { type: 'string', format: 'binary' },
                audio: { type: 'string', format: 'binary' },
            },
        },
    })
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'image', maxCount: 1 },
                { name: 'audio', maxCount: 1 },
            ],
            {
                storage: diskStorage({
                    destination: './uploads/music',
                    filename: (req, file, cb) => {
                        const uniqueSuffix =
                            Date.now() + '-' + Math.round(Math.random() * 1e9);
                        cb(
                            null,
                            `${file.fieldname}-${uniqueSuffix}${extname(
                                file.originalname,
                            )}`,
                        );
                    },
                }),
            },
        ),
    )
    async updateMusic(
        @Param('id') id: number,
        @UploadedFiles()
            files: {
            image?: Express.Multer.File[];
            audio?: Express.Multer.File[];
        },
        @Body() body: any,
    ) {
        return this.musicService.update(+id, body, files);
    }

}
