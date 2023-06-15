import React from 'react'
import { EditorComponentProps } from '../types/components.type'
import { EditorText } from './styles/editor.style'

const EditorComponent = ({ setContent, Content, Limit, ReadOnly }: EditorComponentProps) => {
    const handleContent = (text: string) => {
        if (text.length > Limit) {
            setContent(Content)
        } else {
            setContent(text)
        }
    }

    const handleNothing = (text: string) => {
        setContent(Content)
    }
    return <>
        {!ReadOnly ? <>
            <EditorText onChange={(e) => handleContent(e.target.value.toString())} value={Content}>
            </EditorText>
        </> : <>
            <EditorText onChange={(e) => handleNothing(e.target.value.toString())} value={Content}>
            </EditorText>
        </>}
    </>
}

export default React.memo(EditorComponent)
