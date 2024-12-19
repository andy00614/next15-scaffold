import { relations } from "drizzle-orm/relations";
import { user, account, userLink, link, session } from "./schema";

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	accounts: many(account),
	sessions: many(session),
	userLinks: many(userLink),
}));

export const linkRelations = relations(link, ({one}) => ({
	userLink: one(userLink, {
		fields: [link.userLinkId],
		references: [userLink.id]
	}),
}));

export const userLinkRelations = relations(userLink, ({one, many}) => ({
	links: many(link),
	user: one(user, {
		fields: [userLink.userId],
		references: [user.id]
	}),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));