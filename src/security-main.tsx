import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SecurityApp from './SecurityApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SecurityApp />
  </StrictMode>,
)
