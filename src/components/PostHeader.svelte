<script lang="ts">
	export let title: string;
	export let tags: string[];
	export let date: string;
</script>

<div class="font-bold text-2xl text-title pb-2 border-b-2 border-link border-dashed">
	{title}
</div>
<div class="text-tag text-md">
	<span class="text-date">&lt;Date&gt;: {date}</span> | &lt;Tags&gt;: {tags}
</div>
