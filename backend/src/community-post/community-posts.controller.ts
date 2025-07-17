import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CommunityPostsService } from './community-posts.service';
import { CreateCommunityPostDto } from './dto/create-community-post.dto';
import { UpdateCommunityPostDto } from './dto/update-community-post.dto';
import { ApiTags, ApiOkResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CommunityPost } from './entities/community-post.entity';

@ApiTags('Community Posts')
@Controller('community-posts')
export class CommunityPostsController {
  constructor(private readonly service: CommunityPostsService) {}

  // @Post()
  // create(@Body() dto: CreateCommunityPostDto) {
  //   return this.service.create(dto);
  // }

  @Post()
  @ApiOkResponse({ description: 'Create a community post', type: CommunityPost })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateCommunityPostDto })
  @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads/community-posts/',
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
          },
        }),
      }),
  )
  async create(
      @Body() dto: CreateCommunityPostDto,
      @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      const app_url = process.env.APP_URL || 'http://localhost:3013/';
      dto.image = `${app_url.replace(/\/api$/, '')}/uploads/community-posts/${file.filename}`;
    }

    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCommunityPostDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
