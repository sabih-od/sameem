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
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CommunitiesService } from './communities.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { ApiTags, ApiOkResponse, ApiConsumes, ApiBody , ApiOperation, ApiParam, ApiQuery} from '@nestjs/swagger';
import { Community } from './entities/communities.entity';

@ApiTags('Communities')
@Controller('communities')
export class CommunitiesController {
  constructor(private readonly service: CommunitiesService) {}

  // @Get()
  // @ApiOkResponse({ description: 'List all communities', type: Community, isArray: true })
  // findAll() {
  //   return this.service.findAll();
  // }

  @Get()
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiOkResponse({ description: 'List all communities', type: Community, isArray: true })
  async findAll(
      @Query('page') page = '1',
      @Query('limit') limit = '10'
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const result = await this.service.findAll(pageNum, limitNum);

    return {
      success: true,
      message: '',
      ...result,
    };
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Get single community', type: Community })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  // @Put(':id')
  // @ApiOkResponse({ description: 'Update community', type: Community })
  // update(@Param('id') id: string, @Body() dto: UpdateCommunityDto) {
  //   return this.service.update(+id, dto);
  // }

  @Put(':id')
  @ApiOkResponse({ description: 'Update community', type: Community })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateCommunityDto })
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
  async update(
      @Param('id') id: string,
      @Body() dto: UpdateCommunityDto,
      @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const app_url = process.env.APP_URL || 'http://localhost:3013/';
      dto.image = `${app_url.replace(/\/api$/, '')}/uploads/community/${file.filename}`;
    }

    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete community', type: Community })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  // @Get('by-category/:categoryId')
  // @ApiOperation({ summary: 'Get communities by Category Id' })
  // @ApiOkResponse({ description: 'Communities by category', type: Community, isArray: true })
  // getByCategory(@Param('categoryId') categoryId: string) {
  //   return this.service.findByCategory(+categoryId);
  // }

  @Get('by-category/:categoryId')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiOperation({ summary: 'Get communities by Category Id' })
  @ApiOkResponse({ description: 'Communities by category', type: Community, isArray: true })
  getByCategory(
      @Param('categoryId') categoryId: string,
      @Query('page') page?: string,
      @Query('limit') limit?: string,
  ) {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    return this.service.findByCategory(+categoryId, pageNum, limitNum);
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

  @Get('user/:userId')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiOperation({ summary: 'Get communities created by a user' })
  @ApiParam({ name: 'userId', required: true, description: 'User ID of the creator' })
  @ApiOkResponse({ description: 'List of communities created by user', type: [Community] })
  async getCommunitiesByUser(
      @Param('userId') userId: number,
      @Query('page') page?: string,
      @Query('limit') limit?: string,
  ) {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    return await this.service.getCommunitiesByUser(userId, pageNum, limitNum);
  }

}
