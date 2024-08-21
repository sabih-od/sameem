import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
    constructor(
        @Inject('SUBSCRIPTION_REPOSITORY')
        private readonly subscriptionRepository: Repository<Subscription>,
    ) { }

    async create(createSubscriptionDto: CreateSubscriptionDto): Promise<any> {
        try {
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

    async findAll() {
        return this.subscriptionRepository.find();
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

    async remove(id: number): Promise<any> {
        const subscription = await this.findOne(id);

        if (subscription.error) {
            return subscription;
        }

        return await this.subscriptionRepository.delete(id);

    }
}
