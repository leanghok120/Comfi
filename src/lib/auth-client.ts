import { env } from '$env/dynamic/public';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/svelte';
export const authClient = createAuthClient({
	baseURL: env.PUBLIC_BETTER_AUTH_URL,
	plugins: [
		inferAdditionalFields({
			user: {
				bio: {
					type: 'string'
				}
			}
		})
	]
});
