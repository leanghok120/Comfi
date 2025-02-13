<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import Modal from '$lib/components/Modal.svelte';
	import { SettingsIcon } from 'lucide-svelte';

	const { data } = $props();
	const session = authClient.useSession();

	let showModal = $state(false);

	let name = $state($session.data?.user.name);
	let bio = $state($session.data?.user.bio);
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="card bg-base-100 card-md w-96 shadow-sm">
		<div class="card-body relative">
			<button class="btn btn-ghost absolute top-2 right-2" onclick={() => (showModal = true)}
				><SettingsIcon /></button
			>
			<Modal bind:showModal>
				<h1 class="text-2xl font-bold">Settings</h1>
				<h2 class="mt-4 text-lg font-bold">Profile</h2>
				<form
					class="mt-2 flex flex-col gap-4"
					onsubmit={async () => {
						await authClient.updateUser({
							name,
							bio
						});
					}}
				>
					<label>
						<span class="label">name</span>
						<input type="text" placeholder="name" class="input w-full" bind:value={name} />
					</label>
					<label>
						<span class="label">bio</span>
						<input type="text" placeholder="bio" class="input w-full" bind:value={bio} />
					</label>
					<button class="btn btn-primary">save</button>
				</form>
				<div class="divider"></div>
				<h2 class="mt-4 text-lg font-bold">Danger</h2>
				<button
					class="btn btn-error mt-4"
					onclick={async () => {
						await authClient.signOut({
							fetchOptions: {
								onSuccess: () => {
									goto('signin');
								}
							}
						});
					}}>logout</button
				>
			</Modal>
			<div class="avatar">
				<div class="w-20 rounded-xl">
					<img src={$session.data?.user.image} alt="profile" />
				</div>
			</div>
			<h1 class="text-xl font-bold">{name}</h1>
			<p>{bio}</p>
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
