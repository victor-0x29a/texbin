import React from 'react'
import EditorComponent from '../../components/editor.component'
import axios, { AxiosError } from 'axios'
import { url } from '../../config/backend.config'
import { responseError, responseOk } from '../../types/backend.type'
import AlertComponent from '../../components/alert.component'
import { useNavigate } from 'react-router-dom'
import LoadingComponent from '../../components/loading.component'

const NovoPage = () => {
    const [content, setContent] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState("")
    const [error, setError] = React.useState("")
    const [uuid, setUuid] = React.useState("0x29a")
    const navigate = useNavigate()

    const handleSave = async () => {
        setLoading(true);
        await axios.post(url + "/bin", {
            content: content,
            identification: Math.floor(Math.random() * 0x29a).toString()
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            const Response = response.data as responseOk
            setSuccess(`Bin salva, clique aqui.`)
            setError("")
            setUuid(Response.identification)
            setLoading(false)
        }).catch((err) => {
            const Error = err as AxiosError
            const Data = Error.response!.data as responseError
            setError(Data.warning)
            setSuccess("")
            setLoading(false)
        })
    }

    return <div className='Container Page'>
        {success.length > 0 && <AlertComponent Type="success" Message={success} cb={() => {
            navigate(`/bin/${uuid}`)
            setSuccess("")
        }} />}
        {error.length > 0 && <AlertComponent Type="error" Message={error} cb={() => {
            //
        }} />}
        <EditorComponent Content={content} setContent={setContent} Limit={2800} ReadOnly={false} />
        <button className='sender' onClick={async () => await handleSave()}>Salvar</button>
        <LoadingComponent state={loading} />

    </div>
}

export default NovoPage
