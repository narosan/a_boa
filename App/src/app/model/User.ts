import { FacebookUser } from './FacebookUser';

export class User {
    id: string;
    email: string;
    nome: string;
    dataNasc: string;
    token?: string;
    facebookUser?: FacebookUser;
}