import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import { post } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ request }) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) {
		return redirect(303, '/signin');
	}

	const posts = await db.query.post.findMany({
		where: eq(post.userId, session.user.id),
		orderBy: desc(post.createdAt)
	});
	return { posts };
};
