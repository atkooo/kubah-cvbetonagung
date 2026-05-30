import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  const devWatchEnabled = process.env.DISABLE_HMR !== "true";
  const devWatchUsePolling = process.env.USE_POLLING !== "false";

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      hmr: devWatchEnabled,
      watch: devWatchEnabled
        ? {
            usePolling: devWatchUsePolling,
            interval: 250,
          }
        : null,
    },
  };
});
