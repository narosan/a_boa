import { DatabaseModel } from "./DatabaseModel";

export class UserFacebook extends DatabaseModel {
    id: number;
    accessToken: string;
    expiresIn: string;
    id_user: string;
    constructor() { super('facebook_user'); }
}