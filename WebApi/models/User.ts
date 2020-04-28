import { DatabaseModel } from "./DatabaseModel";

export class User extends DatabaseModel {
    id: string;
    constructor() { super('user'); }
}