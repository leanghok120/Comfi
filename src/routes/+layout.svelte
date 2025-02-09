<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { ClerkProvider } from 'svelte-clerk';

	let { children } = $props();
</script>

<svelte:head>
	<title>comfi</title>
</svelte:head>

<ClerkProvider>
	<div class="h-screen max-w-full">
		<Sidebar />
		<main class="mx-auto h-full max-w-xl p-5">
			{@render children()}
		</main>
	</div>
</ClerkProvider>
