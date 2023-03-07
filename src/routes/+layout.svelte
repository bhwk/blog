<script lang="ts">
	import '../app.css';
</script>

<div class="max-w-4xl mx-auto min-h-full px-8">
	<nav class="px-4 my-4 flex text-white font-bold text-xl">
		<div class="flex gap-4">
			<a href="/">Home</a>
			<a href="/posts">Posts</a>
		</div>
	</nav>
	<slot />
</div>
