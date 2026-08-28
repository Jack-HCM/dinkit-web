import type { FeatureItem } from "@/sanity/lib/types";

function Check({ className }: { className?: string }) {
  return (
    <svg width="12" height="10" viewBox="0 0 12 9.39471" fill="none" className={className}>
      <path
        d="M1 5.27778L3.8 8L11 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeatureGrid({ features, dark }: { features: FeatureItem[]; dark: boolean }) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <li key={f.title} className="flex gap-[13px]">
          <Check
            className={`mt-[7px] shrink-0 ${dark ? "text-[#87ffad]" : "text-[#347e55]"}`}
          />
          <div className="flex flex-col gap-1">
            <p
              className={`flex flex-wrap items-center gap-[8px] text-[16px] font-extrabold [font-family:var(--font-42dot-sans)] ${
                dark ? "text-[#87ffad]" : "text-[#347e55]"
              }`}
            >
              {f.title}
              {f.tag && (
                <span
                  className={`rounded-[24px] border px-[8px] py-[2px] text-[10px] font-bold whitespace-nowrap [font-family:var(--font-space-grotesk)] ${
                    dark
                      ? "border-[#87ffad] text-[#87ffad]"
                      : "border-[#347e55] text-[#347e55]"
                  }`}
                >
                  {f.tag}
                </span>
              )}
            </p>
            <p
              className={`text-[14px] leading-normal [font-family:var(--font-42dot-sans)] ${
                dark ? "text-white" : "text-black"
              }`}
            >
              {f.desc}
            </p>
            {f.note && (
              <p
                className={`text-[12px] leading-normal italic [font-family:var(--font-42dot-sans)] ${
                  dark ? "text-white/60" : "text-[#707070]"
                }`}
              >
                {f.note}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function FeaturesList({
  freeSection,
  premiumSection,
}: {
  freeSection: { heading: string; subtext: string; features: FeatureItem[] };
  premiumSection: { heading: string; subtext: string; features: FeatureItem[] };
}) {
  return (
    <div className="flex w-full max-w-[1280px] flex-col gap-10 px-6 py-10 sm:py-14 md:gap-14">
      <div className="flex flex-col gap-6 rounded-[24px] bg-white px-[26px] py-[32px] sm:px-[40px] sm:py-[44px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[26px] font-medium tracking-[-0.4px] text-[#347e55] [font-family:var(--font-space-grotesk)] sm:text-[32px]">
            {freeSection.heading}
          </h2>
          <p className="max-w-[560px] text-[16px] text-black [font-family:var(--font-42dot-sans)]">
            {freeSection.subtext}
          </p>
        </div>
        <FeatureGrid features={freeSection.features} dark={false} />
      </div>

      <div className="flex flex-col gap-6 rounded-[24px] border border-[#87ffad] bg-[#133422] px-[26px] py-[32px] sm:px-[40px] sm:py-[44px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[26px] font-medium tracking-[-0.4px] text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[32px]">
            {premiumSection.heading}
          </h2>
          <p className="max-w-[560px] text-[16px] text-white [font-family:var(--font-42dot-sans)]">
            {premiumSection.subtext}
          </p>
        </div>
        <FeatureGrid features={premiumSection.features} dark />
      </div>
    </div>
  );
}
