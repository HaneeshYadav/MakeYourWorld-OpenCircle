import type { Background } from "@/schemas";

export interface WorldBackgroundProps {
  background: Background;
}

/**
 * WorldBackground renders the maintainer-owned static backdrop or CSS gradient for a segment.
 */
export function WorldBackground({ background }: WorldBackgroundProps) {
  const style: React.CSSProperties = {
    background: background.cssGradient || "hsl(var(--muted))",
  };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none"
      style={style}
      aria-hidden="true"
    >
      {background.asset && (
        <img
          src={background.asset}
          alt={background.altText || "World background backdrop"}
          className="h-full w-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
    </div>
  );
}
