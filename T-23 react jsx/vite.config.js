import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // ✅ fixed
  root: "src",        // optional: only if your root is in "src"
});

