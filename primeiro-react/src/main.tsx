import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//chamando o servidor
import './mocks/server.ts'
import { App } from './App.tsx'
//para testar as outras aulas
//import { App } from './06-componentes-e-props.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
