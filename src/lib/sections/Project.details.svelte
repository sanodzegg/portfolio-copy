<script lang="ts">
	let { details } = $props();
	const projectDetails = $derived(details.projectDetails);

	import back from '$lib/assets/icons/back.svg';
	import Secondary from '$lib/components/Buttons/Secondary.svelte';
	import AnimatedImage from '$lib/components/Animated.image.svelte';
	import ExploreMore from './Explore.more.svelte';
</script>

<section class="page !pt-6 !pb-20 lg:!pb-[120px]">
	<div class="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
		<div class="gradient-wrapper lg:!sticky lg:!top-4 lg:!left-0 lg:w-full">
			<div class="rounded-[10px] bg-[#0a0a0a] p-4 md:p-8 lg:w-full">
				<button
					onclick={() => history.back()}
					aria-label="go back"
					class="mb-6 flex cursor-pointer items-center gap-x-2 md:mb-8"
				>
					<img src={back} width="24" height="24" loading="eager" alt="go back" />
					<span class="text-base leading-6 font-medium text-[#C4C4C4]">Back</span>
				</button>
				<h1 class="mb-4 text-2xl leading-8 -tracking-[0.02em] text-white uppercase">
					{projectDetails.title}
				</h1>
				<p class="mb-6 text-sm leading-5 font-normal text-[#C4C4C4] md:mb-8">
					{projectDetails.paragraph}
				</p>
				<div
					class="grid grid-cols-2 grid-rows-3 gap-6 mb-6 md:grid-cols-3 md:grid-rows-2 md:mb-8 lg:grid-cols-2 lg:grid-rows-3"
				>
					{#each projectDetails.details as detail}
						<div class="flex flex-col">
							<strong class="text-xs leading-5 font-semibold text-[#C4C4C4] uppercase"
								>{detail.title}</strong
							>
							<p class="text-base leading-6 font-normal text-white">{detail.content}</p>
						</div>
					{/each}
				</div>
				<div class="md:max-w-[224px]">
					<Secondary text={'Visit Website'} retarget={true} href={details.projectUrl} />
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-y-4 lg:w-full">
			<AnimatedImage source={projectDetails.projectMedia} />
			{#each projectDetails.developmentProcess as process}
				<div class="text-base leading-6 text-[#C4C4C4] [&_strong]:mb-2 [&_strong]:!block">
					{@html process}
				</div>
			{/each}
		</div>
	</div>
</section>

<ExploreMore details={details} />