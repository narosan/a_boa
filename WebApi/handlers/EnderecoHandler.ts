import { InternalError } from "../util/error";
import { Endereco } from "../models/Endereco";
import EnderecoController from "../controllers/EnderecoController";

export default class EnderecoHandler {
    async getAll(req, res) {
        try {
            const enderecos = await new EnderecoController().selectAll(new Endereco());
            return res.status(200).json(enderecos);
        } catch (err) {
            return res.status(500).send(new InternalError(err).message);
        }
    }
}