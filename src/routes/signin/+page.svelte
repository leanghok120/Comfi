<script>
	import { authClient } from '$lib/auth-client';
</script>

<div class="flex min-h-screen items-center justify-center">
	<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-96 border p-4 shadow-sm">
		<legend class="fieldset-legend">Login</legend>

		<button
			class="btn mt-4"
			onclick={async () => {
				await authClient.signIn.social({
					provider: 'github',
					callbackURL: '/'
				});
			}}>Sign in with Github</button
		>
	</fieldset>
</div>
