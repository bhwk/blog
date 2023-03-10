<script lang="ts">
	import type { PageData } from './$types';
	import { getTags } from '../../utils/getTags'; // gets tag string name from Tag[]
	import PostHeader from '../../components/PostHeader.svelte';
	import Content from '../../components/Content.svelte';
	export let data: PageData;
	let { allPosts } = data;
</script>

<title>Posts</title>

<div class="flex flex-1 flex-col gap-8">
	{#each allPosts as post}
		<a href={'posts/' + post.slug} class="flex-1 rounded-sm flex flex-col">
			<PostHeader
				title={post.title}
				year={post.publishedAt.getFullYear()}
				month={post.publishedAt.getMonth()}
				day={post.publishedAt.getDay()}
				tags={getTags(post.tags)}
			/>
			<div class="line-clamp-5">
				<Content>
					{@html post.content}
				</Content>
			</div>
		</a>
	{/each}
</div>
