import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommunityJoinsService } from './community-joins.service';
import { CreateCommunityJoinDto } from './dto/create-community-join.dto';

@Controller('community-joins')
export class CommunityJoinsController {
  constructor(private readonly service: CommunityJoinsService) {}

  @Post()
  create(@Body() dto: CreateCommunityJoinDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  } 

  @Get('user/:user_id')
  findByUser(@Param('user_id') user_id: string) {
    return this.service.findByUser(+user_id);
  }
}
