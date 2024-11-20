import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import devServer from "@hono/vite-dev-server";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    devServer({
      exclude: [/^(?!.*api).+$/],
      entry: "src/server/index.ts",
      injectClientScript: false,
    }),
  ],
  build: {
    outDir: "dist/client",
  },
});
