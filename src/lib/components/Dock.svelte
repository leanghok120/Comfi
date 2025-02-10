<script>
	import { HomeIcon, PlusIcon, UserRoundIcon } from 'lucide-svelte';
</script>

<div class="dock dock-md">
	<a href="/" class="dock-label">
		<HomeIcon />
		<span class="dock-label">Home</span>
	</a>

	<a href="/create" class="dock-label">
		<PlusIcon />
		<span class="dock-label">Create</span>
	</a>

	<a href="/profile" class="dock-label">
		<UserRoundIcon />
		<span class="dock-label">Profile</span>
	</a>
</div>
