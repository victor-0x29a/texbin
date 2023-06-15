import React from 'react'
import { LoadingComponentProps } from '../types/components.type'


const LoadingComponent = ({ state }: LoadingComponentProps) => {
    return <>
        {state && <div className='loading'>
            <h1>TexBin</h1>
        </div>}
    </>
}

export default LoadingComponent
