// Loops integration removed.
// Provide a no-op email sender so other code can call it safely.
export async function sendCheckoutSuccessEmail(): Promise<void> {
	// Intentionally no-op. Email notifications have been removed.
	console.info('sendCheckoutSuccessEmail called but email notifications are disabled.');
	return;
}
