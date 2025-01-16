import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import { resolve } from 'path'

const rootDir = resolve(__dirname)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react"
    })
  ],
  resolve: {
    alias: {
      '@': resolve(rootDir, 'src')
    }
  }
})
