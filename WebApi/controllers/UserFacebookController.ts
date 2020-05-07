import { UserFacebook } from "../models/UserFacebook";
import { DatabaseController } from "./DatabaseController";
import { User } from "../models/User";

export default class UserFacebookController extends DatabaseController<UserFacebook> {
    registryUserFacebook(user: User): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const SQL = `   INSER INTO user_facebook (accessToken, expiresIn, id_user) 
                            VALUES('${user.facebookUser.accessToken}', '${user.facebookUser.expiresIn}', '${user.id}') `;
            this.connection.query(SQL, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
}