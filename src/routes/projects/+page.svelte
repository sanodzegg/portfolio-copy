<script lang="ts">
	import Project from '$lib/components/Project.card.svelte';
	import projects from '$lib/data/projects';
	import type { ProjectData } from '$lib/types';
</script>

<section class="page w-full !pb-20 lg:!pb-[120px]">
	<ul class="grid grid-cols-1 gap-2 [&_img]:w-full [&_li]:static [&_li]:pt-0 md:grid-cols-2 md:gap-4 md:[&_.card-body]:flex-col md:[&_.card-body]:gap-y-3 md:[&_.card-body>div]:w-full md:[&_.gradient-wrapper]:!h-full md:[&_.card-body]:!h-full md:[&_.card-body>div]:!h-full
	md:[&_.card-body>div>div]:mt-auto lg:[&_.card-body]:gap-y-4">
		{#each projects as project, i}
			<Project data={project as ProjectData} index={i} />
		{/each}
	</ul>
</section>
