import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunitiesController } from './communities.controller';
import { CommunitiesService } from './communities.service';
import { Community } from './entities/communities.entity';
import { Reason } from 'src/reasons/entities/reason.entity';
import { CommunityCategory } from './entities/community-category.entity';
import { communityProviders } from './community.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ReasonsModule } from 'src/reasons/reasons.module';
import { CommunityJoinsModule } from 'src/community-joins/community-joins.module';
import { CommunityCategoriesModule } from 'src/community-categories/community-categories.module';
import {ChatModule} from "../chat/chat.module";


@Module({
  imports: [
  DatabaseModule,
    ReasonsModule,
    CommunityCategoriesModule,
    CommunityJoinsModule,
    ChatModule,
    // TypeOrmModule.forFeature([CommunityCategory]),
  ],
  controllers: [CommunitiesController],
  providers: [CommunitiesService, ...communityProviders, CommunitiesService],
})
export class CommunitiesModule {}
