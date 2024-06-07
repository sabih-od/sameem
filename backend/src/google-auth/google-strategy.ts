// src/auth/google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { GoogleAuthService } from './google-auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: GoogleAuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/google/callback',
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube.force-ssl'],  
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken); 
    this.authService.setCredentials(accessToken, refreshToken);
    

    const user = {
      profile,
      accessToken,
      refreshToken,
    };
    done(null, user);
  }
}
