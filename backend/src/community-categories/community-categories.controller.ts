import {
  Controller, Post, Body, Get, Param, Put, Delete, UseInterceptors, UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CommunityCategoriesService } from './community-categories.service';
import { CreateCommunityCategoryDto } from './dto/create-community-category.dto';
import { UpdateCommunityCategoryDto } from './dto/update-community-category.dto';
import { ApiTags, ApiOkResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CommunityCategory } from './entities/community-category.entity';

@ApiTags('Community Categories')
@Controller('community-categories')
export class CommunityCategoriesController {
  constructor(private readonly service: CommunityCategoriesService) {}

  // @Post()
  // create(@Body() dto: CreateCommunityCategoryDto) {
  //   return this.service.create(dto);
  // }

  @Post()
  @ApiOkResponse({ description: 'Create community category', type: CommunityCategory })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateCommunityCategoryDto })
  @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads/community-categories/',
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, `community-category-${uniqueSuffix}${ext}`);
          },
        }),
      }),
  )
  async create(
      @Body() dto: CreateCommunityCategoryDto,
      @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      const app_url = (process.env.APP_URL || 'http://localhost:3013').replace(/\/api$/, '');
      dto.image = `${app_url.replace(/\/api$/, '')}/uploads/community-categories/${file.filename}`;
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
  update(@Param('id') id: string, @Body() dto: UpdateCommunityCategoryDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
