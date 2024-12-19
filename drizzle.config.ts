import { env } from "~/env.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: String(env.TURSO_URL),
    authToken: String(env.TURSO_AUTH_TOKEN),
  },
} satisfies Config;
