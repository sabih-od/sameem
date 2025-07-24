import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';
import { MusicCategory } from '../music-category/entities/music-category.entity';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { MusicCategoryModule } from '../music-category/music-category.module';
import {musicProviders} from "./music.providers";
import {DatabaseModule} from "../database/database.module";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [DatabaseModule , UsersModule],
  controllers: [MusicController],
  providers: [MusicService, ...musicProviders],
})
export class MusicModule {}
