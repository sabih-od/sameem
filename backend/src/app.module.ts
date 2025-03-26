import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from "./mail/mail.module";
import { GroupsModule } from "./groups/groups.module";
import { GroupRequestsModule } from "./group-requests/group-requests.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { MessagesModule } from "./messages/messages.module";
import { ContactsModule } from "./contacts/contacts.module";
import { AbusiveWordsMiddleware } from "./middlewares/abusiveWords.middleware";
import { FaqModule } from './faq/faq.module';
import { PostsModule } from './posts/posts.module';
import { MediaModule } from './media/media.module';
import { CategoriesModule } from './categories/categories.module';
import { TranslationsModule } from './translations/translations.module';
import { UserPostHistoriesModule } from './user_post_histories/user_post_histories.module';
import { QuotationsModule } from './quotations/quotations.module';
import { StreamModule } from './stream/stream.module';
import { GoogelAuthModule } from './google-auth/google-auth.module';
import { StreamGateway } from './gateway/stream.gateway';
import { PaymentModule } from './payment/payment.module';
import { SubscriptionModule } from './subscriptions/subscription.module';
import { UserSubscriptionModule } from './user-subscriptions/user-subscription.module';
import { TypeModule } from './types/type.module';
import { TypeOfPDFModule } from './types-of-pdfs/type-of-pdf.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        AuthModule,
        ContactsModule,
        MailModule,
        GroupsModule,
        MessagesModule,
        NotificationsModule,
        GroupRequestsModule,
        FaqModule,
        PostsModule,
        MediaModule,
        CategoriesModule,
        TranslationsModule,
        UserPostHistoriesModule,
        QuotationsModule,
        StreamModule,
        GoogelAuthModule,
        PaymentModule,
        SubscriptionModule,
        UserSubscriptionModule,
        TypeModule,
        TypeOfPDFModule
    ],
    controllers: [AppController],
    providers: [AppService, StreamGateway],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AbusiveWordsMiddleware).forRoutes('*');
    }
}
