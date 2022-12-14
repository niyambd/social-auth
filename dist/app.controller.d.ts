import { AppService } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    facebookAuth(req: any): void;
    facebookAuthRedirect(req: Request): "No user from facebook" | {
        message: string;
        user: any;
    };
    googleAuth(req: any): void;
    googleAuthRedirect(req: Request): "No user from facebook" | {
        message: string;
        user: any;
    };
    homePage(): void;
}
