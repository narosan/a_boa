import { DatabaseModel } from "./DatabaseModel";

export class Evento extends DatabaseModel {
    id: string;
    constructor() { super('evento'); }
}