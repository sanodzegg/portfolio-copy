<script lang="ts">
	import { onMount } from 'svelte';
	import Marqueeck from '@arisbh/marqueeck';

	import react from '$lib/assets/technologies/react.svg';
	import next from '$lib/assets/technologies/next.svg';
	import nodejs from '$lib/assets/technologies/nodejs.svg';
	import shopify from '$lib/assets/technologies/shopify.svg';
	import figma from '$lib/assets/technologies/figma.svg';
	import git from '$lib/assets/technologies/git.svg';

	const technologies = [
		{
			icon: react,
			alt: 'react'
		},
		{
			icon: next,
			alt: 'next.js'
		},
		{
			icon: nodejs,
			alt: 'node.js'
		},
		{
			icon: shopify,
			alt: 'shopify'
		},
		{
			icon: figma,
			alt: 'figma'
		},
		{
			icon: git,
			alt: 'git'
		}
	];

	let gap = $state(32);

	onMount(() => {
		const matchTablet = window.matchMedia('(min-width: 768px)');
		const matchDesktop = window.matchMedia('(min-width: 1024px)');

		const updateGap = () => {
			if (matchDesktop.matches) {
				gap = 64;
			} else if (matchTablet.matches) {
				gap = 48;
			} else {
				gap = 32;
			}
		};

		updateGap();

		matchTablet.addEventListener('change', updateGap);
		matchDesktop.addEventListener('change', updateGap);

		return () => {
			matchTablet.removeEventListener('change', updateGap);
			matchDesktop.removeEventListener('change', updateGap);
		};
	});
</script>

<section class="overflow-hidden pb-20 lg:pb-[120px]">
	<Marqueeck options={{ direction: 'left', speed: 10, gap }}>
		{#each technologies as tech}
			<img
				src={tech.icon}
				class="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14"
				width="36"
				height="36"
				alt={tech.alt}
			/>
		{/each}
	</Marqueeck>
</section>
