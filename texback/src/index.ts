import express, { NextFunction } from 'express'
import dotenv from 'dotenv'
import BinRoute from './routes/bin'
import bodyParser from 'body-parser'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
const helmet = require("helmet")
dotenv.configDotenv({ path: "./.env" })


class Servidor {
    private app: express.Application;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.__config__();
        this.__routes__();
    }

    private __config__() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json())
        this.app.use(helmet())
        this.app.use(rateLimit({
            windowMs: 2 * 60 * 1000,
            max: 25,
            standardHeaders: false,
            legacyHeaders: true,
        }))
        this.app.use(cors({
            origin: function (origin, callback) {
                if (origin === "http://localhost:5173") {
                    callback(null, true)
                } else {
                    callback(new Error('Bloqueado.'))
                }
            }
        }))
        this.app.use((err: express.Errback, req: express.Request, res: express.Response, next: NextFunction) => {
            if (err) {
                return res.status(401).json()
            }
            next()
        })
    }

    private __routes__() {
        this.app.use("/bin", BinRoute.Router)
    }

    public __run__() {
        try {
            this.app.listen(this.port, () => {
                console.log("Server running;")
            })
        } catch (e) {
            console.log("Server is down.")
        }
    }
}

new Servidor(Number(process.env.PORT)).__run__()
