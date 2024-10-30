import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: "eslint ./src/**/*.{ts,tsx,json,js,jsx}" },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
