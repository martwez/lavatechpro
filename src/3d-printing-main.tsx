import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Printer3DApp from './Printer3DApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Printer3DApp />
  </StrictMode>,
)
