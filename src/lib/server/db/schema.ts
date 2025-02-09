import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const post = pgTable('post', {
	id: serial('id').primaryKey(),
	title: text('title'),
	imageUrl: text('imageUrl').notNull(),
	createdAt: timestamp('createdAt').defaultNow()
});
