import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return <div className='Container home-page'>
        <h1>TexBin</h1>
        <p><Link to={"/novo"}>Crie</Link> um novo bin, <strong>agora!</strong></p>
    </div>
}

export default HomePage
