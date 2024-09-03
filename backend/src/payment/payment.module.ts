import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/database/database.module";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";
import { SubscriptionService } from "src/subscriptions/subscription.service";
import { subscriptionProviders } from "src/subscriptions/subscription.provider";
import { UserSubscriptionService } from "src/user-subscriptions/user-subscription.service";
import { userSubscriptionProviders } from "src/user-subscriptions/user-subscription.provider";
import { UsersModule } from "src/users/users.module";


@Module({
    imports: [DatabaseModule,UsersModule],
    controllers: [PaymentController],
    providers: [PaymentService, SubscriptionService, UserSubscriptionService,  ...subscriptionProviders, ...userSubscriptionProviders ],
    exports: [PaymentService],
})

export class PaymentModule { }