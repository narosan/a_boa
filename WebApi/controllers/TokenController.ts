import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import UserController from './UserController';
import { User } from '../models/User';
import { UserToken } from '../models/UserToken';
import { DatabaseController } from './DatabaseController';

export default class TokenController extends DatabaseController<UserToken> {

    constructor() { super(); }

    async singIn(id: string) {
        try {
            if (!id) throw 'Usuário não encontrado'; 
            const user = await new UserController().selectOne({ id } as User);
            user.userToken = await this.getUserTokenObject(user);
            return user;
        } catch (err) {
            throw err;
        }
    }

    async getUserTokenObject(user: User) {
        const token = this.getToken(user.id);
        const refreshToken = this.getRefreshToken(user.id);
        await this.updateUserToken(user, token, refreshToken);
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

    async updateUserToken(user: User, token: string, refreshToken: string) {
        const SQL = `
            UPDATE user_token 
            SET token = '${token}', 
            tokenExpireDate = '${moment().add(process.env.JWT_EXPIRES, "hours")}',
            refreshToken = '${refreshToken}',
            refreshTokenExpireDate = '${moment().add(process.env.JWT_REFRESH_EXPIRES, "hours")}'
            WHERE id_user = '${user.id}';`;
        this.connection.query(SQL);
    }
}