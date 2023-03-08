<script lang="ts">
	import '../app.css';
	import '@fontsource/jetbrains-mono';
</script>

<div class="max-w-4xl mx-auto min-h-screen py-4 px-8">
	<nav class="flex mb-4 text-link font-bold text-3xl">
		<div class="flex gap-4">
			<a href="/">Home</a>
			<a href="/posts">Posts</a>
		</div>
	</nav>
	<slot />
</div>

<style>
	:global(body) {
		font-family: 'Jetbrains-mono', sans-serif;
	}
</style>
