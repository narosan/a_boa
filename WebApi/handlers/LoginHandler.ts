import { Forbidden, BadRequest } from "../util/error";
import LoginController from "../controllers/LoginController";

export default class LoginHandler {
    static singIn(req, res, next) {
        if (!req.body) return res(new Forbidden());
        if (req.header['x-access-token']) return res(new BadRequest());
        return res.json(LoginController.singIn(req.body.id));
    }
}