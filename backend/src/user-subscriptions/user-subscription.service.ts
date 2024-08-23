import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { UserSubscription } from './entities/user-subscriptions.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class UserSubscriptionService {

    constructor(
        @Inject('USER_SUBSCRIPTION_REPOSITORY')
        private readonly subscriptionRepository: Repository<UserSubscription>,
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,

    ) {

    }

    async create(id: number, customer_id: string, subscriptionId: string, price: number, name: string): Promise<any> {


        const userSubscription = new UserSubscription();
        userSubscription.user_id = id;
        userSubscription.customer_id = customer_id;
        userSubscription.subscription_id = subscriptionId;
        userSubscription.subscription_price = price;
        userSubscription.package_name = name
        await this.subscriptionRepository.save(userSubscription);

        return await this.findOne(userSubscription.id);

    }

    async findAll(page: number = 1, limit: number = 10): Promise<any> {

        let [data, total] = await this.subscriptionRepository.findAndCount({
            where: {
                is_active: 1
            },
            skip: (page - 1) * limit,
            take: limit,
        });

        const totalPages = Math.ceil(total / limit);
        const userIds = data.map(subscription => subscription.user_id);

        const users = await this.userRepository.findByIds(userIds);

        const userMap = {};
        users.forEach(user => {
            userMap[user.id] = `${user.first_name} ${user.last_name}`;
        });

        data = data.map(subscription => {
            return {
                ...subscription,
                user_name: userMap[subscription.user_id],
            };
        });
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
                    error: 'Record Not Found'
                };
            }
        }
    }
    async findBySubscriptionID(SubscriptionId: string): Promise<any> {
        try {
            const subscription = await this.subscriptionRepository.findOneOrFail({
                where: {
                    subscription_id: SubscriptionId
                }
            });

            await this.subscriptionRepository.update({ subscription_id: subscription.subscription_id }, { is_active: 0 })
            return subscription.subscription_id;
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

    // async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): Promise<any> {
    //     try {
    //         const subscription = await this.findOne(id);
    //         if (subscription.error) {
    //             return subscription;
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

    // async getfindAll(): Promise<any> {
    //     const data = await this.subscriptionRepository.find({
    //         where: {
    //             is_active: 1
    //         }
    //     })
    //     return {
    //         data
    //     }
    // }

}
