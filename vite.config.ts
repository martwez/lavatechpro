import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        security: resolve(import.meta.dirname, 'security/index.html'),
        portfolio: resolve(import.meta.dirname, 'portfolio/index.html'),
        websiteDesign: resolve(import.meta.dirname, 'website-design/index.html'),
        pcHelp: resolve(import.meta.dirname, 'pc-help/index.html'),
        phoneHelp: resolve(import.meta.dirname, 'phone-help/index.html'),
        starlink: resolve(import.meta.dirname, 'starlink/index.html'),
        printer3d: resolve(import.meta.dirname, '3d-printing/index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
