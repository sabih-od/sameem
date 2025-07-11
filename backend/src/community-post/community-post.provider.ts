import { DataSource } from 'typeorm';
import { CommunityPost } from './entities/community-post.entity';

export const communityPostProviders = [
  {
    provide: 'COMMUNITY_POST_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CommunityPost),
    inject: ['DATA_SOURCE'],
  },
];
