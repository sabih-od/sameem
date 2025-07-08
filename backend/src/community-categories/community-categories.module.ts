import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityCategory } from './entities/community-category.entity';
import { CommunityCategoriesService } from './community-categories.service';
import { CommunityCategoriesController } from './community-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityCategory])],
  controllers: [CommunityCategoriesController],
  providers: [CommunityCategoriesService],
})
export class CommunityCategoriesModule {}
