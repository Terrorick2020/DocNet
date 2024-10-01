import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "@/assets/scss/_vars.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
          `
      },
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  server: {
    cors: true,
    port: 5173,
    host: true,
  }
})


