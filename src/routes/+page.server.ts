import { db } from '$lib/server/db';
import { desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { post } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const posts = await db.query.post.findMany({ orderBy: [desc(post.createdAt)] });

	return { posts };
};
