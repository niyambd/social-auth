import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-facebook";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook'){
    constructor(){
        super({
            clientID: "1290980855078081",
            clientSecret: "4d99528503a48467db090ab6d2f66d27",
            callbackURL: "http://localhost:3000/callback/facebook",
            scope: "email",
            profileFields: ['emails', 'name']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>{
        const {name, emails} = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
        };
        const payload = {
            user,
            accessToken,
            refreshToken
        };
        // if profile.id
        // else insert
        done(null, payload);
    }
}