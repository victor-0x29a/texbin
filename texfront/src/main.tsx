import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './config/style.config'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </>
)
