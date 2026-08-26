import { describe, it, expect } from "vitest";
import {
  ContributorSchema,
  WorldObjectSchema,
  ObjectPlacementSchema,
  WorldSegmentSchema,
  WorldSchema,
} from "@/schemas";
import { growingForestWorld } from "@/data/worlds";

describe("Domain Schema Validation Suite", () => {
  describe("1 & 2. ContributorSchema", () => {
    it("validates a correct contributor with GitHub username", () => {
      const result = ContributorSchema.safeParse({
        displayName: "Shen",
        githubUsername: "ShenSandaru",
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.displayName).toBe("Shen");
        expect(result.data.githubUsername).toBe("ShenSandaru");
      }
    });

    it("validates a contributor without GitHub username", () => {
      const result = ContributorSchema.safeParse({
        displayName: "Anonymous Student",
      });
      expect(result.success).toBe(true);
    });

    it("rejects empty display name", () => {
      const result = ContributorSchema.safeParse({
        displayName: "   ",
      });
      expect(result.success).toBe(false);
    });

    it("rejects invalid GitHub username format", () => {
      const result = ContributorSchema.safeParse({
        displayName: "Valid Name",
        githubUsername: "-invalid-start",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("3 & 4 & 10. WorldObjectSchema", () => {
    it("validates a valid object (Commit 1 item)", () => {
      const result = WorldObjectSchema.safeParse({
        id: "shen-tree",
        asset: "/assets/worlds/growing-forest/shen-tree.svg",
        contributor: {
          displayName: "Shen",
          githubUsername: "ShenSandaru",
        },
      });
      expect(result.success).toBe(true);
    });

    it("supports .png and .webp formats", () => {
      const pngResult = WorldObjectSchema.safeParse({
        id: "crystal-rock",
        asset: "/assets/worlds/growing-forest/crystal-rock.png",
        contributor: { displayName: "Alice" },
      });
      const webpResult = WorldObjectSchema.safeParse({
        id: "crystal-rock",
        asset: "/assets/worlds/growing-forest/crystal-rock.webp",
        contributor: { displayName: "Alice" },
      });
      expect(pngResult.success).toBe(true);
      expect(webpResult.success).toBe(true);
    });

    it("rejects non-kebab-case object id", () => {
      const result = WorldObjectSchema.safeParse({
        id: "Shen_Tree_123!",
        asset: "/assets/worlds/growing-forest/shen-tree.svg",
        contributor: { displayName: "Shen" },
      });
      expect(result.success).toBe(false);
    });

    it("rejects invalid asset paths (outside /assets/worlds/)", () => {
      const result = WorldObjectSchema.safeParse({
        id: "shen-tree",
        asset: "https://example.com/tree.svg",
        contributor: { displayName: "Shen" },
      });
      expect(result.success).toBe(false);
    });

    it("rejects unsupported asset extensions", () => {
      const result = WorldObjectSchema.safeParse({
        id: "shen-tree",
        asset: "/assets/worlds/growing-forest/shen-tree.exe",
        contributor: { displayName: "Shen" },
      });
      expect(result.success).toBe(false);
    });
  });

  describe("5, 6, 7, 8, 9. ObjectPlacementSchema (Normalized Coordinates)", () => {
    it("validates a valid placement within 0-100 bounds (Commit 2 item)", () => {
      const result = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: 42.5,
        y: 68.0,
        scale: 1.1,
        rotation: 3,
      });
      expect(result.success).toBe(true);
    });

    it("validates boundary values 0 and 100", () => {
      const resultMin = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: 0,
        y: 0,
      });
      const resultMax = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: 100,
        y: 100,
      });
      expect(resultMin.success).toBe(true);
      expect(resultMax.success).toBe(true);
    });

    it("rejects x below 0", () => {
      const result = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: -10,
        y: 50,
      });
      expect(result.success).toBe(false);
    });

    it("rejects x above 100", () => {
      const result = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: 150,
        y: 50,
      });
      expect(result.success).toBe(false);
    });

    it("rejects y below 0", () => {
      const result = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: 50,
        y: -20,
      });
      expect(result.success).toBe(false);
    });

    it("rejects y above 100", () => {
      const result = ObjectPlacementSchema.safeParse({
        objectId: "shen-tree",
        x: 50,
        y: 200,
      });
      expect(result.success).toBe(false);
    });
  });

  describe("11 & 12. Segment & Background Schema", () => {
    it("validates valid segment and background", () => {
      const result = WorldSegmentSchema.safeParse({
        id: "forest-01",
        order: 0,
        name: "Ancient Canopy",
        background: {
          asset: "/assets/worlds/growing-forest/segment-01.svg",
          cssGradient: "linear-gradient(to bottom, #1E3A2F, #0F201B)",
        },
      });
      expect(result.success).toBe(true);
    });

    it("rejects negative segment order", () => {
      const result = WorldSegmentSchema.safeParse({
        id: "forest-01",
        order: -1,
        name: "Ancient Canopy",
        background: {},
      });
      expect(result.success).toBe(false);
    });
  });

  describe("13, 14, 15. WorldSchema & Integrity Verification", () => {
    it("validates the demo Growing Forest world", () => {
      const result = WorldSchema.safeParse(growingForestWorld);
      expect(result.success).toBe(true);
    });

    it("rejects world with placement referencing undeclared objectId", () => {
      const invalidWorld = {
        ...growingForestWorld,
        placements: [
          ...growingForestWorld.placements,
          {
            objectId: "non-existent-object-id",
            x: 50,
            y: 50,
          },
        ],
      };
      const result = WorldSchema.safeParse(invalidWorld);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "references undeclared objectId 'non-existent-object-id'"
        );
      }
    });

    it("rejects duplicate object IDs in objects array", () => {
      const duplicateObjectWorld = {
        ...growingForestWorld,
        objects: [
          ...growingForestWorld.objects,
          {
            id: "demo-pine-tree", // duplicate ID
            asset: "/assets/worlds/growing-forest/another-tree.svg",
            contributor: { displayName: "Bob" },
          },
        ],
      };
      const result = WorldSchema.safeParse(duplicateObjectWorld);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "Duplicate object ID 'demo-pine-tree'"
        );
      }
    });
  });

  describe("16. Two-Commit Data Contract Independence", () => {
    it("Commit 1: validates object definition in isolation", () => {
      const commit1Object = {
        id: "my-student-tree",
        asset: "/assets/worlds/growing-forest/my-student-tree.svg",
        contributor: {
          displayName: "First Time Contributor",
          githubUsername: "student-dev",
        },
      };

      const objectValidation = WorldObjectSchema.safeParse(commit1Object);
      expect(objectValidation.success).toBe(true);
    });

    it("Commit 2: validates placement and integration into World in isolation", () => {
      const commit1Object = {
        id: "my-student-tree",
        asset: "/assets/worlds/growing-forest/my-student-tree.svg",
        contributor: {
          displayName: "First Time Contributor",
          githubUsername: "student-dev",
        },
      };

      const commit2Placement = {
        objectId: "my-student-tree",
        x: 60.5,
        y: 85.0,
      };

      const placementValidation = ObjectPlacementSchema.safeParse(commit2Placement);
      expect(placementValidation.success).toBe(true);

      const combinedWorld = {
        ...growingForestWorld,
        objects: [...growingForestWorld.objects, commit1Object],
        placements: [...growingForestWorld.placements, commit2Placement],
      };

      const worldValidation = WorldSchema.safeParse(combinedWorld);
      expect(worldValidation.success).toBe(true);
    });
  });
});
