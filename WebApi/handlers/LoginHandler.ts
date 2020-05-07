import { Forbidden, BadRequest, InternalError } from "../util/error";
import LoginController from "../controllers/LoginController";
import UserController from "../controllers/UserController";

export default class LoginHandler {
    async singIn(req, res) {
        if (!req.body || !req.body.id) return res.status(403).send(new Forbidden().message);
        try {
            const authUser = new LoginController().singIn(req.body.id);
            return res.status(200).json(authUser);
        } catch (err) {
            return res.status(500).send(new InternalError(err).message);
        }
    }

    async verifyFacebook(req, res) {
        if (req.body.facebookUser) {
            const user = await new UserController().verifyFacebookUser(req.body);
            const authUser = new LoginController().singIn(user.id);
            return res.status(200).json(authUser);
        }
        return res.status(400).json({});
    }
}