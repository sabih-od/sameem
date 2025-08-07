import { Module } from '@nestjs/common';
import { CommunityPostsService } from './community-posts.service';
import { CommunityPostsController } from './community-posts.controller';
import { communityPostProviders } from './community-post.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CommunityPostsController],
  providers: [CommunityPostsService, ...communityPostProviders],
  exports: [...communityPostProviders],
})
export class CommunityPostsModule {}
