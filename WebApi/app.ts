import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import router from "./router";

class App {
    public express: any;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        dotenv.config();
        this.express.use(express.json());
        this.express.use(helmet());
        this.express.use(bodyParser.json());
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({
            extended: false
        }));
    }

    private routes(): void {
        this.express.use(router);
    }
}

export default new App().express