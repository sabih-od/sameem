import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunitiesController } from './communities.controller';
import { CommunitiesService } from './communities.service';
import { Community } from './entities/communities.entity';
import { Reason } from 'src/reasons/entities/reason.entity';
import { CommunityCategory } from './entities/community-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Community, Reason, CommunityCategory]),
  ],
  controllers: [CommunitiesController],
  providers: [CommunitiesService],
})
export class CommunitiesModule {}
