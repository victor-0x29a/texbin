import React from 'react'
import { AlertComponentProps } from '../types/components.type'


const AlertComponent = ({ Type, Message, cb }: AlertComponentProps) => {

    return <div className={`${Type} alert`} onClick={() => cb()}>
        <p>
            {Message}
        </p>
    </div>
}

export default AlertComponent
