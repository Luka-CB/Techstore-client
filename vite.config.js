import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  global: {},
  server: {
    proxy: {
      "/api": {
        target: "https://techstore-api-3jmr.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
