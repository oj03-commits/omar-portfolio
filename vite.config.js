import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes every image and file load correctly on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./",
});
