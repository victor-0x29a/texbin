import React from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../../components/editor.component'
import axios, { AxiosError } from 'axios'
import { url } from '../../config/backend.config'
import LoadingComponent from '../../components/loading.component'

const ViewPage = () => {
    const [content, setContent] = React.useState("")
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const { identification } = useParams()

    const fetchData = async () => {
        await axios.get(url + `/bin?identification=${identification}`).then((response) => {
            const Response = response.data["content"] as string
            setLoading(false)
            setError(false)
            setContent(Response)
        }).catch((err) => {
            setError(true)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        async function collect() {
            await fetchData()
        }
        collect()
    })
    return <div className='Container Page'>
        {!error ? <>
            <EditorComponent Content={content} setContent={setContent} Limit={2800} ReadOnly={true} />
        </> : <>
            <h3 className='error' style={{ padding: "20px", borderRadius: "6px" }}>
                Bin não encontrada!
            </h3>
        </>}
        <LoadingComponent state={loading} />
    </div>
}


export default ViewPage
