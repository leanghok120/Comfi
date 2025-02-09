import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string | null;
		const imageUrl = formData.get('imageUrl') as string;

		if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.startsWith('http')) {
			return fail(400, { error: 'Invalid or missing image URL' });
		}

		await db.insert(post).values({
			title: title ?? null,
			imageUrl: imageUrl
		});

		return redirect(303, '/');
	}
};
