import { Forbidden, BadRequest, InternalError } from "../util/error";
import LoginController from "../controllers/LoginController";

export default class LoginHandler {
    static singIn(req, res, next) {
        if (!req || !req.body) return new Forbidden();
        if (!req.header['x-access-token']) return new BadRequest();
        try {
            const token = LoginController.singIn(req.body.id);
            return res.json({ token });
        } catch (err) {
            return new InternalError(err);
        }
    }
}