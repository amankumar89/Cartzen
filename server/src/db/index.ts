import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

const pgPool = new Pool({ connectionString: ENV.DATABASE_URL });

pgPool.on("connect", () => {
  console.log("Connected to the database");
});

pgPool.on("error", (err) => {
  console.error("Database connection error", err);
});

export const db = drizzle({ client: pgPool, schema });
