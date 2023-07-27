import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import {DatabaseModule} from "../database/database.module";
import {faqProviders} from "./faq.provider";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [FaqController],
  providers: [...faqProviders,FaqService],
  exports: [FaqService,...faqProviders]
})
export class FaqModule {}
