import { DatabaseModel } from "./DatabaseModel";

export class Endereco extends DatabaseModel {
    id: string;
    constructor() {
        super('endereco');
    }
}