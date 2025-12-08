<script lang="ts">
	import profile from '$lib/assets/images/profile.png';
	import Contact from '$lib/components/Buttons/Contact.svelte';
</script>

<section class="page !pb-20 lg:!pb-[120px]">
	<div class="gradient-wrapper">
		<div class="bg-[#050505] rounded-[10px] p-4 md:p-8">
			<h2 class="uppercase text-lg leading-[28px] -tracking-[0.02em] text-white text-center mb-8 md:text-[32px] md:leading-[44px] md:mb-8">Your next great hire <br/>and the code to prove it</h2>
			<img src={profile} class="rounded-[10px] mx-auto mb-6" width="96" height="96" alt="Giorgi Sanodze">
			<p class="text-white text-base leading-6 text-center mb-2">Giorgi Sanodze</p>
			<p class="text-base leading-6 text-[#C4C4C4] text-center mb-8">Shopify Expert, Web Developer</p>
			<div class="mb-2 md:max-w-[207px] md:mx-auto">
				<Contact />
			</div>
			<p class="text-xs text-center text-white">Schedule an interview on <a class="text-blue-400 underline" target="_blank" href="https://calendly.com/sanodzegg/interview">Calendly</a></p>
		</div>
	</div>
</section>
