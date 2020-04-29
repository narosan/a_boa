import * as mysql from 'mysql';
import { DatabaseModel } from '../models/DatabaseModel';


export abstract class DatabaseController<T extends DatabaseModel> {

    public connection: mysql.Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.AWS_RDS_HOST,
            port: +process.env.AWS_RDS_PORT,
            user: process.env.AWS_RDS_USER,
            password: process.env.AWS_RDS_PASSWORDS,
            timeout: +process.env.AWS_RDS_TIMOUT,
            database: process.env.AWS_RDS_DATABASE
        });

        this.connection.connect(err => {
            if (err) throw `Erro de conexão com o DB :: ${err.message}`;
        });
    }

    selectAll(model: T): Promise<T[]> {
        return new Promise(async (resolve, reject) => {
            this.connection.query(`SELECT * FROM ${model.table};`, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    selectOne(model: T): Promise<T> {
        return new Promise(async (resolve, reject) => {
            let SQL = `SELECT * FROM ${model.table}`;

            if (typeof model.id === 'string') SQL += ` WHERE id = '${model.id}' `;
            else if (typeof model.id === 'number') SQL += ` WHERE id = ${model.id} `;
            
            this.connection.query(SQL, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
}