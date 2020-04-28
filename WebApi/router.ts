import { Router } from "express";
import UserHandler from "./handlers/UserHandler";
import LoginHandler from "./handlers/LoginHandler";
import EventoHandler from "./handlers/EventoHandler";
import EnderecoHandler from "./handlers/EnderecoHandler";

const router = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: false
});

router.all('/webapi/login', LoginHandler.singIn);
router.get('/webapi/users', UserHandler.getAll);
router.get('/webapi/user/:id', UserHandler.getById);

router.get('/webapi/eventos', async (req, res) => await new EventoHandler().getAll(req, res));

router.get('/webapi/endereco', async (req, res) => await new EnderecoHandler().getAll(req, res));

export default router;