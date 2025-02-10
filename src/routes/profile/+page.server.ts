import { authClient } from '$lib/auth-client';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const session = await authClient.getSession();
	if (!session.data) {
		return redirect(303, '/signin');
	}
};
