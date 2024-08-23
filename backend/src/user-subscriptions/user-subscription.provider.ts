import { DataSource } from 'typeorm';
import { UserSubscription } from './entities/user-subscriptions.entity';

export const userSubscriptionProviders = [
    {
        provide: 'USER_SUBSCRIPTION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserSubscription),
        inject: ['DATA_SOURCE'],
    },
];
