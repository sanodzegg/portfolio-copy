import type { PageLoad } from './$types';
import projects from '$lib/data/projects';

export const load: PageLoad = ({ params }) => {
	const selectedProject = projects.filter(project => project.projectHandle === params.site)
	return {
		project: selectedProject
	};
};