import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@Components": path.resolve(__dirname, './src/components'),
      "@Layouts": path.resolve(__dirname, './src/layouts'),
      "@Types": path.resolve(__dirname, './src/types'),
      "@Features": path.resolve(__dirname, './src/features'),
      "@Const": path.resolve(__dirname, './src/constants'),
      "@Store": path.resolve(__dirname, './src/store'),
    }
  },
  css: {
    preprocessorOptions: {
      // 使用 styleResources 注入全局样式
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, 'src/styles/base.scss')}";
          @import "${path.resolve(__dirname, 'src/styles/index.scss')}";
        `,
      },
    },
  },
})
