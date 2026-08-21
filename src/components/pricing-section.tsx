import type { Plan } from "@/sanity/lib/types";

function Check({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 9.39471"
      fill="none"
      className={className}
    >
      <path
        d="M1 5.27778L3.8 8L11 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PricingSection({
  eyebrow,
  heading,
  subtext,
  ctaLabel,
  freePlan,
  premiumPlan,
}: {
  eyebrow: string;
  heading: string;
  subtext: string;
  ctaLabel: string;
  freePlan: Plan;
  premiumPlan: Plan;
}) {
  return (
    <section className="flex w-full max-w-[1280px] flex-col gap-10 px-5 py-10 sm:px-6 sm:py-14 md:py-20 lg:flex-row lg:items-stretch lg:gap-6">
      {/* Left column */}
      <div className="flex w-full flex-col justify-center gap-6 lg:flex-1">
        <p className="text-[18px] font-medium text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[21px]">
          {eyebrow}
        </p>
        <h2 className="max-w-[520px] text-[32px] leading-[1.1] font-medium text-white [font-family:var(--font-space-grotesk)] sm:text-[38px] md:text-[44px]">
          {heading}
        </h2>
        <p className="max-w-[349px] text-[16px] leading-[26px] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
          {subtext}
        </p>
        <a
          href="#waitlist"
          className="inline-flex h-[47px] w-fit items-center rounded-[4px] bg-[#56c186] px-[16px] text-[18px] font-medium text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
        >
          {ctaLabel}
        </a>
      </div>

      {/* Free */}
      <div className="flex w-full flex-col rounded-[8px] bg-white px-[26px] pt-[29px] pb-10 lg:w-[353px] lg:shrink-0">
        <h3 className="text-[34px] font-medium tracking-[-0.68px] text-[#347e55] [font-family:var(--font-space-grotesk)]">
          {freePlan.name}
        </h3>
        <p className="mt-[9px] max-w-[262px] text-[16px] font-medium text-black [font-family:var(--font-42dot-sans)]">
          {freePlan.description}
        </p>
        <p className="mt-[11px] text-[46px] font-medium tracking-[-0.92px] text-black [font-family:var(--font-space-grotesk)]">
          {freePlan.priceMain}
          {freePlan.priceDecimal && (
            <span className="text-[30px]">{freePlan.priceDecimal}</span>
          )}
        </p>
        <div className="mt-[16px] -mx-[26px] border-t border-[#87ffad]" />
        <p className="mt-[20px] text-[16px] font-extrabold text-[#3d8d60] [font-family:var(--font-42dot-sans)]">
          {freePlan.featuresIntro}
        </p>
        <ul className="mt-[20px] flex flex-col gap-[20px]">
          {freePlan.features.map((f) => (
            <li key={f.title} className="flex gap-[13px]">
              <Check className="mt-[7px] shrink-0 text-[#347e55]" />
              <p className="text-[14px] leading-normal text-black [font-family:var(--font-42dot-sans)]">
                <span className="text-[16px] font-extrabold">{f.title} </span>
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Premium */}
      <div className="flex w-full flex-col rounded-[8px] border border-[#87ffad] bg-[#133422] px-[26px] pt-[29px] pb-10 lg:w-[353px] lg:shrink-0">
        <h3 className="text-[34px] font-medium tracking-[-0.68px] text-[#87ffad] [font-family:var(--font-space-grotesk)]">
          {premiumPlan.name}
        </h3>
        <p className="mt-[9px] max-w-[262px] text-[16px] font-medium text-white [font-family:var(--font-42dot-sans)]">
          {premiumPlan.description}
        </p>
        <div className="mt-[11px] flex flex-wrap items-center gap-3">
          <p className="text-[46px] font-medium tracking-[-0.92px] text-[#87ffad] [font-family:var(--font-space-grotesk)]">
            {premiumPlan.priceMain}
            {premiumPlan.priceDecimal && (
              <span className="text-[30px]">{premiumPlan.priceDecimal}</span>
            )}
          </p>
          {premiumPlan.annualBadgeMain && premiumPlan.annualBadgeLabel && (
            <span className="inline-flex items-center gap-[3px] rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[11px] font-bold whitespace-nowrap text-[#87ffad] [font-family:var(--font-space-grotesk)]">
              <span>
                {premiumPlan.annualBadgeMain}
                {premiumPlan.annualBadgeDecimal && (
                  <span className="text-[7px]">{premiumPlan.annualBadgeDecimal}</span>
                )}
              </span>
              <span>{premiumPlan.annualBadgeLabel}</span>
            </span>
          )}
        </div>
        <div className="mt-[16px] -mx-[26px] border-t border-[#3d8d60]" />
        <p className="mt-[20px] text-[16px] font-extrabold text-[#87ffad] [font-family:var(--font-42dot-sans)]">
          {premiumPlan.featuresIntro}
        </p>
        <ul className="mt-[20px] flex flex-col gap-[20px]">
          {premiumPlan.features.map((f) => (
            <li key={f.title} className="flex gap-[13px]">
              <Check className="mt-[7px] shrink-0 text-[#87ffad]" />
              <p className="text-[14px] leading-normal text-white [font-family:var(--font-42dot-sans)]">
                <span className="text-[16px] font-extrabold">{f.title} </span>
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
