<script>
	import { authClient } from '$lib/auth-client';
	import { HomeIcon, PlusIcon, UserRoundIcon } from 'lucide-svelte';

	const session = authClient.useSession();
</script>

<div class="dock dock-md border-base-200 bg-base-100 border-t-4">
	<a href="/" class="dock-label">
		<HomeIcon />
		<span class="dock-label">Home</span>
	</a>

	<a href="/create" class="dock-label">
		<PlusIcon />
		<span class="dock-label">Create</span>
	</a>

	<a
		href={$session.data?.user.id ? `/profile/${$session.data.user.id}` : '/signin'}
		class="dock-label"
	>
		<UserRoundIcon />
		<span class="dock-label">Profile</span>
	</a>
</div>
