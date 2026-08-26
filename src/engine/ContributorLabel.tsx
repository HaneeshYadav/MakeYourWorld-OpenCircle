import type { Contributor } from "@/schemas";

export interface ContributorLabelProps {
  contributor: Contributor;
}

/**
 * ContributorLabel displays the contributor's chosen display name beneath the contributed object.
 * Accessible to screen readers and formatted as a paper label.
 */
export function ContributorLabel({ contributor }: ContributorLabelProps) {
  return (
    <div
      className="mt-1 flex items-center justify-center rounded bg-card/90 px-1.5 py-0.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm select-none"
      aria-label={`Contributed by ${contributor.displayName}`}
    >
      <span>{contributor.displayName}</span>
    </div>
  );
}
