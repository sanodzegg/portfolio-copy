<script lang="ts">
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import '../app.css';
	import Navigation from '$lib/sections/Navigation.svelte';
	import Footer from '$lib/sections/Footer.svelte';

	let { children } = $props();

	onMount(() => {
		if (!dev && typeof window !== 'undefined' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {
			injectAnalytics();
			injectSpeedInsights();
		}
	});
</script>

<Navigation {page} />

{@render children()}

<Footer />