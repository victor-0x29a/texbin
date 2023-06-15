import { textTypeModel } from "./text.type"

export interface binStatus {
    identification: string
    status: string
}

export type binNewResponse = Promise<binStatus>
export type binGetResponse = Promise<Partial<textTypeModel>>

export interface binTypeController {
    new: (data: Partial<textTypeModel>) => binNewResponse
    get: (identification: string) => binGetResponse
}
