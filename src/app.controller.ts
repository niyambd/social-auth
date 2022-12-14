import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  facebookAuth(@Req() req) {}

  @Get('/callback/facebook')
  @UseGuards(AuthGuard('facebook'))
  facebookAuthRedirect(@Req() req: Request){
    return this.appService.facebookLogin(req);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth(@Req() req) {}

  @Get('/callback/google')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request){
    return this.appService.googleLogin(req);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  homePage(){
    
  }
}
