import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/7-s-Band/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
