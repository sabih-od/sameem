import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { chatsProviders } from './chats.provider';
import { ChatMessagesProviders } from './chat-messages.providers';
import { databaseProviders } from 'src/database/database.providers';
import { ChatsService } from './chats.service';

@Module({
  controllers: [ChatsController],
  providers: [
    ...databaseProviders,
    ...chatsProviders,
    ...ChatMessagesProviders,
    ChatsService,
  ],
})
export class ChatsModule {}
