import type { World } from "@/schemas";
import { growingForestWorld } from "./growing-forest";

export { growingForestWorld };

export const allWorlds: World[] = [growingForestWorld];

export const worldsMap: Record<string, World> = {
  "growing-forest": growingForestWorld,
};
