import type { Contributor } from "@/schemas";

export interface ContributorLabelProps {
  contributor: Contributor;
}

/**
 * ContributorLabel displays the contributor's chosen display name beneath the contributed object.
 * Styled as a physical paper pin badge with subtle drop shadow and tactile font.
 */
export function ContributorLabel({ contributor }: ContributorLabelProps) {
  return (
    <div
      className="mt-1.5 flex items-center justify-center rounded-full border border-stone-200/60 bg-[#FFFDF7]/95 px-2.5 py-0.5 text-[11px] font-medium tracking-tight text-stone-800 shadow-[0_2px_4px_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-all hover:scale-105 hover:bg-[#FFFDF7] select-none"
      aria-label={`Contributed by ${contributor.displayName}`}
    >
      <span className="font-mono text-[9px] text-amber-700/80 mr-1">✦</span>
      <span>{contributor.displayName}</span>
    </div>
  );
}
