import { Routes, Route } from 'react-router-dom'
import HomePage from './home'
import NovoPage from './novo'
import ViewPage from './view'
import NotFoundPage from './notfound'

const Rotas = () => {

    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/novo" element={<NovoPage />} />
        <Route path="/bin/:identification" element={<ViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
}

export default Rotas
