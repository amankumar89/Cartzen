import express, { type Request, type Response } from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.listen(ENV.PORT, () => {
  console.log(`Listening on  http://localhost:${ENV.PORT}`);
});

export default app;
