<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Dock from '$lib/components/Dock.svelte';
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
	<meta name="description" content="A small cozy cozy room on the internet for yappers." />
	<meta property="og:title" content="comfi" />
	<meta property="og:description" content="A small cozy cozy room on the internet for yappers." />
	<meta property="og:url" content="https://comfi.vercel.app" />
</svelte:head>

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
