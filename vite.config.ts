import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./inc123-prototype/src"),
    },
  },
  root: "inc123-prototype",
  publicDir: "public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
