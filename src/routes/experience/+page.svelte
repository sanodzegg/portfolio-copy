<script lang="ts">
	import Experience from '$lib/components/Experience/Experience.card.svelte';
	import experiences from '$lib/data/experience';
	import type { ExperienceData } from '$lib/types';
</script>

<section id="experience" class="page !pb-20 lg:!pb-[120px]">
	<h2 class="mb-6 text-center text-[28px] leading-[100%] -tracking-[0.02em] text-white uppercase md:text-[32px] md:leading-[44px] md:mb-16">
		Experience
	</h2>
	<ul class="flex flex-col items-center gap-y-6 py-6 [&_.idid]:!block md:[&_.idid]:!hidden md:[&_.tablet-idid]:!block md:py-8 md:gap-y-8 lg:[&_.tablet-idid_li]:!max-w-[800px]">
		{#each experiences as experience, i}
			<Experience data={experience as ExperienceData} />
			<hr />
		{/each}
	</ul>
</section>

<style>
	hr {
		border: none;
		width: 100%;
		min-height: 1px;
		background: linear-gradient(95.02deg, #525252 0%, #1f1f1f 100%);
	}
</style>
