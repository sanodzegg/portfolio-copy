<script>
	import Burger from '$lib/components/Navigation/Burger.svelte';

	let props = $props();
	const { page } = props;

	// simple list of routes
	const navLinks = $derived([
		{ href: '/', text: 'Home', type: 'home' },
		{ href: '/projects', text: 'Projects', type: 'projects' },
		{ href: '/experience', text: 'Experience', type: 'experience' }
	].map(link => {
		const isActive =
			(link.type === 'home' && page.url.pathname === '/') ||
			(link.type === 'projects' && page.url.pathname === '/projects') ||
			(link.type === 'experience' && page.url.pathname === '/experience');

		return { ...link, isActive: isActive };
	}));
</script>

<header
	class="page sticky top-0 z-20 bg-[#050505] !pt-12 !pb-6 md:!static md:bg-transparent md:!py-6 lg:!py-8"
>
	<div class="flex w-full items-center justify-between">
		<h1 class="geist relative z-50 text-base leading-6 !font-medium text-white">
			Giorgi Sanodze
		</h1>

		<div class="md:hidden">
			<Burger {page} links={navLinks} />
		</div>

		<menu class="hidden md:!block">
			<ul class="flex items-center gap-x-8">
				{#each navLinks as { href, text, isActive }}
					<li
						class="flex items-center gap-x-0 group hover:gap-x-2 transition-all duration-300 ease-in-out {isActive ? '!gap-x-3' : 'gap-x-0'}"
					>
						<span
							class="text-base leading-6 font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out {isActive ? '!opacity-100' : ''}"
						>[</span>
						<a
							class="text-base leading-6 font-medium text-[#C4C4C4] hover:text-white {isActive ? 'text-white' : ''}"
							href={href}
							>{text}</a
						>
						<span
							class="text-base leading-6 font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out {isActive ? '!opacity-100' : ''}"
						>]</span>
					</li>
				{/each}
			</ul>
		</menu>
	</div>
</header>
