import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@network": path.resolve(__dirname, "./src/network"),
      "@hooks": path.resolve(__dirname, "./src/network/hooks"),
      "@modules": path.resolve(__dirname, "./src/components/modules"),
      "@generic": path.resolve(__dirname, "./src/components/generic"),
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
