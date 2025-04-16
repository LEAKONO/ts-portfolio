import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ⬅️ needed for resolving paths

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ⬅️ this enables "@/..." imports
    },
  },
})
