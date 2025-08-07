import {
  Controller, Post, Body, Get, Param, Put, Delete,
} from '@nestjs/common';
import { ReasonsService } from './reasons.service';
import { CreateReasonDto } from './dto/create-reason.dto';
import { UpdateReasonDto } from './dto/update-reason.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Reasons')
@Controller('reasons')
export class ReasonsController {
  constructor(private readonly reasonsService: ReasonsService) {}

  @Post()
  create(@Body() dto: CreateReasonDto) {
    return this.reasonsService.create(dto);
  }

  @Get()
  findAll() {
    return this.reasonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasonsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateReasonDto) {
    return this.reasonsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasonsService.remove(+id);
  }
}
