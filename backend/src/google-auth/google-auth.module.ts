import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleAuthService } from './google-auth.service';
import { GoogleStrategy } from './google-strategy';
import { GoogleAuthController } from './google-auth.controller';

@Module({
  imports: [PassportModule],
  providers: [GoogleAuthService, GoogleStrategy],
  controllers: [GoogleAuthController],
  exports:[GoogleAuthService]
})
export class GoogelAuthModule {}
