import { DataSource } from 'typeorm';
import { ChatMessage } from './entities/chat-message.entity';

export const ChatMessagesProviders = [
  {
    provide: 'CHAT_MESSAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChatMessage),
    inject: ['DATA_SOURCE'],
  },
];
