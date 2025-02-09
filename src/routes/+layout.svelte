<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Dock from '$lib/components/Dock.svelte';
	import { ClerkProvider } from 'svelte-clerk';
	import { onMount } from 'svelte';

	let { children } = $props();

	let isMobile = $state(false);

	function updateIsMobile() {
		isMobile = window.innerWidth < 768;
	}

	onMount(() => {
		updateIsMobile();
		window.addEventListener('resize', updateIsMobile);
		return () => {
			window.removeEventListener('resize', updateIsMobile);
		};
	});
</script>

<svelte:head>
	<title>comfi</title>
</svelte:head>

<ClerkProvider>
	<div class="min-h-screen max-w-full">
		{#if isMobile}
			<Dock />
		{:else}
			<Sidebar />
		{/if}
		<main class="mx-auto min-h-full max-w-xl p-5">
			{@render children()}
		</main>
	</div>
</ClerkProvider>
