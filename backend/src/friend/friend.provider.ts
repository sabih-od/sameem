import { DataSource } from 'typeorm';
import { CommunityJoin } from 'src/community-joins/entities/community-join.entity';

export const friendProviders = [
  {
    provide: 'COMMUNITY_JOIN_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CommunityJoin),
    inject: ['DATA_SOURCE'],
  },
];
