import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
  userId: text("user_id").notNull(),
  originalUrl: text("original_url").notNull(),
  shortCode: varchar("short_code", { length: 20 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type InsertLink = typeof links.$inferInsert;
export type SelectLink = typeof links.$inferSelect;
