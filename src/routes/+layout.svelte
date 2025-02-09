<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();
</script>

<div class="h-screen max-w-full">
	<Sidebar />
	<main class="mx-auto max-w-xl p-5">
		{@render children()}
	</main>
</div>
