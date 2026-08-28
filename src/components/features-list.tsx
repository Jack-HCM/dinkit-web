type FeatureItem = {
  title: string;
  desc: string;
  note?: string;
  tag?: string;
};

// Straight from the product reference doc's "Current Features" table —
// the source of truth for tier claims, not marketing copy. Course search
// is the one item usable with no account at all, flagged via `tag` rather
// than a whole separate section since it's a single row.
const FREE_FEATURES: FeatureItem[] = [
  {
    title: "Course search",
    desc: "Search live UK course data by postcode or town; filter by difficulty and sort results.",
    tag: "No account needed",
  },
  {
    title: "Course details",
    desc: "Full course page — tees, par, opening hours, distance from home location.",
  },
  {
    title: "Favourite courses",
    desc: "Save courses to a personal list, with rounds-played and last-played stats.",
  },
  {
    title: "GPS shot tracking",
    desc: "Log each stroke's GPS position, club used, and penalties live during a round.",
    note: "Tap-to-track per shot, not continuous background GPS.",
  },
  {
    title: "Shot log & map",
    desc: "Per-hole map of every tracked shot, with distances and drop reasons.",
    note: "Shareable via a direct link.",
  },
  {
    title: "Manual round logging",
    desc: "Log a finished round's score without live GPS tracking.",
  },
  {
    title: "Round history",
    desc: "List of every past round, with resume-in-progress support.",
  },
  {
    title: "Per-round stats",
    desc: "Strokes, putts, score vs. par, and play time for a single round.",
  },
  {
    title: "Lifetime stats",
    desc: "Career averages, best score, total rounds and play time, most-played course.",
  },
  {
    title: "Handicap index",
    desc: "USGA-style handicap calculated automatically from rated rounds.",
  },
  {
    title: "Highlight badges",
    desc: "Best score, longest drive, and longest putt badges on the dashboard.",
  },
  {
    title: "Friends & social",
    desc: "Add friends, manage requests, view a friend's stats and rounds.",
  },
  {
    title: "Multiplayer games",
    desc: "Host a round with a join code, QR, or link — or join a friend's.",
    note: "Direct friend invites too, not just code/link joins.",
  },
  {
    title: "Practice round mode",
    desc: "Play at a course without full slope/rating data.",
    note: "Doesn't count toward career stats.",
  },
  {
    title: "First-run tour",
    desc: "Guided 5-step walkthrough shown automatically the first time you play Hole 1.",
    note: "Replayable any time from Help.",
  },
  {
    title: "Account & profile",
    desc: "Edit profile, upload a photo, manage subscription and billing.",
    note: "Also the entry point to upgrade to Premium.",
  },
  {
    title: "Help & support",
    desc: "FAQ plus a direct contact form to the team.",
  },
];

const PREMIUM_FEATURES: FeatureItem[] = [
  {
    title: "Strokes Gained analysis",
    desc: "Performance broken down by driving, approach, short game, and putting.",
    note: "Benchmarked against a handicap-relative baseline.",
  },
  {
    title: "Strokes Gained history",
    desc: "Trend log of Strokes Gained by category across every tracked round.",
  },
  {
    title: "Shot dispersion analysis",
    desc: "Where shots actually land vs. target — short/long and left/right bias by club.",
  },
  {
    title: "AI coaching narrative",
    desc: "AI-written coaching summary of a single round's Strokes Gained and dispersion data.",
    note: "5 AI analyses/month, shared with comparison narratives; needs GPS data on ≥50% of a round's shots.",
  },
  {
    title: "Round comparison",
    desc: "Side-by-side, hole-by-hole comparison of two rounds on the same course.",
  },
  {
    title: "AI comparison narrative",
    desc: "AI-written head-to-head coaching summary between two rounds.",
    note: "Draws from the same 5/month AI cap.",
  },
  {
    title: "My Bag",
    desc: "Average distance per club, calculated from tracked shots, with manual override.",
  },
  {
    title: "Premium badge",
    desc: "A visible badge next to your name on the dashboard and friend profiles.",
    note: "Toggle it on/off in Account settings.",
  },
];

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

export function FeaturesList() {
  return (
    <div className="flex w-full max-w-[1280px] flex-col gap-10 px-6 py-10 sm:py-14 md:gap-14">
      <div className="flex flex-col gap-6 rounded-[24px] bg-white px-[26px] py-[32px] sm:px-[40px] sm:py-[44px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[26px] font-medium tracking-[-0.4px] text-[#347e55] [font-family:var(--font-space-grotesk)] sm:text-[32px]">
            Free forever
          </h2>
          <p className="max-w-[560px] text-[16px] text-black [font-family:var(--font-42dot-sans)]">
            Everything to log and understand a round — no subscription required.
          </p>
        </div>
        <FeatureGrid features={FREE_FEATURES} dark={false} />
      </div>

      <div className="flex flex-col gap-6 rounded-[24px] border border-[#87ffad] bg-[#133422] px-[26px] py-[32px] sm:px-[40px] sm:py-[44px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[26px] font-medium tracking-[-0.4px] text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[32px]">
            Premium — £5.99/month
          </h2>
          <p className="max-w-[560px] text-[16px] text-white [font-family:var(--font-42dot-sans)]">
            The analysis competitors paywall or need separate hardware for.
          </p>
        </div>
        <FeatureGrid features={PREMIUM_FEATURES} dark />
      </div>
    </div>
  );
}
