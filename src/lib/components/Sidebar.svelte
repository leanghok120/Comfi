<script>
	import { authClient } from '$lib/auth-client';
	import { HomeIcon, PlusIcon, UserRoundIcon } from 'lucide-svelte';

	const session = authClient.useSession();
</script>

<ul class="menu fixed top-0 bottom-0 flex items-center justify-between p-3">
	<li>
		<a class="tooltip tooltip-right" data-tip="Home" aria-label="Home" href="/"><HomeIcon /></a>
	</li>
	<li>
		<a class="tooltip tooltip-right" data-tip="Create" aria-label="Create" href="/create"
			><PlusIcon /></a
		>
	</li>
	<li>
		<a
			class="tooltip tooltip-right"
			data-tip="Profile"
			aria-label="Profile"
			href={$session.data?.user.id ? `/profile/${$session.data.user.id}` : '/signin'}
			><UserRoundIcon /></a
		>
	</li>
</ul>
