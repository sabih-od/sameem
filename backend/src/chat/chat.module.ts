import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { chatProviders } from './chat.providers';
import { communityProviders } from '../communities/community.providers';
import { DatabaseModule } from '../database/database.module';
import {UsersModule} from "../users/users.module";
import {ChatGateway} from "./chat.gateway";

@Module({
  imports: [DatabaseModule, UsersModule], // contains DATA_SOURCE provider
  controllers: [ChatController],
  providers: [ChatService,ChatGateway, ...chatProviders, ...communityProviders],
  exports: [ChatService],
})
export class ChatModule {}
