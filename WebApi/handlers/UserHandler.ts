import { Forbidden } from "../util/error"
import UserController from "../controllers/UserController";

export default class UserHandler {
    static async getById(req, res) {
        if (!req.body) return res.json(new Forbidden());
        return res.json();
    }

    static async getAll(req, res) {
        return res.json();
    }
}