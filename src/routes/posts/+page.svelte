<script lang="ts">
	import type { Post } from '@prisma/client';
	import type { PageData } from './$types';
	import PostHeader from '../../components/PostHeader.svelte';
	export let data: PageData;
	let { allPosts } = data;
</script>

<div class="flex flex-1 flex-col gap-4">
	{#each allPosts as post}
		<a href={'posts/' + post.slug} class="flex-1 rounded-sm flex flex-col">
			<PostHeader
				title={post.title}
				year={post.publishedAt.getFullYear()}
				month={post.publishedAt.getMonth()}
				day={post.publishedAt.getDay()}
				tags={['#Testing']}
			/>
			<div class="text-content font-semibold line-clamp-10">
				{post.content}
			</div>
		</a>
	{/each}
</div>
