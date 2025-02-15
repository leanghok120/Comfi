import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import { post, user as userTable } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const user = await db.query.user.findFirst({
		where: eq(userTable.id, params.userId)
	});
	if (!user) {
		throw error(404, { message: 'user not found' });
	}

	const posts = await db.query.post.findMany({
		where: eq(post.userId, params.userId),
		orderBy: desc(post.createdAt)
	});
	return { posts, user };
};
