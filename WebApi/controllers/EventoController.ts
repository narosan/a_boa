import { Evento } from "../models/Evento";
import { DatabaseController } from "./DatabaseController";
import * as moment from 'moment';

export default class EventoController extends DatabaseController<Evento> {
    constructor() { super(); }

    getUpcomingEvents(): Promise<Evento[]> {
        return new Promise<Evento[]>((resolve, reject) => {
            const startDate = moment().toISOString();
            const endDate = moment().toISOString();
            this.connection.query(` 
                SELECT * FROM evento 
                WHERE data_inicio 
                BETWEEN '${startDate}' AND '${endDate}'; `, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
        });
    }
}