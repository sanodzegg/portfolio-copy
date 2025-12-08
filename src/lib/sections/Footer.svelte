<script lang="ts">
	import newtab from '$lib/assets/icons/new_tab.svg';
	const currentYear = new Date().getFullYear();
	const links = [
		{ url: 'https://www.linkedin.com/in/giorgi-sanodze/', title: 'LinkedIn' },
		{ url: 'https://github.com/sanodzegg', title: 'GitHub' },
		{ url: 'https://www.upwork.com/freelancers/~01f04a2adfdabcab9f', title: 'Upwork' }
	];
</script>

<footer class="page !py-6 md:flex md:flex-row-reverse md:justify-between">
	<ul class="flex items-center justify-center gap-x-8 mb-8 md:mb-0">
		{#each links as link}
			<li class="flex items-center gap-x-1">
				<a class="font-medium text-sm leading-[18px] text-[#C4C4C4]" href="{link.url}" target="_blank">{link.title}</a>
				<img src="{newtab}" class="shrink-0" width="18" height="18" alt="opens a new tab">
			</li>
		{/each}
	</ul>
	<p class="font-medium text-sm leading-[18px] text-[#C4C4C4] text-center">All rights reserved, © {currentYear} Giorgi Sanodze</p>
</footer>
