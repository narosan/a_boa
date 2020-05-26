import { DatabaseModel } from "./DatabaseModel";

export class UserToken extends DatabaseModel {
    id_user: string;
    token: string;
    refreshToken: string;
    expiresIn: Date;
    refreshTokenExpiresIn: Date;
    constructor() { super('user_token'); }
}