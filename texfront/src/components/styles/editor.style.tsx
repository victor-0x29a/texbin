import styled from "styled-components";


export const EditorText = styled.textarea`
    width: 80%;
    height: 60%;
    resize: none;
    cursor: text;
    border-radius: 6px;
    font-size: 1.3rem;
    background-color: #566981;
    color: var(--primary);
    font-family: monospace;
    border: 0;
&:focus {
    border: 0;
    outline: 0;
}

`
