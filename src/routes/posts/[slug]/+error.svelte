<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="text-3xl">{$page.error?.message}</div>
