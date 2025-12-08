<script lang="ts">
    const { details } = $props();
	import projects from '$lib/data/projects';

    import emblaCarouselSvelte from 'embla-carousel-svelte'
	import type { EmblaCarouselType } from 'embla-carousel';
    import type { ProjectData } from '$lib/types';
	import Project from '$lib/components/Project.card.svelte';

    let emblaApi: EmblaCarouselType;
	let selectedIndex = $state(0);
	let scrollSnaps = $state<number[]>([]);
	let animate = $state(false);
	let sectionElement: HTMLElement;
	let viewTimer: ReturnType<typeof setTimeout>;

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		scrollSnaps = emblaApi.scrollSnapList();

		emblaApi.on('select', () => {
			selectedIndex = emblaApi.selectedScrollSnap();
		});
	}

	function scrollTo(index: number) {
		emblaApi?.scrollTo(index);
	}

	$effect(() => {
		if (!sectionElement) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						viewTimer = setTimeout(() => {
							animate = true;
						}, 3000);
					} else {
						clearTimeout(viewTimer);
					}
				});
			},
			{ threshold: 1 }
		);

		observer.observe(sectionElement);

		return () => {
			clearTimeout(viewTimer);
			observer.disconnect();
		};
	});

    const params = {
        options: { loop: false, breakpoints: { '(min-width: 768px)': { slidesToScroll: 2 }, '(min-width: 1280px)': { slidesToScroll: 3 } } },
        plugins: []
    }
</script>

<section class="page !pb-20 lg:!pb-[120px]" bind:this={sectionElement}>
	<h2 class="mb-8 text-center text-[28px] leading-[100%] -tracking-[0.02em] text-white uppercase md:text-[32px] md:leading-[44px]">
        More Projects
    </h2>
    <div class="embla overflow-hidden {animate ? 'make-them-slide' : ''}" onemblaInit={onInit} use:emblaCarouselSvelte={params}>
        <div class="embla__container flex gap-x-4 mb-6">
            {#each projects as project, i}
                {#if project.projectHandle !== details.projectHandle}
                    <div class="embla__slide flex-[0_0_80%] [&_li]:select-none [&_li]:static [&_li]:pt-0 [&_.card-body_p]:hidden [&_img]:h-[185px] [&_img]:w-full md:[&_.card-body]:flex-col md:[&_.card-body]:gap-y-3 md:[&_.card-body>div]:w-full md:[&_.gradient-wrapper]:!h-full md:[&_.card-body]:!h-full md:[&_.card-body>div]:!h-full md:flex-[0_0_49%] xl:flex-[0_0_32.35%]">
                        <Project data={project as ProjectData} index={i} />
                    </div>
                {/if}
            {/each}
        </div>
        <div class="embla__dots flex justify-center gap-2">
            {#each scrollSnaps as _, index}
                <button
                    class="embla__dot w-2 h-2 rounded-xs transition-all {index === selectedIndex ? 'bg-white' : 'bg-white/20'}"
                    onclick={() => scrollTo(index)}
                    aria-label="Go to slide {index + 1}"
                ></button>
            {/each}
        </div>
    </div>

</section>
