<script lang="ts">
	import type { ExperienceData } from '$lib/types';

	let { data } = $props<{ data: ExperienceData }>();
</script>

<li class="flex w-full flex-col md:flex-row md:justify-between">
	<div>
		<h3
			class="mb-4 text-lg leading-[28px] -tracking-[0.02em] text-[#C4C4C4] uppercase md:max-w-[500px] md:text-2xl md:leading-8 md:text-white"
		>
			{data.title}
		</h3>
		<ul class="tablet-idid hidden">
			{#each data.idid as idid}
				<li
					class="mt-4 ml-4 list-disc text-sm leading-5 text-[#C4C4C4] max-w-[500px] md:text-base md:leading-6"
				>
					{@html idid}
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h4
			class="mb-2 text-lg leading-[28px] -tracking-[0.02em] text-white uppercase md:mb-4 md:text-end md:text-2xl md:leading-8"
		>
			{data.at}
		</h4>
		<p class="text-sm leading-5 text-[#C4C4C4] md:text-end md:text-base md:leading-6">
			{data.dates}
		</p>
	</div>
	<ul class="idid hidden">
		{#each data.idid as idid}
			<li
				class="mt-4 ml-4 list-disc text-sm leading-5 text-[#C4C4C4] md:text-end md:text-base md:leading-6"
			>
				{@html idid}
			</li>
		{/each}
	</ul>
</li>
