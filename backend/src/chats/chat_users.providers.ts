import { DataSource } from 'typeorm';
import { ChatUser } from './entities/chat_users.entity';

export const ChatUsersProviders = [
  {
    provide: 'CHAT_USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChatUser),
    inject: ['DATA_SOURCE'],
  },
];
