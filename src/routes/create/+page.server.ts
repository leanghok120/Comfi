import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { auth } from '$lib/auth';

export const load: PageServerLoad = async ({ request }) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) {
		return redirect(303, '/signin');
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string | null;
		const imageUrl = formData.get('imageUrl') as string;
		const session = await auth.api.getSession({ headers: request.headers });

		if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.startsWith('http')) {
			return fail(400, { error: 'Invalid or missing image URL' });
		}

		await db.insert(post).values({
			title,
			imageUrl,
			userId: session?.user.id
		});

		return redirect(303, '/');
	}
};
