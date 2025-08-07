import { Module } from '@nestjs/common';
import { MusicCategoryService } from './music-category.service';
import { MusicCategoryController } from './music-category.controller';
import { musicCategoryProviders } from './music-category.providers';
import { DatabaseModule } from '../database/database.module';
import {UsersModule} from "../users/users.module"; // where DATA_SOURCE is exported

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [MusicCategoryController],
  providers: [MusicCategoryService, ...musicCategoryProviders],
})
export class MusicCategoryModule {}