import TextModel from "../database/models/text";
import { binNewResponse, binTypeController } from "../types/bin.type";
import { textTypeModel } from "../types/text.type";

const BinController: binTypeController = {
    new: async (data: Partial<textTypeModel>): binNewResponse => {
        return new Promise(async (resolver, reject) => {
            try {
                if (!data || !data.content || typeof data.content !== "string") {
                    reject(`Confira o objeto enviado.`)
                }
                if (!data.identification || typeof data.identification !== "string") {
                    reject(`Confira a indetificação.`)
                }
                if (data.content!.length > 2800) {
                    reject(`Conteúdo muito longo.`)
                }
                const conteudo = data.content as string
                const identification = conteudo.slice(1, 4) + Math.floor(Math.random() * 44000).toString() + data.identification.toString().slice(1, 8) + Math.floor(Math.random() * 84000).toString() + Math.floor(Math.random() * 0x29a).toString()
                await TextModel.create({
                    content: conteudo,
                    identification: identification
                }).then((data: textTypeModel) => {
                    resolver({
                        identification: identification,
                        status: "Criado."
                    })
                }).catch((e) => {
                    reject(`Houve um erro interno ao tentar registrar os dados.`)
                })
            } catch (e) {
                reject(`Houve um erro interno.`)
            }
        })
    },
    get: (identification: string) => {
        return new Promise(async (resolve, reject) => {
            try {
                if (!identification || identification.length >= 200) {
                    reject(`Muito longo.`);
                }
                if (identification.length < 1) {
                    reject(`Muito curto.`)
                }
                const data = await TextModel.findOne({
                    where: {
                        identification: identification
                    }
                })
                if (!data) {
                    reject("Ops!")
                } else {
                    resolve({
                        content: data.content
                    })
                }
            } catch (e) {
                reject(`Houve um erro interno.`)
            }
        })
    }
}

export default BinController
