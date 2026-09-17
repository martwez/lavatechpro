import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebsiteDesignApp from './WebsiteDesignApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebsiteDesignApp />
  </StrictMode>,
)
