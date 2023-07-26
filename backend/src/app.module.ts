import {MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {UsersModule} from "./users/users.module";
import {AuthModule} from "./auth/auth.module";
import {MailModule} from "./mail/mail.module";
import {GroupsModule} from "./groups/groups.module";
import {GroupRequestsModule} from "./group-requests/group-requests.module";
import {NotificationsModule} from "./notifications/notifications.module";
import {MessagesModule} from "./messages/messages.module";
import {ContactsModule} from "./contacts/contacts.module";
import {AbusiveWordsMiddleware} from "./middlewares/abusiveWords.middleware";
import { AdminSeederService } from "./admin-seeder/admin-seeder.service";

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
  ],
  controllers: [AppController],
  providers: [AppService, AdminSeederService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AbusiveWordsMiddleware).forRoutes('*');
    }
}
