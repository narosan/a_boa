import { Forbidden, BadRequest, InternalError } from "../util/error";
import LoginController from "../controllers/LoginController";

export default class LoginHandler {
    static singIn(req, res) {
        if (!req.body || !req.body.id) return res.status(403).send(new Forbidden().message);
        if (req.headers['x-access-token']) return res.status(400).send(new BadRequest().message);
        try {
            const token = LoginController.singIn(req.body.id);
            return res.status(200).json({ token });
        } catch (err) {
            return res.status(500).send(new InternalError(err).message);
        }
    }
}