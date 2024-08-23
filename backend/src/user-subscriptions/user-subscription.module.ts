import { Module } from '@nestjs/common';
import { DatabaseModule } from "../database/database.module";
import { userSubscriptionProviders } from './user-subscription.provider';
import { UserSubscriptionController } from './user-subscription.controller';
import { UserSubscriptionService } from './user-subscription.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UserSubscriptionController],
    providers: [UserSubscriptionService, ...userSubscriptionProviders],
    exports: [UserSubscriptionService],
})
export class UserSubscriptionModule { }
