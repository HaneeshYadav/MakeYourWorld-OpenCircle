import { z } from "zod";

/**
 * Contributor schema for attribution beneath contributed world objects.
 * Represents human identity (displayName) and optional GitHub username.
 * Decoupled from Discord.
 */
export const ContributorSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(1, "Display name must not be empty")
    .max(50, "Display name must not exceed 50 characters"),
  githubUsername: z
    .string()
    .trim()
    .regex(
      /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
      "Invalid GitHub username format"
    )
    .optional(),
});

export type Contributor = z.infer<typeof ContributorSchema>;
