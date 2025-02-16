<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const posts = $derived(data.posts);
</script>

<div class="flex flex-col items-center gap-10 pb-15">
	{#each posts as post}
		<div class="card border-base-200 bg-base-100 w-full border-4 shadow-sm">
			<div class="flex items-center gap-4 p-4">
				<a href="/profile/{post.userId}" data-sveltekit-preload-data="hover">
					<img
						src={post.user.image}
						alt="{post.user.name}'s profile picture"
						class="border-base-200 h-10 w-10 rounded-full border shadow-sm"
						width="15"
						height="15"
					/>
				</a>
				<a
					href="/profile/{post.userId}"
					data-sveltekit-preload-data="hover"
					class="text-lg font-semibold hover:underline"
				>
					{post.user.name}
				</a>
			</div>
			<figure class="px-10 pt-5">
				<img
					src={post.imageUrl}
					alt={post.title}
					class="rounded-xl"
					loading="lazy"
					decoding="async"
				/>
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title">{post.title}</h2>
			</div>
		</div>
	{/each}
</div>
