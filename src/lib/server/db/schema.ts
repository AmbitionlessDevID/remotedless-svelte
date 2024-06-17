import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	email: text('email').unique(),
	photoUrl: text('photoUrl'),
	password: text('password').notNull(),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(current_timestamp)`),
});

export const project = sqliteTable('project', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	description: text('description'),
	createdBy: integer('creatorId').references(() => user.id),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(current_timestamp)`),
	updatedAt: text('updatedAt'),
})

export const task = sqliteTable('task', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('name').notNull(),
	description: text('description'),
	status: text('status').default('backlog'),
	prioriry: text('priority'),
	createdAt: text('createdAt')
		.notNull()
		.default(sql`(current_timestamp)`),
	updatedAt: text('updatedAt'),
	createdBy: integer('creatorId').references(() => user.id),
	projectId: integer('projectId').references(() => project.id)
})


