import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },

  resolve: {
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname, './src'),
      },
      {
        find: './runtimeConfig', replacement: './runtimeConfig.browser',
      }

    ]
  }
});
