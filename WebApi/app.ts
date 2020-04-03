import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import router from "./router";

class App {
    public express: any;

    constructor() {
        this.express = express();
        this.middleware();
        // this.database();
        this.routes();
        console.log('MONGODB_URL', process.env.MONGODB_URL)
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
        try {
            await mongoose.connect(process.env.MONGODB_URL, {
                autoReconnect: true,
                connectTimeoutMS: +process.env.MONGODB_TIMEOUT,
            });
        } catch (error) {
            console.error(`Erro ao conectar com DB:: ${JSON.stringify(error)}`);
        }
    }

    private routes(): void {
        this.express.use(router);
    }
}

export default new App().express