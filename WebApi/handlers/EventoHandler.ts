import { InternalError } from "../util/error";
import EventoController from "../controllers/EventoController";
import { Evento } from "../models/Evento";

export default class EventoHandler {
    async getAll(req, res) {
        try {
            const eventos = await new EventoController().selectAll(new Evento());
            return res.status(200).json(eventos);
        } catch (err) {
            return res.status(500).send(new InternalError(err).message);
        }
    }
}