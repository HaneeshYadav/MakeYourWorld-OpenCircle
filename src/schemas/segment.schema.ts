import { z } from "zod";
import { BackgroundSchema } from "./background.schema";

/**
 * WorldSegment schema (maintainer-owned).
 * Supports the growing world window model (e.g. Forest 01 -> Forest 02).
 */
export const WorldSegmentSchema = z.object({
  id: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Segment ID must be kebab-case (e.g. 'forest-01')"
    ),
  order: z.number().int().nonnegative("Segment order must be 0 or a positive integer"),
  name: z.string().trim().min(1, "Segment name cannot be empty"),
  background: BackgroundSchema,
});

export type WorldSegment = z.infer<typeof WorldSegmentSchema>;
