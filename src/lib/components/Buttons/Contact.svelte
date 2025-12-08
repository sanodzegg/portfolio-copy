<script lang="ts">
	import arrow from '$lib/assets/icons/arrow.svg';
</script>

<div class="gradient-wrapper group w-full">
	<a
		href="mailto:sanodzegg@gmail.com"
		class="primary-button flex h-14 w-full cursor-pointer items-center justify-center rounded-[10px] bg-white"
	>
		<div class="flex items-center gap-x-2 overflow-hidden">
			<img
				src={arrow}
				width="24"
				height="24"
				alt="arrow right"
				class="-ml-6 transition-all duration-300 ease-in-out group-hover:ml-0"
			/>
			<span class="text-base leading-6 font-medium text-[#050505] uppercase">Get in Touch</span>
			<img
				src={arrow}
				width="24"
				height="24"
				alt="arrow right"
				class="mr-0 transition-all duration-300 ease-in-out group-hover:-mr-6"
			/>
		</div>
	</a>
</div>