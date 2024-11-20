import "dotenv/config";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app;

if (process.env.NODE_ENV === "production") {
  app.use("*", serveStatic({ root: "./dist/client" }));
  app.get("*", serveStatic({ path: "./dist/client/index.html" }));
  serve(app, () => {
    console.log("Server running on http://localhost:3000");
  });
}

export type AppType = typeof routes;
export default app;
