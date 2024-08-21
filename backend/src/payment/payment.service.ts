import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
        });
    }

    async createCharge(createPaymentDto: CreatePaymentDto) {
        try {
            return await this.stripe.charges.create({
                amount: createPaymentDto.amount * 100,
                currency: createPaymentDto.currency,
                source: 'tok_visa',
                description: 'Sample Charge',
            });
        } catch (error) {
            console.error('Error creating charge:', error);
            throw error
        }
    }
}
