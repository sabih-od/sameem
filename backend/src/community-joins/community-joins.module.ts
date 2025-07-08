import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityJoin } from './entities/community-join.entity';
import { CommunityJoinsService } from './community-joins.service';
import { CommunityJoinsController } from './community-joins.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityJoin])],
  controllers: [CommunityJoinsController],
  providers: [CommunityJoinsService],
})
export class CommunityJoinsModule {}
