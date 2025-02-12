<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import Modal from '$lib/components/Modal.svelte';
	import { SettingsIcon } from 'lucide-svelte';

	const { data } = $props();
	const session = authClient.useSession();

	let showModal = $state(false);
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="card bg-base-100 card-md w-96 shadow-sm">
		<div class="card-body relative">
			<button class="btn btn-ghost absolute top-2 right-2" onclick={() => (showModal = true)}
				><SettingsIcon /></button
			>
			<Modal bind:showModal>
				<button
					class="btn btn-error"
					onclick={async () => {
						await authClient.signOut({
							fetchOptions: {
								onSuccess: () => {
									goto('signin');
								}
							}
						});
					}}>Logout</button
				>
			</Modal>
			<div class="avatar">
				<div class="w-20 rounded-xl">
					<img src={$session.data?.user.image} alt="profile" />
				</div>
			</div>
			<h1 class="text-xl font-bold">{$session.data?.user.name}</h1>
			<p>{$session.data?.user.bio}</p>
			{#if $session.data?.user.email === 'leanghokoeng5@gmail.com'}
				<div class="badge badge-primary">comfi developer</div>
			{/if}
			<h2 class="mt-3 text-xl font-bold">Posts</h2>
			<div class="posts space-y-5">
				{#each data.posts as post}
					<div class="card bg-base-200 card-sm w-full shadow-sm">
						<figure class="px-10 pt-10">
							<img src={post.imageUrl} alt={post.title} class="rounded-xl" />
						</figure>
						<div class="card-body items-center text-center">
							<h2 class="card-title">{post.title}</h2>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
