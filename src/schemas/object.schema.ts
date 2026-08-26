import { z } from "zod";
import { ContributorSchema } from "./contributor.schema";

/**
 * WorldObject schema for Step 1 of the contributor workflow.
 * Target size: 1–10 meaningful LOC.
 * Contributor defines id, asset path, and contributor metadata.
 */
export const WorldObjectSchema = z.object({
  id: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Object ID must be kebab-case (e.g. 'shen-tree', 'blue-bird')"
    ),
  asset: z
    .string()
    .trim()
    .regex(
      /^\/assets\/worlds\/[a-z0-9-]+(?:\/[a-z0-9-_]+)*\.(svg|png|webp)$/i,
      "Asset path must be within '/assets/worlds/<world-name>/' and end with .svg, .png, or .webp"
    ),
  contributor: ContributorSchema,
});

export type WorldObject = z.infer<typeof WorldObjectSchema>;
