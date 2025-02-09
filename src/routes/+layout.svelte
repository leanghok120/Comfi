<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="h-screen max-w-full">
	{@render children()}
</main>
