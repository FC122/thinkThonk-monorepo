import { fileURLToPath, URL } from 'node:url'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages(),
    layouts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
