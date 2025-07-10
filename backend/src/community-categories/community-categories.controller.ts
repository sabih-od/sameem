import {
  Controller, Post, Body, Get, Param, Put, Delete,
} from '@nestjs/common';
import { CommunityCategoriesService } from './community-categories.service';
import { CreateCommunityCategoryDto } from './dto/create-community-category.dto';
import { UpdateCommunityCategoryDto } from './dto/update-community-category.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Community Categories')
@Controller('community-categories')
export class CommunityCategoriesController {
  constructor(private readonly service: CommunityCategoriesService) {}

  @Post()
  create(@Body() dto: CreateCommunityCategoryDto) {
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
