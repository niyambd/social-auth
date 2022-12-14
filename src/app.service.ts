import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  facebookLogin(req){
    if(!req.user){
      return 'No user from facebook';
    }
    return {
      message: 'User info from facebook',
      user: req.user
    }
  }

  googleLogin(req){
    if(!req.user){
      return 'No user from facebook';
    }
    return {
      message: 'User info from facebook',
      user: req.user
    }
  }
}
