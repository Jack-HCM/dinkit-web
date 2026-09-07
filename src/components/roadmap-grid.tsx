import Image from "next/image";
import { StatusBadge } from "@/components/status-badge";
import type { RoadmapRow as RoadmapRowData, RoadmapFeature } from "@/sanity/lib/types";

function FeatureCopy({ feature, className = "" }: { feature: RoadmapFeature; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h3 className="text-[24px] leading-[1.2] font-bold text-black [font-family:var(--font-space-grotesk)] sm:text-[28px]">
        {feature.title}
      </h3>
      <p className="text-[16px] leading-[1.5] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[18px]">
        {feature.description}
      </p>
      <StatusBadge status={feature.status} />
    </div>
  );
}

function RoadmapImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[260px] w-full sm:h-[360px] md:h-full md:min-h-[320px]">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}

function ImageRow({ row, imageOnLeft }: { row: RoadmapRowData; imageOnLeft: boolean }) {
  const feature = row.features[0];
  if (!feature || !row.image) return null;

  return (
    <div className="grid grid-cols-1 md:min-h-[320px] md:grid-cols-2">
      <div
        className={`flex flex-col justify-center px-[26px] py-[40px] sm:px-[56px] sm:py-[56px] ${
          imageOnLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <FeatureCopy feature={feature} />
      </div>
      <div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
        <RoadmapImage src={row.image} alt={feature.title} />
      </div>
    </div>
  );
}

function TwoColumnRow({ row }: { row: RoadmapRowData }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-[#ece7db] md:min-h-[320px] md:grid-cols-2 md:divide-x md:divide-y-0">
      {row.features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col justify-center px-[26px] py-[40px] sm:px-[56px] sm:py-[56px]"
        >
          <FeatureCopy feature={feature} />
        </div>
      ))}
    </div>
  );
}

export function RoadmapGrid({ rows }: { rows: RoadmapRowData[] }) {
  return (
    <section className="flex w-full max-w-[1280px] flex-col px-6">
      <div className="divide-y divide-[#ece7db] overflow-hidden rounded-[24px] bg-white">
        {rows.map((row, index) => (
          <div key={index}>
            {row.layout === "twoColumn" ? (
              <TwoColumnRow row={row} />
            ) : (
              <ImageRow row={row} imageOnLeft={row.layout === "imageLeft"} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
