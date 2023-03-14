<script lang="ts">
	import type { PageData } from './$types';
	import { getTags } from '../../../utils/getTags'; // gets tag string name from Tag[]
	import PostHeader from '../../../components/PostHeader.svelte';
	import Content from '../../../components/Content.svelte';
	export let data: PageData;
	$: ({ allPosts } = data);
</script>

<title>Posts</title>

<div class="flex flex-1 flex-col gap-8">
	{#each allPosts as post}
		<div class="flex-1 rounded-sm flex flex-col">
			<PostHeader
				slug={post.slug}
				title={post.title}
				year={post.publishedAt.getFullYear()}
				month={post.publishedAt.getMonth() + 1}
				day={post.publishedAt.getDate()}
				tags={getTags(post.tags)}
			/>
			<div class="line-clamp-5">
				<Content>
					{@html post.content}
				</Content>
			</div>
			<a class="text-link" href={'/posts/' + post.slug}>Read more...</a>
		</div>
	{/each}
</div>
