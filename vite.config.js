import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {//server-proxy configuration
      '/api': {
        target: 'http://localhost:3000' //if the url starts with /api the request directly goes to this server
      },
      '/images': {
        target: 'http://localhost:3000'
      }
    }
  }
})
