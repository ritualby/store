import { type Product } from 'storefront:client';
import { z } from 'zod';

export const productMetadataSchema = z
	.object({
		productVariantId: z.string(),
		productName: z.string(),
		productId: z.string(),
		variantName: z.string(),
		variantId: z.string(),
	})
	.strict();

export function getProductStock(product: Product) {
	return product.variants.reduce((total, variant) => total + variant.stock, 0);
}
