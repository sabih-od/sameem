import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/database/database.module";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";
import { SubscriptionService } from "src/subscriptions/subscription.service";
import { subscriptionProviders } from "src/subscriptions/subscription.provider";
import { UserSubscriptionService } from "src/user-subscriptions/user-subscription.service";
import { userSubscriptionProviders } from "src/user-subscriptions/user-subscription.provider";
import { UsersService } from "src/users/users.service";
import { userProviders } from "src/users/users.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [PaymentController],
    providers: [PaymentService, SubscriptionService, UserSubscriptionService, UsersService, ...subscriptionProviders, ...userSubscriptionProviders, ...userProviders],
    exports: [PaymentService],
})

export class PaymentModule { }