import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Base path matches the GitHub Pages project URL (/<repo-name>/).
// Override with VITE_BASE at build time if deploying elsewhere.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/toralva-trailer-hub/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
