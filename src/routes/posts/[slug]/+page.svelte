<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<title>{data.post?.title}</title>
<article class="prose text-content">
	{@html data.post?.content}
</article>
