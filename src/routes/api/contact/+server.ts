import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();

		console.log('Contact form submitted:', data);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ success: false, error: 'Something went wrong' }), { status: 500 });
	}
};
