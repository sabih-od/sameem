import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Community } from './entities/communities.entity';
@ApiTags('Communities')
@Controller('communities')
export class CommunitiesController {
  constructor(private readonly service: CommunitiesService) {}

  @Post()
  @ApiOkResponse({ description: 'Create a community', type: Community })
  create(@Body() dto: CreateCommunityDto) {
    return this.service.create(dto);
  }

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
}