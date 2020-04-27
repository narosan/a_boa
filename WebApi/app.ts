import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import * as mysql from 'mysql';
import router from "./router";

class App {
    public express: any;

    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware(): void {
        dotenv.config();
        this.express.use(express.json());
        this.express.use(helmet());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: false
        }));
    }

    private async database() {
        const connection = mysql.createConnection({
            host: process.env.AWS_RDS_HOST,
            port: +process.env.AWS_RDS_PORT,
            user: process.env.AWS_RDS_USER,
            password: process.env.AWS_RDS_PASSWORDS,
            timeout: +process.env.AWS_RDS_TIMOUT
        });
        connection.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
              }
              console.log('connected as id ' + connection.threadId);
        });
    }

    private routes(): void {
        this.express.use(router);
    }
}

export default new App().express