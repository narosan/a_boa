import * as jwt from 'jsonwebtoken';
import UserController from './UserController';
import { User } from '../models/User';
import { UserToken } from '../models/UserToken';

export default class LoginController {
    async singIn(id: string) {
        try {
            const user = await new UserController().selectOne({ id } as User);
            user.userToken = this.getUserTokenObject(user);
            return user;
        } catch (err) {
            throw err;
        }
    }

    getUserTokenObject(user: User): UserToken {
        const token = this.getToken(user.id);
        const refreshToken = this.getRefreshToken(user.id);
        return { token, refreshToken } as UserToken;
    }

    getToken(id): string {
        return jwt.sign({ id }, process.env.JWT_KEY, {
            expiresIn: process.env.JWT_EXPIRES
        });
    }
 
    getRefreshToken(id): string {
        return jwt.sign({ id }, process.env.JWT_KEY, {
            expiresIn: process.env.JWT_REFRESH_EXPIRES
        }); 
    }

    verifyToken(token) {
        jwt.verify(token, process.env.JWT_KEY);
    }
}