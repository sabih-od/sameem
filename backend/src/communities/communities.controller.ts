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
import { CommunitiesService } from './communities.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { ApiTags, ApiOkResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Community } from './entities/communities.entity';

@ApiTags('Communities')
@Controller('communities')
export class CommunitiesController {
  constructor(private readonly service: CommunitiesService) {}

  @Get()
  @ApiOkResponse({ description: 'List all communities', type: Community, isArray: true })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Get single community', type: Community })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Update community', type: Community })
  update(@Param('id') id: string, @Body() dto: UpdateCommunityDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete community', type: Community })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Get('by-category/:categoryId')
  @ApiOkResponse({ description: 'Communities by category', type: Community, isArray: true })
  getByCategory(@Param('categoryId') categoryId: string) {
    return this.service.findByCategory(+categoryId);
  }

  @Post()
  @ApiOkResponse({ description: 'Create a community', type: Community })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateCommunityDto })
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/community/',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async create(
      @Body() dto: CreateCommunityDto,
      @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      const app_url = process.env.APP_URL || 'http://localhost:3013/';
      dto.image = `${app_url.replace(/\/api$/, '')}/uploads/community/${file.filename}`;

    }

    return this.service.create(dto);
  }
}
