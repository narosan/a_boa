import { Router } from "express";
import UserHandler from "./handlers/UserHandler";
import LoginHandler from "./handlers/LoginHandler";
import LoginController from "./controllers/LoginController";

const router = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: false
});

router.all('/webapi/login', LoginHandler.singIn);
router.get('/webapi/users', UserHandler.getAll);
router.get('/webapi/user/:id', UserHandler.getById);

export default router;