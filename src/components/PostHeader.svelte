<script lang="ts">
	export let title: string;
	export let tags: string[];
	export let year: number;
	export let month: number;
	export let day: number;
</script>

<div class="mb-4">
	<div class="font-bold text-2xl text-title border-b-2 border-link border-dashed">
		{title}
	</div>
	<div class="text-tag text-md">
		<span class="text-date ">&lt;{year}-{month}-{day}&gt;</span> |
		<span class="italic">&lt;tags&gt;: {tags}</span>
	</div>
</div>
