import { DatabaseModel } from "./DatabaseModel";
import { UserToken } from "./UserToken";
import { UserFacebook } from "./UserFacebook";

export class User extends DatabaseModel {
    id: string;
    nome: string;
    dataNasc: Date;
    login: string;
    password: string;
    email: string;
    userToken: UserToken;
    facebookUser: UserFacebook;
    constructor() { super('user'); }
}