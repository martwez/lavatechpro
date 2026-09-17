import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PhoneHelpApp from './PhoneHelpApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhoneHelpApp />
  </StrictMode>,
)
