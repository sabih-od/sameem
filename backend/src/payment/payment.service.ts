import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';

import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { UserSubscriptionService } from 'src/user-subscriptions/user-subscription.service';
import { CreatePaymentIntentDto } from './dto/create-pament-intent.dto';

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(
        @Inject('SUBSCRIPTION_REPOSITORY')
        private readonly subscriptionRepository: Repository<Subscription>,
        private readonly userSubscriptionService: UserSubscriptionService,
    ) {
        this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
            apiVersion: '2024-06-20',
        });
    }

    // async createSubscription(id: number, createPaymentDto: CreatePaymentDto): Promise<any> {
    //     try {
    //         const price = await this.subscriptionRepository.findOneOrFail({
    //             where: {
    //                 id: id
    //             }
    //         });
    //         const customer = await this.stripe.customers.create({
    //             email: createPaymentDto.email,
    //             source: "tok_visa",
    //             payment_method: createPaymentDto.payment_method,
    //             invoice_settings: {
    //                 default_payment_method: createPaymentDto.payment_method
    //             }
    //         })

    //         const subscription = await this.stripe.subscriptions.create({
    //             customer: customer.id,

    //             items: [
    //                 { price: (await price).priceId }
    //             ],
    //             expand: ['latest_invoice.payment_intent'],
    //         });
    //         const newSubscription = await this.userSubscriptionService.create(createPaymentDto.user_id, customer.id, subscription.id, price.price, price.name)
    //         return newSubscription
    //     } catch (error) {
    //         if (error instanceof QueryFailedError) {
    //             return { error: error['sqlMessage'] };
    //         }
    //         // Handle other types of errors
    //         return { error: error.message || 'An error occurred' };
    //     }
    // }


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

    async cancelSubscription(subscriptionId: string): Promise<any> {


        try {
            const findBySubscriptionID = await this.userSubscriptionService.findBySubscriptionID(subscriptionId)
            const canceledSubscription = await this.stripe.subscriptions.cancel(findBySubscriptionID);

            return canceledSubscription
        }
        catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }

    }


    async createPaymentIntent(createPaymentIntent: CreatePaymentIntentDto) {
        try {
            const customer = await this.stripe.customers.create();
            console.log(customer);
            
            const ephemeralKey = await this.stripe.ephemeralKeys.create(
                { customer: customer.id },
                {apiVersion:"2024-06-20"}
            );

            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: createPaymentIntent.amount * 100,
                currency: 'usd',
                customer: customer.id,
                automatic_payment_methods: {
                    enabled: true,
                },
            });

            return {
                paymentIntentId: paymentIntent.id,
                paymentIntentSecret: paymentIntent.client_secret,
                ephemeralKeySecret: ephemeralKey.secret,
                customerId: customer.id,
                publishableKey: process.env.STRIPE_API_KEY,
            };
        } catch (error) {
            return { error: error.message || 'An error occurred' };
        }
    }

}
