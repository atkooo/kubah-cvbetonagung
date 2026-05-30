import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const DEFAULT_PORT = 3000;
const MAX_AUTO_PORT = 3010;
const PORT = Number(process.env.PORT || DEFAULT_PORT);
const DEV_WATCH_ENABLED = process.env.DISABLE_HMR !== "true";
const DEV_WATCH_USE_POLLING = process.env.USE_POLLING !== "false";

// Middleware for parsing JSON requests
app.use(express.json());

// Setup Vite Dev Server / Serve Static in Production
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: DEV_WATCH_ENABLED,
        watch: DEV_WATCH_ENABLED
          ? {
              usePolling: DEV_WATCH_USE_POLLING,
              interval: 250,
            }
          : null,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const listen = (port: number) => {
    const server = app.listen(port, "0.0.0.0", () => {
      console.log(`Server launched and listening on http://localhost:${port}`);
    });

    server.on("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "EADDRINUSE" && !process.env.PORT && port < MAX_AUTO_PORT) {
        console.warn(`Port ${port} is already in use, trying ${port + 1}...`);
        listen(port + 1);
        return;
      }

      throw error;
    });
  };

  listen(PORT);
}

setupServer();
