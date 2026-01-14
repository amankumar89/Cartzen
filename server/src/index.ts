import express, { type Request, type Response } from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";
import path from "path";

// routes
import usersRoutes from "./routes/usersRoute";
import productsRoutes from "./routes/productsRoute";
import commentsRoutes from "./routes/commentsRoute";

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/comments", commentsRoutes);

app.get("/{*any}", (_: Request, res: Response) => {
  return res.status(200).json({
    message:
      "Welcome to Cartzen API - Powered by PostgreSQL, Drizzle ORM & Clerk Authentication",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

// if (ENV.NODE_ENV === "production") {
//   const __dirname = path.resolve();

//   // serve static files from frontend/dist
//   app.use(express.static(path.join(__dirname, "web/dist")));

//   // handle SPA routing - send all non-API routes to index.html - react app
//   app.get("/{*any}", (req, res) => {
//     res.sendFile(path.join(__dirname, "web/dist/index.html"));
//   });
// }

if (ENV.NODE_ENV === "development") {
  app.listen(ENV.PORT, (error: Error | undefined) => {
    if (error) {
      console.error("Error starting server:", error);
      process.exit(1);
    }
    console.log(`Listening on  http://localhost:${ENV.PORT}`);
  });
}

export default app;
