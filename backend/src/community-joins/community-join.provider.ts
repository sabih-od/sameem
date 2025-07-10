import { DataSource } from 'typeorm';
import { CommunityJoin } from './entities/community-join.entity';

export const communityJoinProviders = [
  {
    provide: 'COMMUNITY_JOIN_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CommunityJoin),
    inject: ['DATA_SOURCE'],
  },
];
