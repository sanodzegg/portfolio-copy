<script lang="ts">
	import Secondary from '$lib/components/Buttons/Secondary.svelte';
	import Project from '$lib/components/Project.card.svelte';
	import projects from '$lib/data/projects';
	import type { ProjectData } from '$lib/types';

	let props = $props<{}>();
	const { limit } = props || Infinity;

	const limitedProjects = projects.slice(0, limit);
</script>

<section id="projects" class="page w-full !pb-20 lg:!pb-[120px]">
	<h2
		class="mb-8 text-center text-[28px] leading-[100%] -tracking-[0.02em] text-white uppercase md:text-[32px] md:leading-[44px]"
	>
		Projects
	</h2>
	<ul
		id="cards"
		class="mb-6 grid list-none grid-cols-1 grid-rows-[repeat(var(--cards),_fit-content))] gap-[3vw] md:mb-12 md:gap-[1vw] lg:mb-14"
		style="--cards: {projects.length};"
	>
		{#each limitedProjects as project, i}
			<Project data={project as ProjectData} index={i} />
		{/each}
	</ul>
	<div class="md:max-w-[224px] md:mx-auto">
		<Secondary text={'Explore Projects'} href={'/projects'} />
	</div>
</section>
