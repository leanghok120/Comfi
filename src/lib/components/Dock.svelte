<script>
	import { HomeIcon, PlusIcon } from 'lucide-svelte';
	import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
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

	<div class="dock-label">
		<SignedOut>
			<SignInButton />
		</SignedOut>
		<SignedIn>
			<UserButton />
		</SignedIn>
		<span class="dock-label">Profile</span>
	</div>
</div>
