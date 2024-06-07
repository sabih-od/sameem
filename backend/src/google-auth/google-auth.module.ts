import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleAuthService } from './google-auth.service';
import { GoogleStrategy } from './google-strategy';
import { GoogleAuthController } from './google-auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { streamProviders } from './streams.provider';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PassportModule,DatabaseModule,UsersModule],
  providers: [GoogleAuthService, GoogleStrategy,...streamProviders],
  controllers: [GoogleAuthController],
  exports:[GoogleAuthService,...streamProviders]
})
export class GoogelAuthModule {}
