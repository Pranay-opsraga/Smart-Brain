import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    lightningcss: {
      errorRecovery: true
    }
  },
  server: {
    proxy: {
      '/v2': {
        target: 'https://api.clarifai.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
