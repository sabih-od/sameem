import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommunityJoinsService } from './community-joins.service';
import { CreateCommunityJoinDto } from './dto/create-community-join.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CommunityJoin } from './entities/community-join.entity';

@ApiTags('Community Joins')
@Controller('community-joins')
export class CommunityJoinsController {
  constructor(private readonly service: CommunityJoinsService) {}

  @Post()
  @ApiOkResponse({
    description: 'Join or leave a community',
    type: CommunityJoin,
  })
  create(@Body() dto: CreateCommunityJoinDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of all community joins',
    type: CommunityJoin,
    isArray: true,
  })
  findAll() {
    return this.service.findAll();
  }

  @Get('user/:user_id')
  @ApiOkResponse({
    description: 'Communities joined by a user',
    type: CommunityJoin,
    isArray: true,
  })
  findByUser(@Param('user_id') user_id: string) {
    return this.service.findByUser(+user_id);
  }
}
