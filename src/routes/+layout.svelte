<script lang="ts">
	import '../app.css';
</script>

<div class="max-w-4xl my-4 mx-auto bg-gray-700 min-h-screen py-4 px-8">
	<nav class="flex mb-4 text-white font-bold text-xl">
		<div class="flex gap-4">
			<a href="/">Home</a>
			<a href="/posts">Posts</a>
		</div>
	</nav>
	<slot />
</div>
