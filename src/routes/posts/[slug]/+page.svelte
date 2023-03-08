<script lang="ts">
	import type { PageData } from './$types';
	import PostHeader from '../../../components/PostHeader.svelte';
	export let data: PageData;
	let { post } = data;
	let title = post?.title as string;
</script>

<title>{title}</title>
<PostHeader {title} date={'20-20-2040'} tags={['#testing']} />
<article class="prose text-content prose-h1:text-2xl prose-h1:text-title">
	{@html post?.content}
</article>
