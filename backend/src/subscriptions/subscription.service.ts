import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import Stripe from 'stripe';

@Injectable()
export class SubscriptionService {
    private stripe: Stripe;

    constructor(
        @Inject('SUBSCRIPTION_REPOSITORY')
        private readonly subscriptionRepository: Repository<Subscription>,
    ) {
        this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
        });
    }

    async create(createSubscriptionDto: CreateSubscriptionDto): Promise<any> {
        try {

            const product = await this.stripe.products.create({
                name: createSubscriptionDto.name,
                description: createSubscriptionDto.description,
            });



            const price = await this.stripe.prices.create({
                product: product.id,
                unit_amount: createSubscriptionDto.price * 100,
                currency: 'usd',
                recurring: {
                    interval: 'month',
                },
            });
            createSubscriptionDto.priceId = price.id
            createSubscriptionDto.productId = product.id
            const subscription = await this.subscriptionRepository.create(createSubscriptionDto);
            await this.subscriptionRepository.save(subscription);

            return await this.findOne(subscription.id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {

        let [data, total] = await this.subscriptionRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            total,
            currentPage: page,
            totalPages,
        };

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

    // async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): Promise<any> {
    //     try {
    //         const subscription = await this.findOne(id);
    //         if (subscription.error) {
    //             return subscription;
    //         }
    //         this.stripe.products.update(subscription.productId,
    //             {
    //                 name: updateSubscriptionDto.name,
    //                 description: updateSubscriptionDto.description,
    //             }
    //         )
    //         if (updateSubscriptionDto.price) {
    //             const updatePrice = await this.stripe.prices.update(subscription.priceId, {
    //                 active: false
    //             })
    //             if (updatePrice) {

    //                 const newPrice = await this.stripe.prices.create({
    //                     product: subscription.productId,
    //                     unit_amount: updateSubscriptionDto.price * 100,
    //                     currency: 'usd',
    //                     recurring: {
    //                         interval: 'month',
    //                     },
    //                 });
    //                 if (newPrice.id) {
    //                     updateSubscriptionDto.priceId = newPrice.id
    //                 }
    //             }
    //             else {
    //                 return console.log("some thing went wrong")
    //             }
    //         }
    //         await this.subscriptionRepository.update(id, updateSubscriptionDto);

    //         return await this.findOne(id);
    //     } catch (error) {
    //         if (error instanceof QueryFailedError) {
    //             return {
    //                 error: error['sqlMessage']
    //             };
    //         }
    //     }
    // }

    // async remove(id: number): Promise<any> {
    //     const subscription = await this.findOne(id);

    //     if (subscription.error) {
    //         return subscription;
    //     }

    //     // Delete the Stripe product
    //     await this.stripe.products.del(subscription.productId);
    //     return await this.subscriptionRepository.delete(id);

    // }

    async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): Promise<any> {
        try {
            const subscription = await this.findOne(id);
            if (subscription.error) {
                return subscription;
            }
            await this.subscriptionRepository.update(id, updateSubscriptionDto);
            return await this.findOne(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                return {
                    error: error['sqlMessage']
                };
            }
        }
    }

    async getfindAll(): Promise<any> {
        const data = await this.subscriptionRepository.find({
            where: {
                is_active: 1
            }
        })
        return {
            data
        }
    }

}
