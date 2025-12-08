<script lang="ts">
	import profile from '$lib/assets/images/profile.png';
	import badge from '$lib/assets/images/expert-badge.webp';

	import Contact from '$lib/components/Buttons/Contact.svelte';
	import Secondary from '$lib/components/Buttons/Secondary.svelte';
</script>

<section class="page !pt-4 !pb-20 md:flex md:flex-row-reverse md:justify-between md:!pt-12 lg:gap-x-10 lg:!pb-[120px]">
	<div class="relative h-fit mb-[58px] md:mb-0 lg:w-[352px]">
		<img
			class="mx-auto rounded-[10px] object-cover lg:w-full"
			src={profile}
			width="266"
			height="266"
			loading="eager"
			alt="Giorgi Sanodze"
		/>
		<img class="absolute -bottom-[18px] left-1/2 -translate-x-1/2" src={badge} alt="shopify expert badge" width="158" height="36">
		<p class="text-xs text-center text-white absolute -bottom-10 left-1/2 -translate-x-1/2 w-max lg:-bottom-12">Schedule an interview on <a class="text-blue-400 underline" target="_blank" href="https://calendly.com/sanodzegg/interview">Calendly</a></p>
	</div>

	<div class="md:max-w-[460px] lg:max-w-[680px]">
		<h1 class="uppercase text-[28px] leading-[120%] -tracking-[0.02em] text-white text-center mb-4 md:text-[36px] md:mb-8 md:text-left lg:text-[56px] lg:leading-[64px]">Engineering <br/>High-Performance <br/>Web Solutions</h1>
		<p class="font-normal text-base leading-6 text-[#C4C4C4] mb-8 text-center md:mb-16 md:text-left">Helping ambitious brands and startups achieve their goals with custom-coded <br class="hidden lg:!block"/>web solutions. I specialize in turning complex requirements into elegant, and functional <br class="hidden lg:!block"/>digital experiences.</p>
		<div class="flex flex-col gap-y-3 md:flex-row md:gap-x-8 md:w-full lg:max-w-[463px]">
			<Contact />
			<Secondary href={"#projects"} text={"Explore Projects"} />
		</div>
	</div>
</section>