import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Локальный порт для разработки
  },
  build: {
    outDir: "dist", // Куда собирать фронт
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
