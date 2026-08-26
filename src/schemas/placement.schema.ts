import { z } from "zod";

/**
 * ObjectPlacement schema for Step 2 of the contributor workflow.
 * Uses normalized coordinates (0 to 100).
 * Target size: 1–10 meaningful LOC.
 */
export const ObjectPlacementSchema = z.object({
  objectId: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Object ID reference must be kebab-case"
    ),
  x: z
    .number({
      required_error: "X coordinate is required",
      invalid_type_error: "X coordinate must be a number",
    })
    .min(0, "X coordinate must be at least 0 (normalized %)")
    .max(100, "X coordinate must be at most 100 (normalized %)"),
  y: z
    .number({
      required_error: "Y coordinate is required",
      invalid_type_error: "Y coordinate must be a number",
    })
    .min(0, "Y coordinate must be at least 0 (normalized %)")
    .max(100, "Y coordinate must be at most 100 (normalized %)"),
  scale: z
    .number()
    .min(0.1, "Scale must be at least 0.1")
    .max(5.0, "Scale must be at most 5.0")
    .optional(),
  rotation: z
    .number()
    .min(-360, "Rotation must be at least -360 degrees")
    .max(360, "Rotation must be at most 360 degrees")
    .optional(),
});

export type ObjectPlacement = z.infer<typeof ObjectPlacementSchema>;
