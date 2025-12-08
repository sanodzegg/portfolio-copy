<script lang="ts">
	import type { ProjectData } from '$lib/types';
	import Secondary from './Buttons/Secondary.svelte';

	let { data, index } = $props<{ data: ProjectData; index: number }>();

	const retarget = data.projectSummary ? false : true
	const secondaryButtonText = data.projectSummary ? 'View Project' : 'View Website'
	const secondaryButtonHREF = data.projectSummary ? `/preview/${data.projectHandle}` : data.projectUrl
</script>

<li
	class="card sticky top-[102.5px] z-[var(--index)] pt-[calc(var(--index)_*_14px)] [&.brighten]:animate-[brightness_2s_ease-in-out_infinite]"
	style="--index: {index};"
>
	<div class="gradient-wrapper">
		<div
			class="card-body project relative box-border h-fit w-full overflow-hidden rounded-[10px] bg-[#0a0a0a] p-5 md:flex md:flex-row-reverse md:gap-x-8 md:p-8"
		>
			<img
				src={data.primaryImage}
				width="320"
				height="296"
				class="mb-6 rounded-[10px] object-cover md:mb-0 md:w-1/2 lg:h-[276px]"
				alt={data.projectTitle}
			/>
			<div class={`flex flex-col ${!data.projectSummary ? 'justify-between' : ''} md:w-1/2`}>
				<h3 class="mb-3 text-2xl leading-8 -tracking-[0.02em] text-white uppercase md:mb-4 lg:mb-6">
					{data.projectTitle}
				</h3>
				<p class="mb-6 text-sm leading-5 font-normal text-[#C4C4C4] md:mb-8 lg:text-base lg:leading-6 lg:mb-16">
					{data.projectSummary ? data.projectSummary : 'Project summary coming soon. Meanwhile, you can explore the live website!'}
				</p>
				<div class="md:max-w-[182px]">
					<Secondary text={secondaryButtonText} href={secondaryButtonHREF} retarget={retarget} />
				</div>
			</div>
		</div>
	</div>
</li>
