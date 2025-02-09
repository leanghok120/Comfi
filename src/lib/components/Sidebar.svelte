<script>
	import { HomeIcon, PlusIcon, UserRoundIcon } from 'lucide-svelte';
	import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile } from 'svelte-clerk';
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
	<div>
		<SignedOut>
			<SignInButton />
		</SignedOut>
		<SignedIn>
			<UserButton />
		</SignedIn>
	</div>
</ul>
