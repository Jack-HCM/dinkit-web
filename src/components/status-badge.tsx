import type { RoadmapStatus } from "@/sanity/lib/types";

const STATUS_STYLES: Record<RoadmapStatus, { label: string; className: string }> = {
  inBuild: { label: "In build", className: "bg-[#87ffad] text-black" },
  planning: { label: "Planning", className: "bg-black text-white" },
  planned: { label: "Planned", className: "bg-[#347e55] text-white" },
  futureConsideration: { label: "Future consideration", className: "bg-[#9ff9fb] text-black" },
};

export function StatusBadge({ status }: { status: RoadmapStatus }) {
  const { label, className } = STATUS_STYLES[status];

  return (
    <span
      className={`inline-block w-fit rounded-[4px] px-[8px] py-[4px] text-[18px] leading-[26px] font-medium [font-family:var(--font-42dot-sans)] ${className}`}
    >
      {label}
    </span>
  );
}
