import { Controller, Get, Param } from '@nestjs/common';
import { FriendService } from './friend.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
@ApiTags('Friend List')
@Controller('friends')
export class FriendController {
  constructor(private readonly service: FriendService) {}

  @Get(':userId')
   @ApiOkResponse({
        description: 'List of user\'s friends.',
        type: User,
        isArray: true,
    })
  getFriends(@Param('userId') userId: string) {
    return this.service.findFriendsByUserId(+userId);
  }
}
