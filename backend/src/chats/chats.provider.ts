import { Chat } from './entities/chat.entity';
import { DataSource } from 'typeorm';

export const chatsProviders = [
  {
    provide: 'CHAT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Chat),
    inject: ['DATA_SOURCE'],
  },
];
