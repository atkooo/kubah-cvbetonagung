import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const DEFAULT_PORT = 3000;
const PORT = Number(process.env.PORT || DEFAULT_PORT);

// Middleware for parsing JSON requests
app.use(express.json());

// Setup Vite Dev Server / Serve Static in Production
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
        watch: null,
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
      console.log(`Server launched and listening on http://0.0.0.0:${port}`);
    });

    server.on("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "EADDRINUSE" && !process.env.PORT && port === DEFAULT_PORT) {
        listen(DEFAULT_PORT + 1);
        return;
      }

      throw error;
    });
  };

  listen(PORT);
}

setupServer();
