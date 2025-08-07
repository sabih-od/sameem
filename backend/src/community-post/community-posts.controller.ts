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
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CommunityPostsService } from './community-posts.service';
import { CreateCommunityPostDto } from './dto/create-community-post.dto';
import { UpdateCommunityPostDto } from './dto/update-community-post.dto';
import {ApiTags, ApiOkResponse, ApiConsumes, ApiBody, ApiParam, ApiQuery, ApiOperation} from '@nestjs/swagger';
import { CommunityPost } from './entities/community-post.entity';


@ApiTags('Community Posts')
@Controller('community-posts')
export class CommunityPostsController {
  constructor(private readonly service: CommunityPostsService) {
  }

  // @Post()
  // create(@Body() dto: CreateCommunityPostDto) {
  //   return this.service.create(dto);
  // }

  @Post()
  @ApiOkResponse({description: 'Create a community post', type: CommunityPost})
  @ApiConsumes('multipart/form-data')
  @ApiBody({type: CreateCommunityPostDto})
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

    // return this.service.create(dto);
    const result = await this.service.create(dto);
    return {
      success: true,
      message: 'Community post created successfully',
      data: result,
    };
  }

  catch(error) {
    return {
      success: false,
      message: error.message || 'Failed to create community post',
    };
  }


  // @Get()
  // findAll() {
  //   return this.service.findAll();
  // }

  @Get()
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async findAll(
      @Query('page') page = 1,
      @Query('limit') limit = 10
  ) {
    try {
      const result = await this.service.findAll(+page, +limit);
      return {
        success: true,
        message: 'Community posts fetched successfully',
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error fetching community posts',
      };
    }
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateCommunityPostDto) {
  //   return this.service.update(+id, dto);
  // }
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCommunityPostDto) {
    const updated = await this.service.update(+id, dto);
    return {
      message: 'Community post updated successfully.',
      data: updated,
    };
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.service.remove(+id);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.service.remove(+id);
    return {
      message: 'Community post deleted successfully.',
    };
  }

  // @Get('by-community/:communityId')
  // @ApiParam({ name: 'communityId', type: Number })
  // @ApiOkResponse({ type: [CommunityPost] })
  // async getPostsByCommunity(@Param('communityId', ParseIntPipe) communityId: number) {
  //   return this.service.findByCommunityId(communityId);
  // }

  @Get('by-community/:communityId')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiOperation({ summary: 'Get Community Posts bu Community ID' })
  async getPostsByCommunity(
      @Param('communityId', ParseIntPipe) communityId: number,
      @Query('page') page = 1,
      @Query('limit') limit = 10
  ) {
    try {
      const result = await this.service.findByCommunityId(communityId, +page, +limit);
      return {
        success: true,
        message: 'Posts fetched successfully',
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error fetching posts for the community',
      };
    }
  }
}
