import { Body, Controller, Get, Post, Query, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';


@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) { }

    @Post()
    async payment(@Body() createPaymentDto: CreatePaymentDto) {
        console.log('Data =======',createPaymentDto);
        return await this.paymentService.createCharge(createPaymentDto)
    }

}
