import { DatabaseController } from "./DatabaseController";
import { User } from "../models/User";
import UserFacebookController from "./UserFacebookController";

export default class UserController extends DatabaseController<User> {
    
    constructor() { super(); }

    verifyFacebookUser(user: User): Promise<User> {
        return new Promise<User>(async resolve => {
            const userModel = await this.selectOne(user);
            if (userModel) resolve(userModel);
            else resolve(await this.registryUserFromFacebook(user));
        });
    }

    verifyUserLogin(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const SQL = `SELECT * FROM user 
            WHERE login = '${user.login.trim()}' AND password = MD5('${user.password}'); `;
            this.connection.query(SQL, (err, result) => {
                if (err) reject(err);
                resolve(result[0]);
            });
        });
    }

    registryUserFromFacebook(user: User): Promise<User> {
        return new Promise<User>(async resolve => {
            user.id = await this.registryUser(user);
            await new UserFacebookController().registryUserFacebook(user);
            resolve(user);
        });
    }

    registryUser(user: User): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.connection.query(`SELECT UUID();`, (err, result) => {
                if (err) reject(err);
                const uuid = result;
                let SQL = ` INSERT INTO user (id, nome, email, login, password, dataNasc) 
                            VALUES ('${uuid}', '${user.nome}', '${user.email}', '${user.login}', '${user.password}', '${user.dataNasc}'); `;
                this.connection.query(SQL, (err, result) => {
                    if (err) reject(err);
                    console.log('registryUser result::', result)
                    resolve(uuid);
                });
            });
        });
    }
}