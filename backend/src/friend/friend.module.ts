import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { friendProviders } from './friend.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FriendController],
  providers: [FriendService, ...friendProviders],
})
export class FriendModule {}
