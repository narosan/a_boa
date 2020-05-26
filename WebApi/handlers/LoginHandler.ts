import { Forbidden, BadRequest, InternalError } from "../util/error";
import TokenController from "../controllers/TokenController";
import UserController from "../controllers/UserController";

export default class LoginHandler {
    async singIn(req, res) {
        if (!req.body) return res.status(403).send(new Forbidden().message);
        if (!req.body.login || !req.body.password)  return res.status(400).send(new BadRequest().message);
        try {
            const user = await new UserController().verifyUserLogin(req.body);
            if (!user) return res.status(400).send('Usuário ou senha estão incorretos.');
            user.userToken = await new TokenController().getUserTokenObject(user);
            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).send(new InternalError(err).message);
        }
    }

    async verifyFacebook(req, res) {
        if (req.body.facebookUser) {
            const user = await new UserController().verifyFacebookUser(req.body);
            const authUser = new TokenController().singIn(user.id);
            return res.status(200).json(authUser);
        }
        return res.status(400).json({});
    }
}