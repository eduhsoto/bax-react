import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ssr } from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
