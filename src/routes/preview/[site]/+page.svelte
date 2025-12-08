<script lang="ts">
	import Hire from '$lib/sections/Hire.svelte';
	import Project from '$lib/sections/Project.details.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const details = $derived(data.project[0]);
</script>

<Project {details} />
<Hire />