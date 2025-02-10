import { env } from '$env/dynamic/private';
import { createAuthClient } from 'better-auth/svelte';
export const authClient = createAuthClient({
	baseURL: env.BETTER_AUTH_URL
});
