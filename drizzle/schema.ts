import { sqliteTable, AnySQLiteColumn, index, foreignKey, primaryKey, text, integer, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const account = sqliteTable("account", {
	userId: text().notNull().references(() => user.id, { onDelete: "cascade" } ),
	type: text().notNull(),
	provider: text().notNull(),
	providerAccountId: text().notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text(),
	idToken: text("id_token"),
	sessionState: text("session_state"),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`).notNull(),
},
(table) => [
	index("accounts_userId_idx").on(table.userId),
	primaryKey({ columns: [table.provider, table.providerAccountId], name: "account_provider_providerAccountId_pk"})
]);

export const link = sqliteTable("link", {
	slug: text({ length: 30 }).primaryKey().notNull(),
	userLinkId: text().notNull().references(() => userLink.id, { onDelete: "cascade" } ),
	description: text({ length: 255 }),
	url: text().notNull(),
	clicks: integer().default(0).notNull(),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`).notNull(),
},
(table) => [
	index("userLinkId_idx").on(table.userLinkId),
]);

export const session = sqliteTable("session", {
	sessionToken: text().primaryKey().notNull(),
	userId: text().notNull().references(() => user.id, { onDelete: "cascade" } ),
	expires: integer().notNull(),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`).notNull(),
},
(table) => [
	index("sessions_userId_idx").on(table.userId),
]);

export const userLink = sqliteTable("userLink", {
	id: text().primaryKey().notNull(),
	userId: text().references(() => user.id, { onDelete: "cascade" } ),
	totalLinks: integer("total_links").default(0).notNull(),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`).notNull(),
},
(table) => [
	uniqueIndex("userLinks_userId_idx").on(table.userId),
]);

export const user = sqliteTable("user", {
	id: text().primaryKey().notNull(),
	name: text(),
	email: text().notNull(),
	emailVerified: integer(),
	image: text(),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`).notNull(),
});

export const verificationToken = sqliteTable("verificationToken", {
	identifier: text().notNull(),
	token: text().notNull(),
	expires: integer().notNull(),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`).notNull(),
},
(table) => [
	primaryKey({ columns: [table.identifier, table.token], name: "verificationToken_identifier_token_pk"})
]);

export const foo = sqliteTable("foo", {
	bar: text().default("Hey!").notNull(),
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
});

