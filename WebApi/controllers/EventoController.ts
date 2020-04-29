import { Evento } from "../models/Evento";
import { DatabaseController } from "./DatabaseController";

export default class EventoController extends DatabaseController<Evento> {
    constructor() { super(); }

    getUpcomingEvents() {
        const query = this.connection.query(``);
    }
}