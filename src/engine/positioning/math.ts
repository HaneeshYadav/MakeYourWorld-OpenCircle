export interface PositionStyle {
  left: string;
  top: string;
  transform: string;
  zIndex: number;
}

/**
 * Transforms normalized coordinates (0-100) into CSS positioning styles.
 * Translates the anchor to bottom-center (transform: translate(-50%, -100%)) so objects rest on their base.
 * Applies optional scale and rotation transforms.
 */
export function calculatePositionStyle(
  x: number,
  y: number,
  scale: number = 1.0,
  rotation: number = 0
): PositionStyle {
  const clampedX = Math.max(0, Math.min(100, x));
  const clampedY = Math.max(0, Math.min(100, y));

  const zIndex = calculateZIndex(clampedY);

  const transforms: string[] = ["translate(-50%, -100%)"];
  if (scale !== 1.0) {
    transforms.push(`scale(${scale})`);
  }
  if (rotation !== 0) {
    transforms.push(`rotate(${rotation}deg)`);
  }

  return {
    left: `${clampedX}%`,
    top: `${clampedY}%`,
    transform: transforms.join(" "),
    zIndex,
  };
}

/**
 * Derives depth / z-index directly from the vertical normalized Y coordinate.
 * Objects placed lower on the screen (higher Y) naturally render in front of objects higher on the screen (lower Y).
 * Range: y=0 -> zIndex=10, y=100 -> zIndex=1010
 */
export function calculateZIndex(y: number): number {
  const clampedY = Math.max(0, Math.min(100, y));
  return Math.round(10 + clampedY * 10);
}
