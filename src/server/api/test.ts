import { db } from "../db";
import { accounts } from "../db/schema";

export async function getFoo() {
  const res = await db.select().from(accounts).all();
  return res;
}
