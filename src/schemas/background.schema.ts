import { z } from "zod";

/**
 * Background schema (maintainer-owned).
 * Represents static backdrop assets or CSS gradients without coupling to React components.
 */
export const BackgroundSchema = z.object({
  asset: z
    .string()
    .trim()
    .regex(
      /^\/assets\/worlds\/[a-z0-9-]+(?:\/[a-z0-9-_]+)*\.(svg|png|webp|jpg|jpeg)$/i,
      "Background asset path must be in /assets/worlds/<world-name>/ and have a valid image extension"
    )
    .optional(),
  cssGradient: z.string().trim().optional(),
  altText: z.string().trim().optional(),
});

export type Background = z.infer<typeof BackgroundSchema>;
