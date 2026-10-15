import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// src/App.jsx is a symlink to the app source; preserve symlinks so the .jsx loader applies.
export default defineConfig({
  plugins: [react()],
  resolve: { preserveSymlinks: true },
  server: { host: "0.0.0.0", port: 5173, strictPort: true, allowedHosts: true },
});
