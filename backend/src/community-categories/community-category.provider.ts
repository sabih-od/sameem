// src/community-categories/community-category.provider.ts

import { DataSource } from 'typeorm';
import { CommunityCategory } from './entities/community-category.entity';

export const communityCategoryProviders = [
  {
    provide: 'COMMUNITY_CATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CommunityCategory),
    inject: ['DATA_SOURCE'],
  },
];
