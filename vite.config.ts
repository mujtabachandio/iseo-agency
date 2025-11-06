import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'mixed-decls', 'color-functions'],
        api: 'modern-compiler',
      },
    },
  },
  server: {
    host: true,        // makes it accessible to ngrok / LAN
    port: 5173,        // specify your dev port
  },
})
