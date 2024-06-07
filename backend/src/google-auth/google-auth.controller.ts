import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthService } from './google-auth.service';

@Controller('auth')
export class GoogleAuthController {


    constructor(private readonly streamService: GoogleAuthService){}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    // Handles the Google OAuth2 callback
    const user = req.user;
    // You can store the user profile and tokens in session or database here
    res.redirect('http://localhost:3014/stream/');
  }


  @Post('start-broadcast')
  async startBroadcast(@Res() res) {
    try {
      const result = await this.streamService.startBroadcast();
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error starting broadcast');
    }
  }
}
