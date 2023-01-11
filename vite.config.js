import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "lazy/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
