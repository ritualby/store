import type { APIRoute } from 'astro';

// Stripe payment handler removed.
// This route intentionally returns 410 to indicate the payment flow is no longer available.
export const POST: APIRoute = async () => {
	return new Response('Stripe payment integration removed', { status: 410 });
};
