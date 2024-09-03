import { Module } from '@nestjs/common';
import { DatabaseModule } from "../database/database.module";
import { UsersModule } from "../users/users.module";
import { subscriptionProviders } from './subscription.provider';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

@Module({
    imports: [DatabaseModule,UsersModule],
    controllers: [SubscriptionController],
    providers: [SubscriptionService,...subscriptionProviders],
    exports: [SubscriptionService],
})
export class SubscriptionModule { }
