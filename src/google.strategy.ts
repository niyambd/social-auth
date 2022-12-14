import {PassportStrategy} from "@nestjs/passport";
import {Strategy, VerifyCallback} from "passport-google-oauth20";
import {Injectable} from "@nestjs/common";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: "541367448462-gge67f5gajl7r9pk499veui04rvdhefk.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/callback/google",
            scope: ["email", "profile"]
        })
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
        }
        // if profile.id
        // else insert
        done(null, payload);
    }
}
