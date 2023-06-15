export interface EditorComponentProps {
    setContent: (conteudo: string) => void
    Content: string
    Limit: number,
    ReadOnly: boolean
}

export interface AlertComponentProps {
    Type: "success" | "error"
    Message: string
    cb: () => void
}

export interface LoadingComponentProps {
    state: boolean
}
