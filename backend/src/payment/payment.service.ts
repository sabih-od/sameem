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
            return await this.stripe.subscriptions.create({
                customer: createPaymentDto.customer_id,
                items: [
                    { price: createPaymentDto.price_id }
                ],
                expand: ['latest_invoice.payment_intent'],
            });
        } catch (error) {
            console.error('Error creating charge:', error);
            throw error
        }
    }
}
