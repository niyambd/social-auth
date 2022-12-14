export declare class AppService {
    facebookLogin(req: any): "No user from facebook" | {
        message: string;
        user: any;
    };
    googleLogin(req: any): "No user from facebook" | {
        message: string;
        user: any;
    };
}
