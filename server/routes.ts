import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic API health route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Basic root route for testing
  app.get("/api", (_req, res) => {
    res.json({ message: "API is working" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
