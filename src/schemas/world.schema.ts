import { z } from "zod";
import { WorldSegmentSchema } from "./segment.schema";
import { WorldObjectSchema } from "./object.schema";
import { ObjectPlacementSchema } from "./placement.schema";

/**
 * World schema aggregating maintainer metadata, segments, and contributor objects + placements.
 */
export const WorldSchema = z
  .object({
    id: z
      .string()
      .trim()
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "World ID must be kebab-case (e.g. 'growing-forest')"
      ),
    name: z.string().trim().min(1, "World name is required").max(60),
    description: z.string().trim().min(1, "World description is required").max(300),
    theme: z.object({
      primaryColor: z.string().trim().min(1),
      secondaryColor: z.string().trim().optional(),
      accentColor: z.string().trim().optional(),
    }),
    segments: z
      .array(WorldSegmentSchema)
      .min(1, "A world must have at least one segment"),
    objects: z.array(WorldObjectSchema),
    placements: z.array(ObjectPlacementSchema),
  })
  .superRefine((world, ctx) => {
    // 1. Verify all object IDs are unique within the world
    const objectIds = new Set<string>();
    world.objects.forEach((obj, index) => {
      if (objectIds.has(obj.id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Duplicate object ID '${obj.id}' found at objects[${index}]`,
          path: ["objects", index, "id"],
        });
      }
      objectIds.add(obj.id);
    });

    // 2. Verify all segment IDs are unique within the world
    const segmentIds = new Set<string>();
    world.segments.forEach((seg, index) => {
      if (segmentIds.has(seg.id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Duplicate segment ID '${seg.id}' found at segments[${index}]`,
          path: ["segments", index, "id"],
        });
      }
      segmentIds.add(seg.id);
    });

    // 3. Verify every placement references a declared object in objects
    world.placements.forEach((placement, index) => {
      if (!objectIds.has(placement.objectId)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Placement at placements[${index}] references undeclared objectId '${placement.objectId}'`,
          path: ["placements", index, "objectId"],
        });
      }
    });
  });

export type World = z.infer<typeof WorldSchema>;
