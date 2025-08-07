import { Body, Controller, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatePaymentIntentDto } from './dto/create-pament-intent.dto';
import { PaymentService } from './payment.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserSubscriptionService } from 'src/user-subscriptions/user-subscription.service';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService,
        private readonly userSubscriptionService: UserSubscriptionService,
    ) { }

    @Post('subscription/:id')
    async subscriptionCreate(
        @Param('id') id: number,
    ) {

        let subscription = await this.paymentService.findOne(+id);
        if (!subscription || subscription.error) {
            return {
                success: false,
                message: subscription?.error || 'Subscription not found',
                data: [],
            }
        }




        let res = await this.paymentService.createSubscription(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Subscription Create successfully!',
            data: res.error ? [] : res,
        }
    }


    @Post('cancel/:id')
    async subscriptionUpdate(
        @Param('id') id: string,
    ) {

        let res = await this.paymentService.cancelSubscription(id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Subscription Cancel  successfully!',
            data: res.error ? [] : res,
        }
    }

    @Post('success')
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    async paymentSheet(@Request() req,
        @Body() createPaymentIntentDto: CreatePaymentIntentDto
    ) {
        try {

            const userSubscription = await this.userSubscriptionService.create(req.user.id, createPaymentIntentDto.subscription_id, createPaymentIntentDto.amount, createPaymentIntentDto.package_id)
            return {
                success: true,
                message: "Subscribed",
                data: userSubscription,
            }
        }
        catch (error) {
            return { error: error.message || 'An error occurred' };
        }
    }

}
