import { Router } from "express";
import UserHandler from "./handlers/UserHandler";
import LoginHandler from "./handlers/LoginHandler";

const router = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: false
});

router.all('webapi/*', (req, res, next) => {
    res.json(req.headers);
});
router.all('webapi/login', LoginHandler.singIn);
router.get('webapi/users', UserHandler.getAll);
router.get('webapi/user/:id', UserHandler.getById);

router.get('/', (req) => {
    console.log('teste !')
    console.log('req', req)
})

export default router;