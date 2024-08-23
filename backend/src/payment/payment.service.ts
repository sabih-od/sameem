import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';

import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(
        @Inject('SUBSCRIPTION_REPOSITORY')
        private readonly subscriptionRepository: Repository<Subscription>,
    ) {
        this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
        });
    }

    async createCharge(id: number, createPaymentDto: CreatePaymentDto): Promise<any> {
        try {
            const price = this.subscriptionRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
            const customer = await this.stripe.customers.create({
                email: createPaymentDto.email,
                payment_method: createPaymentDto.payment_method,
                invoice_settings: {
                    default_payment_method: createPaymentDto.payment_method
                }
            })


            return await this.stripe.subscriptions.create({
                customer: customer.id,
                items: [
                    { price: (await price).priceId }
                ],
                expand: ['latest_invoice.payment_intent'],
            });
        } catch (error) {
            if (error instanceof Error && 'type' in error) {
                return {
                    error: {
                        type: (error as any).type,
                        message: error.message
                    }
                };
            } else if (error instanceof QueryFailedError) {
                // Handle database query errors
                return {
                    error: error['sqlMessage']
                };
            } else {
                // Handle other errors
                return {
                    error: 'An unexpected error occurred'
                };
            }
        }
    }


    async findOne(id: number): Promise<any> {
        try {
            return await this.subscriptionRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                return {
                    error: 'Subscription Not Found'
                };
            }
        }
    }
}
