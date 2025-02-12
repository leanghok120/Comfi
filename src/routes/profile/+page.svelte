<script lang="ts">
	import { authClient } from '$lib/auth-client';

	const { data } = $props();
	const session = authClient.useSession();
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="card bg-base-100 card-md w-96 shadow-sm">
		<div class="card-body">
			<div class="avatar">
				<div class="w-20 rounded-xl">
					<img src={$session.data?.user.image} alt="profile" />
				</div>
			</div>
			<h1 class="text-xl font-bold">{$session.data?.user.name}</h1>
			<p>{$session.data?.user.bio}</p>
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
