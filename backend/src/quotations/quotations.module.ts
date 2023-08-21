import { Module } from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { QuotationsController } from './quotations.controller';
import {DatabaseModule} from "../database/database.module";
import {AuthModule} from "../auth/auth.module";
import {UsersModule} from "../users/users.module";
import {quotationProviders} from "./quotations.provider";

@Module({
    imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [QuotationsController],
  providers: [QuotationsService, ...quotationProviders],
    exports: [QuotationsService],
})
export class QuotationsModule {}
