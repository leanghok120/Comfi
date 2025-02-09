<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const posts = $derived(data.posts);
</script>

<div class="flex flex-col items-center gap-10 pb-15">
	{#each posts as post}
		<div class="card border-base-200 bg-base-100 w-full border-4 shadow-sm">
			<figure class="px-10 pt-10">
				<img src={post.imageUrl} alt={post.title} class="rounded-xl" />
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title">{post.title}</h2>
			</div>
		</div>
	{/each}
</div>
