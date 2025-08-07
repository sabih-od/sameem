// src/community-categories/community-categories.module.ts

import { Module } from '@nestjs/common';
import { CommunityCategoriesService } from './community-categories.service';
import { CommunityCategoriesController } from './community-categories.controller';
import { communityCategoryProviders } from './community-category.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CommunityCategoriesController],
  providers: [CommunityCategoriesService, ...communityCategoryProviders],
  exports: [...communityCategoryProviders], // Required for external usage
})
export class CommunityCategoriesModule {}
