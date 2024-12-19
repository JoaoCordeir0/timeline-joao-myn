import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/timeline-joao-myn/' : '',
  build: {
    target: 'esnext'
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  },
})  