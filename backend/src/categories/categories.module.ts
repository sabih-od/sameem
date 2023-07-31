import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {DatabaseModule} from "../database/database.module";
import {categoryProviders} from "./categories.provider";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [DatabaseModule, UsersModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoryProviders],
    exports: [CategoriesService],
})
export class CategoriesModule {}
