<script lang="ts">
	import type { Post } from '@prisma/client';
	import type { PageData } from './$types';
	export let data: PageData;
	let { allPosts } = data;
</script>

<div class="flex flex-1 flex-col gap-12">
	{#each allPosts as post}
		<a
			href={'posts/' + post.title}
			class="p-4 hover:bg-black transition-colors hover:text-white flex-1 rounded-sm flex flex-col shadow
			shadow-gray-700"
		>
			<div class="font-bold text-2xl pb-2 border-b-2 border-dashed">{post.title}</div>
			<div class="line-clamp-10 my-4">
				{post.content}
			</div>
		</a>
	{/each}
</div>
