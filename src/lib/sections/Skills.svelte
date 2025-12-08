<script lang="ts">
	const skills = [
		'HTML5',
		'CSS3',
		'SASS/SCSS',
		'Tailwind CSS',
		'React',
		'React Native',
		'Redux',
		'Next.js',
        'Node.js',
        'MongoDB',
        'JWT',
        'Shopify APIs',
		'Liquid (Shopify)',
		'Javascript ES6+',
        'Web Vitals',
		'JSX',
        'Lighthouse',
        'Responsive Design',
		'Git',
		'Figma'
	];
</script>

<section id="skills" class="pt-8 pb-16 md:py-16 md:px-6 lg:pb-24 lg:max-w-[1540px] lg:mx-auto lg:px-[50px]">
	<h2 class="mb-8 text-center text-4xl leading-[1.2] text-[#B3C2CB] md:text-[38px] md:leading-[1.2] md:text-left md:mb-12">Skills</h2>
    <div class="flex flex-wrap justify-center gap-3.5 max-w-3/5 mx-auto md:max-w-none md:justify-start">
        {#each skills as skill}
            <div class="py-2 px-3 bg-[#0F151F] rounded-lg border border-white/20 w-fit flex items-center justify-center">
                <p class="font-medium text-[#D1DAE0] text-base -tracking-[0.3px] leading-[1.4] lg:text-lg lg:leading-[1.4]">{skill}</p>
            </div>
        {/each}
    </div>
</section>
