import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";
import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

// Neon serverless SQL client (HTTP-based, not TCP)
const sql = neon(ENV.DATABASE_URL);

export const db = drizzle(sql, { schema });
