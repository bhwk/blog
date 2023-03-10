<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="text-xl text-content">{$page.error?.message}</div>
