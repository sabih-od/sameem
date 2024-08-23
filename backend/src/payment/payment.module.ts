import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/database/database.module";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";
import { SubscriptionService } from "src/subscriptions/subscription.service";
import { subscriptionProviders } from "src/subscriptions/subscription.provider";
import { userSubscriptionProviders } from "src/user-subscriptions/user-subscription.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [PaymentController],
    providers: [PaymentService, SubscriptionService, ...subscriptionProviders,...userSubscriptionProviders],
    exports: [PaymentService],
})

export class PaymentModule { }