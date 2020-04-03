import jwt from 'jsonwebtoken';

export default class LoginController {
    static singIn(id: Number) {
        var token = jwt.sign({ id }, process.env.JWT_KEY, {
            expiresIn: process.env.JWT_EXPIRES
        });
        return token;
    }
}