import { Module } from '@nestjs/common';
import { DatabaseModule } from "../database/database.module";
import { userSubscriptionProviders } from './user-subscription.provider';
import { UserSubscriptionController } from './user-subscription.controller';
import { UserSubscriptionService } from './user-subscription.service';
import { UsersService } from 'src/users/users.service';
import { userProviders } from 'src/users/users.provider';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [DatabaseModule,UsersModule],
    controllers: [UserSubscriptionController],
    providers: [UserSubscriptionService, ...userSubscriptionProviders, UsersService, ...userProviders],
    exports: [UserSubscriptionService],
})
export class UserSubscriptionModule { }
