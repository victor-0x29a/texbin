import express from 'express'
import BinController from '../../controllers/bin.controller'

class binRoute {
    public Router: express.Router

    constructor(app: express.Router) {
        this.Router = app;
        this.loadRoutes()
    }

    private loadRoutes() {
        this.Router.post("/", this.newBin)
        this.Router.get("/", this.getBin)
    }

    private async newBin(Req: express.Request, Res: express.Response) {
        await BinController.new(Req.body).then((response) => {
            return Res.status(200).json({
                identification: response.identification
            })
        }).catch((error: string) => {
            return Res.status(400).json({
                warning: error
            })
        })
    }
    private async getBin(Req: express.Request, Res: express.Response) {
        try {
            const uuid = Req.query["identification"] as string
            if (!uuid) {
                return Res.status(400).json({
                    warning: "Ops!"
                })
            }
            await BinController.get(uuid).then((response) => {
                return Res.status(200).json(response)
            }).catch((error: string) => {
                return Res.status(404).json({
                    warning: error
                })
            })
        } catch (e) {
            return Res.status(400).json({
                warning: `Confira o dado fornecido.`
            })
        }

    }

}


export default new binRoute(express.Router())
