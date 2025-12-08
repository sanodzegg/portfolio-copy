<script lang="ts">
	import Burger from '$lib/assets/icons/burger.svg';
	import x from '$lib/assets/icons/x.svg';

	let props = $props();
	const { links, page } = props;

	let burgerOpen = $state(false);

	$effect(() => {
		if (burgerOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	const handleNavigationClick = (e: Event) => {
		e.preventDefault();
		e.stopImmediatePropagation();

		if (e.target && e.target instanceof HTMLAnchorElement) {
			const path = e.target.href;
			burgerOpen = false;
			setTimeout(() => {
				window.location.href = path;
			}, 300);
		}
	};
</script>

<button class="burger" aria-label="Menu" onclick={() => (burgerOpen = true)}>
	<img src={Burger} width="24" height="24" alt="Menu" />
</button>

<menu
	class="fixed top-0 bottom-0 z-40 w-full bg-black {burgerOpen
		? 'right-0'
		: '-right-full'} transition-all duration-500 ease-in-out"
>
	<button
		class="absolute top-12 flex items-center gap-x-2 {burgerOpen
			? 'right-[15px]'
			: '-right-full'} transition-all delay-500 duration-350 ease-in-out"
		onclick={() => (burgerOpen = false)}
	>
		<p class="text-base leading-6 font-medium text-white">CLOSE</p>
		<img src={x} width="24" height="24" alt="close button" />
	</button>
	<ul
		class="absolute top-32 right-0 bottom-8 left-0 flex flex-col gap-y-12 overflow-x-hidden overflow-y-scroll"
	>
		{#each links as link, i}
			{@const isActive = page.url.hash === link.href || (page.url.hash === '' && link.href === '/')}
            
			<li
				style="transition-delay: {600 + i * 100}ms;"
				class="relative {burgerOpen
					? 'left-[15px]'
					: 'left-full'} transition-all duration-350 ease-in-out"
			>
				<a
					onclick={handleNavigationClick}
					class="basement text-2xl leading-8 -tracking-[0.02em] text-[#C4C4C4] {isActive ? 'text-white' : ''}"
					href={link.href}>{link.text}</a
				>
			</li>
			{#if i !== links.length - 1}
				<hr
					style="transition-delay: {700 + i * 100}ms;"
					class="relative {burgerOpen
						? 'left-0'
						: 'left-full'} transition-all duration-350 ease-in-out"
				/>
			{/if}
		{/each}
	</ul>
</menu>

<style>
	hr {
		border: none;
		min-height: 1px;
		background: linear-gradient(95.02deg, #525252 0%, #1f1f1f 100%);
	}
</style>
