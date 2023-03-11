<script lang="ts">
	import type { PageData } from './$types';
	import PostHeader from '../../../components/PostHeader.svelte';
	import Content from '../../../components/Content.svelte';
	import { getTags } from '../../../utils/getTags';
	export let data: PageData;
	let { post } = data;
</script>

<title>{post.title}</title>
<PostHeader
	slug={post.slug}
	title={post.title}
	year={post.publishedAt.getFullYear()}
	month={post.publishedAt.getMonth() + 1}
	day={post.publishedAt.getDate()}
	tags={getTags(post.tags)}
/>
<Content>
	{@html post?.content}
</Content>
