import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarlinkApp from './StarlinkApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarlinkApp />
  </StrictMode>,
)
