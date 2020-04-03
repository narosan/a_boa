import { Forbidden } from "../util/error"
import UserController from "../controllers/UserController";

export default class UserHandler {
    static async getById(req, res, next) {
        if (!req.body) return res(new Forbidden());
        return res.json(await UserController.getById(res.body.id));
    }

    static async getAll(req, res, next) {
        return res.json(await UserController.getAll());
    }
}