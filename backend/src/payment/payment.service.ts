import Stripe from 'stripe';
import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';


@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(
        @Inject('SUBSCRIPTION_REPOSITORY')
        private readonly subscriptionRepository: Repository<Subscription>,
       
    ) {
        this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
            apiVersion: '2024-06-20',
        });
    }

    async createSubscription(id: number): Promise<any> {
        try {
            const price = await this.subscriptionRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
            const customer = await this.stripe.customers.create()

            const subscription = await this.stripe.subscriptions.create({
                customer: customer.id,
                items: [
                    { price: (await price).priceId }
                ],
                payment_behavior: 'default_incomplete',
                payment_settings: { save_default_payment_method: 'on_subscription' },
                expand: ['latest_invoice.payment_intent'],
            });


            const latestInvoice = subscription.latest_invoice as Stripe.Invoice;
            const paymentIntent = latestInvoice.payment_intent as Stripe.PaymentIntent;
            const clientSecret = paymentIntent.client_secret;


            return {
                userSubscription: subscription,
                latestInvoice: latestInvoice,
                paymentIntent: paymentIntent,
                clientSecret: clientSecret,
            }
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return { error: error['sqlMessage'] };
            }
            return { error: error.message || 'An error occurred' };
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


  

}
