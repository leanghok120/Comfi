<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();
</script>

<main class="h-screen max-w-full">
	<Sidebar />
	<main class="mx-auto max-w-3xl p-5">
		{@render children()}
	</main>
</main>
