import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotFoundApp from './NotFoundApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotFoundApp />
  </StrictMode>,
)
