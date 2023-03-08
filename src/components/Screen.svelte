<div class="w-full relative aspect-video">
	<div class="bg-image -z-20 w-full h-full absolute bg-cover" />
	<div class="screen-overlay -z-10 w-full h-full absolute left-0 top-0 opacity-60" />
</div>

<style>
	.screen-overlay {
		background: linear-gradient(
			theme('colors.slate.700'),
			theme('colors.slate.700') 3px,
			transparent 3px,
			transparent 9px
		);
		background-size: 100% 9px;
		animation: pan-overlay 30s infinite linear;
	}

	@keyframes pan-overlay {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 0% -100%;
		}
	}
</style>
