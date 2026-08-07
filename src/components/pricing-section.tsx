const FREE_FEATURES = [
  {
    title: "Phone GPS Tracking:",
    desc: "Real-time distances to greens and hazards on your phone.",
  },
  {
    title: "Instant Shot Logging:",
    desc: "Stand by your ball and log shots instantly.",
  },
  {
    title: "Core Metrics:",
    desc: "Track your strokes, putts, and score vs par.",
  },
  {
    title: "Lifetime History:",
    desc: "View your total games, historical averages, and favourite courses.",
  },
];

const PREMIUM_FEATURES = [
  {
    title: "Strokes Gained Analytics:",
    desc: "Tour-level breakdown of your driving, approach, short game, and putting.",
  },
  {
    title: "Shot Dispersion Mapping:",
    desc: "See your true tendencies (short/long and left/right bias).",
  },
  {
    title: "Course-Specific Trends:",
    desc: "Compare your history and progress on the exact same course over time.",
  },
  {
    title: "AI Performance Summaries:",
    desc: "Receive 5 personalized, straightforward coaching reports every month.",
  },
];

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

export function PricingSection() {
  return (
    <section className="flex w-full max-w-[1280px] flex-col gap-10 px-6 py-10 sm:py-14 md:py-20 lg:flex-row lg:items-stretch lg:gap-6">
      {/* Left column */}
      <div className="flex w-full flex-col justify-center gap-6 lg:flex-1">
        <p className="text-[18px] font-medium text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[21px]">
          Free tracking. Premium analytics.
        </p>
        <h2 className="max-w-[520px] text-[32px] leading-[1.1] font-medium text-white [font-family:var(--font-space-grotesk)] sm:text-[38px] md:text-[44px]">
          Start free. Expand your insights when you&rsquo;re ready.
        </h2>
        <p className="max-w-[349px] text-[16px] leading-[26px] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
          Start for free today, and explore premium when you want the
          additional analytics
        </p>
        <a
          href="#waitlist"
          className="inline-flex h-[47px] w-fit items-center rounded-[4px] bg-[#56c186] px-[16px] text-[18px] font-medium text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
        >
          Join waitlist
        </a>
      </div>

      {/* Free */}
      <div className="flex w-full flex-col rounded-[8px] bg-white px-[26px] pt-[29px] pb-10 lg:w-[353px] lg:shrink-0">
        <h3 className="text-[34px] font-medium tracking-[-0.68px] text-[#347e55] [font-family:var(--font-space-grotesk)]">
          Free
        </h3>
        <p className="mt-[9px] max-w-[262px] text-[16px] font-medium text-black [font-family:var(--font-42dot-sans)]">
          Everything you need for casual tracking and logging rounds.
        </p>
        <p className="mt-[11px] text-[46px] font-medium tracking-[-0.92px] text-black [font-family:var(--font-space-grotesk)]">
          £0
        </p>
        <div className="mt-[16px] -mx-[26px] border-t border-[#87ffad]" />
        <p className="mt-[20px] text-[16px] font-extrabold text-[#3d8d60] [font-family:var(--font-42dot-sans)]">
          All the tracking you need for free:
        </p>
        <ul className="mt-[20px] flex flex-col gap-[20px]">
          {FREE_FEATURES.map((f) => (
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
          Premium
        </h3>
        <p className="mt-[9px] max-w-[262px] text-[16px] font-medium text-white [font-family:var(--font-42dot-sans)]">
          Golfers looking to analyze data and lower their handicap.
        </p>
        <div className="mt-[11px] flex flex-wrap items-center gap-3">
          <p className="text-[46px] font-medium tracking-[-0.92px] text-[#87ffad] [font-family:var(--font-space-grotesk)]">
            £5<span className="text-[30px]">.99</span>
          </p>
          <span className="inline-flex items-center gap-[3px] rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[11px] font-bold whitespace-nowrap text-[#87ffad] [font-family:var(--font-space-grotesk)]">
            <span>
              £49<span className="text-[7px]">.99</span>
            </span>
            <span>when billed annually</span>
          </span>
        </div>
        <div className="mt-[16px] -mx-[26px] border-t border-[#3d8d60]" />
        <p className="mt-[20px] text-[16px] font-extrabold text-[#87ffad] [font-family:var(--font-42dot-sans)]">
          Everything in Free, plus:
        </p>
        <ul className="mt-[20px] flex flex-col gap-[20px]">
          {PREMIUM_FEATURES.map((f) => (
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
