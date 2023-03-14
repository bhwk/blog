<script lang="ts">
	export let title: string;
	export let tags: string[];
	export let year: number;
	export let month: number;
	export let day: number;
	export let slug: string | null;
</script>

<div class="mb-4">
	<div class="font-bold text-2xl text-title border-b-2 border-link border-dashed w-full">
		<a href={'/posts/' + slug}>
			{title}
		</a>
	</div>
	<div class="text-tag text-md">
		<span class="text-date ">&lt;{year}-{month}-{day}&gt;</span> |
		<span class="italic"
			>&lt;tags&gt;:
			{#each tags as tag}
				<a href="/tag/{tag}" class="hover:text-link transition-colors">
					{'#' + tag}
				</a>
			{/each}
		</span>
	</div>
</div>
