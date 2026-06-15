import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Faithful React port of the original static BUTJER site.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
})
