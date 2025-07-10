import { Module } from '@nestjs/common';
import { CommunityJoinsService } from './community-joins.service';
import { CommunityJoinsController } from './community-joins.controller';
import { communityJoinProviders } from './community-join.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CommunityJoinsController],
  providers: [CommunityJoinsService, ...communityJoinProviders],
  exports: [...communityJoinProviders],
})
export class CommunityJoinsModule {}
