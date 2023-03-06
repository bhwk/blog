<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<title>{data.post.details.title}</title>
<article class="prose">
	{@html data.post.content}
</article>
