import { DataSource } from 'typeorm';
import { CommunityJoin } from './entities/community-join.entity';
import { Channel } from '../chat/entities/channel.entity';
import { ChatUser } from '../chat/entities/chat-user.entity';

export const communityJoinProviders = [
  {
    provide: 'COMMUNITY_JOIN_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(CommunityJoin),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CHANNEL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(Channel),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CHAT_USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ChatUser),
    inject: ['DATA_SOURCE'],
  },
];
