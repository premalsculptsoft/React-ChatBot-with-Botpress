import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: { port: 3001 },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
