<script lang="ts">
	/** @type {import('./$types').PageData}*/
	export let data: { post: { content: string; details: { title: string } } };
	console.log(data);
</script>

<title>{data.post.details.title}</title>
<div>
	{@html data.post.content}
</div>
