import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommunityJoinsService } from './community-joins.service';
import { CreateCommunityJoinDto } from './dto/create-community-join.dto';
import { ApiOkResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CommunityJoin } from './entities/community-join.entity';

@ApiTags('Community Joins')
@Controller('community-joins')
export class CommunityJoinsController {
  constructor(private readonly service: CommunityJoinsService) {
  }

  // @Post()
  // @ApiOkResponse({
  //   description: 'Join or leave a community',
  //   type: CommunityJoin,
  // })
  // create(@Body() dto: CreateCommunityJoinDto) {
  //   return this.service.create(dto);
  // }

  @Post()
  @ApiOperation({
    summary: 'Join a community',
    description: 'This endpoint allows a user to join and leave a community by providing user and community IDs and using status.',
  })
  @ApiOkResponse({
    description: 'Join or leave a community',
    schema: {
      example: {
        message: 'Joined community successfully',
        user: {
          id: 5,
          name: 'John Doe',
        },
        community: {
          id: 3,
          name: 'NestJS Devs',
        }
      }
    }
  })
  create(@Body() dto: CreateCommunityJoinDto) {
    return this.service.create(dto);
  }

  // @Get()
  // @ApiOkResponse({
  //   description: 'List of all community joins',
  //   type: CommunityJoin,
  //   isArray: true,
  // })
  // findAll() {
  //   return this.service.findAll();
  // }

//   @Get('user/:user_id')
//   @ApiOperation({
//     summary: 'Get the Specific User Joined Communities',
//     description: 'This endpoint is to get the user  joined  communities by providing userID .',
//   })
//   @ApiOkResponse({
//     description: 'Communities joined by a user',
//     type: CommunityJoin,
//     isArray: true,
//   })
//   findByUser(@Param('user_id') user_id: string) {
//     return this.service.findByUser(+user_id);
//   }
// }

  @Get('user/:user_id')
  @ApiOperation({
    summary: 'Get the Specific User Joined Communities',
    description: 'This endpoint is to get the user joined communities by providing userID.',
  })
  @ApiOkResponse({
    description: 'User’s joined communities retrieved successfully',
    schema: {
      example: {
        message: "User's joined communities fetched successfully",
        data: [
          {
            id: 1,
            user: {
              id: 5,
              name: 'John Doe',
            },
            community: {
              id: 2,
              name: 'NestJS Devs',
            },
            joinedAt: '2025-07-17T12:00:00Z',
          },
        ],
      },
    },
  })
  async findByUser(@Param('user_id') user_id: string) {
    const data = await this.service.findByUser(+user_id);
    return {
      message: "User's joined communities fetched successfully",
      data,
    };
  }
}