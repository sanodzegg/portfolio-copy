<script lang="ts">
	const { source, duration = 15 } = $props<{ source: string; duration?: number }>();

	let isHovered = $state(false);
	let hasScrolledOnce = $state(false);
	let isAnimating = $state(false);
	let showHint = $state(true);
	let isImageLoaded = $state(false);

	$effect(() => {
		source;
		isImageLoaded = false;
		isHovered = false;
		hasScrolledOnce = false;
		isAnimating = false;
		showHint = true;
	});

	function toggleAnimation() {
		if (isAnimating) return;

		if (showHint) {
			showHint = false;
		}

		isAnimating = true;

		if (!hasScrolledOnce) {
			isHovered = true;
			hasScrolledOnce = true;
		} else {
			isHovered = !isHovered;
		}

		setTimeout(() => {
			isAnimating = false;
		}, duration * 1000);
	}

	function handleImageLoad() {
		isImageLoaded = true;
	}
</script>

<div
	class="relative w-full h-[320px] overflow-hidden rounded-[10px] group cursor-pointer"
	role="button"
	tabindex="0"
	onmouseenter={toggleAnimation}
	onclick={toggleAnimation}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleAnimation();
		}
	}}
>
	{#if !isImageLoaded}
		<div
			class="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] text-white"
		>
			<span class="text-base text-white">Preview is loading :&#93;</span>
		</div>
	{/if}

	<img
		src={source}
		alt=""
		class="w-full h-auto block object-cover object-top min-h-full transition-transform will-change-transform"
		class:translate-y-[calc(-100%+320px)]={isHovered}
		class:opacity-0={!isImageLoaded}
		style="transition-duration: {duration}s;"
		onload={handleImageLoad}
	/>

	{#if showHint && isImageLoaded}
		<div
			class="absolute bottom-4 right-4 bg-[#0a0a0a] text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm animate-bounce pointer-events-none"
		>
			<span class="lg:!hidden">Tap me :&#93;</span>
			<span class="hidden lg:!inline">Hover me :&#93;</span>
		</div>
	{/if}
</div>