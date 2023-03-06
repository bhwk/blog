<script lang="ts">
	import type { Post } from '@prisma/client';
	import type { PageData } from './$types';
	export let data: PageData;
	let { allPosts } = data;
	console.log(allPosts);
	console.log(data);
</script>

{#each allPosts as post}
	<a href={'posts/' + post.title}>{post.title}<br /></a>
{/each}

<a href="posts/1">Post one</a>
