<script>
	import Experience from "$lib/sections/Experience.svelte";
	import Marquee from "$lib/sections/Marquee.svelte";
    import Hero from "$lib/sections/Hero.svelte";
	import Hire from "$lib/sections/Hire.svelte";
	import Projects from "$lib/sections/Projects.svelte";
	import Skills from "$lib/sections/Skills.svelte";
</script>

<main>
    <Hero />
    <Marquee />
    <Projects limit={4} />
    <Experience />
    <!-- <Skills /> -->
    <Hire />
</main>