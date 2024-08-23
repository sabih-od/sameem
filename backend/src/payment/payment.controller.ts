import { Body, Controller, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UsersService } from 'src/users/users.service';


@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService,
        private readonly userService: UsersService,
    ) { }

    @Post(':id')
    async subscriptionCreate(
        @Param('id') id: number,
        @Body() createPaymentDto: CreatePaymentDto
    ) {

        let subscription = await this.paymentService.findOne(+id);
        if (subscription.error) {
            return {
                success: false,
                message: subscription.error,
                data: [],
            }
        }

        let user = await this.userService.find(+createPaymentDto.user_id);
        if (user.error) {
            return {
                success: false,
                message: user.error,
                data: [],
            }
        }


        let res = await this.paymentService.createSubscription(+id, createPaymentDto);

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

}
