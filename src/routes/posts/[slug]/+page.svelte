<script lang="ts">
	import type { PageData } from './$types';
	import PostHeader from '../../../components/PostHeader.svelte';
	export let data: PageData;
	let { post } = data;
</script>

<title>{post.title}</title>
<PostHeader
	title={post.title}
	year={post.publishedAt.getFullYear()}
	month={post.publishedAt.getMonth()}
	day={post.publishedAt.getDay()}
	tags={['#testing']}
/>
<article class="prose text-content prose-h1:text-2xl prose-h1:text-title">
	{@html post?.content}
</article>
