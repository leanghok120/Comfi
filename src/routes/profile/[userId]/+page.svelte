<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import Modal from '$lib/components/Modal.svelte';
	import { SettingsIcon } from 'lucide-svelte';
	import { uploadFiles } from '$lib/utils/uploadthing';
	import { page } from '$app/state';

	const { data } = $props();
	const session = authClient.useSession();

	const isOwnProfile = $derived(page.params.userId === $session.data?.user.id);

	let showModal = $state(false);
	let name = $state(data.user.name);
	let bio = $state(data.user.bio) as string | undefined;
	let imageUrl = $state(data.user.image);

	async function handleFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input.files?.length) return;
		const file = input.files[0];

		const res = await uploadFiles('imageUploader', { files: [file] });
		if (res.length > 0) {
			imageUrl = res[0].url;
			await authClient.updateUser({ image: imageUrl });
		}
	}
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="card bg-base-100 card-md w-96 shadow-sm">
		<div class="card-body relative">
			{#if isOwnProfile}
				<button class="btn btn-ghost absolute top-2 right-2" onclick={() => (showModal = true)}>
					<SettingsIcon />
				</button>
				<Modal bind:showModal>
					<h1 class="text-2xl font-bold">Settings</h1>
					<h2 class="mt-4 text-lg font-bold">Profile</h2>
					<button
						class="avatar mt-4 cursor-pointer transition-all hover:scale-95"
						onclick={() => document.getElementById('fileInput')?.click()}
					>
						<div class="w-20 rounded-xl">
							<img src={imageUrl} alt="profile" />
						</div>
					</button>
					<input
						type="file"
						id="fileInput"
						class="hidden"
						accept="image/*"
						onchange={handleFileSelect}
					/>
					<form
						class="mt-2 flex flex-col gap-4"
						onsubmit={async () => {
							await authClient.updateUser({ name, bio });
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
										goto('/signin');
									}
								}
							});
						}}
					>
						logout
					</button>
				</Modal>
			{/if}
			<div class="avatar">
				<div class="w-24 rounded-xl">
					<img src={imageUrl} alt="profile" />
				</div>
			</div>
			<h1 class="text-xl font-bold">{name}</h1>
			<p>{bio}</p>
			{#if data.user.email === 'leanghokoeng5@gmail.com'}
				<div class="badge badge-primary">comfi developer</div>
			{/if}
			<h2 class="mt-3 text-xl font-bold">Posts</h2>
			<div class="posts space-y-5">
				{#if data.posts.length === 0}
					<p>no posts!</p>
				{/if}

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
