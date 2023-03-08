<div class="screen">
	<div class="pan-overlay screen-overlay" />
	<div class="bg-image w-full h-full bg-contain bg-no-repeat" />
</div>

<style>
	.screen {
		width: 500px;
		border: 3px solid theme('colors.slate.700');
		aspect-ratio: 10 / 16;
		border-radius: 1rem;
		background-color: theme('colors.slate.500');
		position: relative;
	}

	.screen-overlay {
		background: linear-gradient(
			theme('colors.slate.700'),
			theme('colors.slate.700') 3px,
			transparent 3px,
			transparent 9px
		);
		background-size: 100% 9px;
		width: 100%;
		height: 100%;
		animation: pan-overlay 30s infinite linear;
		position: absolute;
		opacity: 0.6;
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
