<script lang="ts">
	import type { Post } from '@prisma/client';
	import type { PageData } from './$types';
	export let data: PageData;
	let { allPosts } = data;
</script>

<div class="flex flex-1 flex-col gap-8">
	{#each allPosts as post}
		<a href={'posts/' + post.title} class="flex-1 rounded-sm flex flex-col">
			<div class="font-bold text-2xl text-title pb-2 border-b-2 border-[#f7768e] border-dashed">
				{post.title}
			</div>
			<div class="text-tag text-md">
				<span class="text-date">&lt;Date&gt;: 24-12-2050</span> | &lt;Tags&gt;: #testing tag
			</div>
			<div class="text-content font-semibold line-clamp-10 my-4">
				{post.content}
			</div>
		</a>
	{/each}
</div>
