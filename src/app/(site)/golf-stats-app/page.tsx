import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Stats App | Track & Analyse Your Game",
  description:
    "See your average score, rounds played, best score, and club-by-club distances build automatically from every round you log. Free, with Strokes Gained on Premium.",
  alternates: {
    canonical: "/golf-stats-app",
  },
};

const HOW_IT_WORKS = [
  {
    title: "Career Stats, updated automatically",
    body: "Every round you log builds your Career Stats: average score, rounds played, best score, total play time, and courses played, calculated live from your scorecards with no manual entry.",
    image: "/images/howto-stats-1-dashboard.jpg",
    alt: "Dink'It dashboard showing Career Stats cards for Average Score, Rounds Played, Best Score, Total Play Time, and Courses Played",
  },
  {
    title: "Dig into any single round",
    body: "Open any scorecard for the full hole-by-hole breakdown: strokes, putts, and your score against par on every hole, plus a shot log for any hole you tracked.",
    image: "/images/howto-stats-2-scorecard.jpg",
    alt: "Dink'It scorecard for an 18-hole round at Highgate Golf Club, showing hole-by-hole yardage, par, and score",
  },
  {
    title: "Know your real club distances",
    body: "My Bag turns tracked shots into a club-by-club average distance for every club you own, free, and you can manually override any estimate yourself.",
    image: "/images/howto-stats-3-bag.jpg",
    alt: "Dink'It My Bag screen showing average distance per club, including a tracked Driver distance of 203 yards",
  },
];

const PREMIUM_FEATURES = [
  {
    title: "Strokes Gained, by category",
    body: "See a tracked round broken down into Driving, Approach, Short Game, and Putting, so you know exactly which part of your game cost you the most shots, not just that you shot 84.",
    image: "/images/howto-stats-4-strokes-gained.jpg",
    alt: "Dink'It Strokes Gained screen for a round at Highgate Golf Club, showing overall Strokes Gained, Putting, and Tee to Green totals",
  },
  {
    title: "Club distances that actually update",
    body: "Club and total stats roll up every tracked shot into real yardages per club, driver through putter, so your distances reflect how you're hitting it now, not a number you guessed once.",
    image: "/images/howto-stats-5-club-stats.jpg",
    alt: "Dink'It Club and total stats panel showing total yards and total shots for Driver, 4 Iron, 5 Iron, and 6 Iron",
  },
  {
    title: "AI coaching after every round",
    body: "Analyse Round reads your scorecard and shot data and writes a plain-English breakdown of what went well, what didn't, and where to focus practice next.",
    image: "/images/howto-stats-6-ai-coaching.jpg",
    alt: "Dink'It Analyse Round screen showing AI coaching feedback on overall play for a round at Highgate Golf Club",
  },
];

const FAQS = [
  {
    q: "Is the stats tracking free?",
    a: "Yes. Career Stats, full round history, and My Bag club distances are all part of Dink'It's free tier. Strokes Gained and round comparison are part of Premium.",
  },
  {
    q: "Do I need to track shots to see stats?",
    a: "No. Average Score, Rounds Played, Best Score, and Total Play Time come from your scorecards alone. Tracking shots with GPS adds club distances and powers Premium's Strokes Gained analysis on top.",
  },
  {
    q: "What do I get with Premium?",
    a: "A Strokes Gained breakdown by category (Driving, Approach, Short Game, Putting) plus round-to-round comparison, both built from your tracked shot data.",
  },
  {
    q: "How many rounds until the stats mean something?",
    a: "Career Stats update after your first logged round. Club distances need at least one tracked shot per club, and Strokes Gained needs a season of tracked rounds to show a real trend.",
  },
];

export default async function GolfStatsApp() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Golf Stats App
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              Every round builds your <span className="text-[#87ffad]">golf stats</span>, free
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              Average score, best score, round history, and club distances, calculated
              automatically from the rounds you already log. No spreadsheets, no manual entry.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              See Your Stats Free
            </a>
          </div>

          <div className="relative aspect-[838/768] w-full overflow-hidden rounded-[20px] md:w-[46%]">
            <Image
              src="/images/hero-golf-stats-app.jpg"
              alt="A golfer checking the Dink'It app on his phone, showing Career Stats, Shot Highlights, and Most Played Course"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            How Dink&apos;It tracks your stats
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full w-full flex-col gap-5 overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.04]"
              >
                <div className="relative flex w-full justify-center pt-8">
                  <span className="absolute left-4 top-4 z-10 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-[#87ffad]/60 bg-[#212121] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative aspect-[390/844] w-[62%] max-w-[230px] overflow-hidden rounded-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="230px"
                      className="object-contain object-top"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-8 pb-8">
                  <h3 className="text-[20px] leading-[1.15] font-medium tracking-[-0.4px] text-white [font-family:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-white/80 [font-family:var(--font-42dot-sans)]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-full max-w-[920px] flex-col items-center gap-6 px-6 text-center">
          <h2 className="max-w-[640px] text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Free stats are just the start
          </h2>
          <p className="max-w-[640px] text-[16px] leading-[1.5] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Turn on{" "}
            <a href="/golf-shot-tracker" className="text-[#87ffad] underline underline-offset-2">
              GPS shot tracking
            </a>{" "}
            and every tracked round also feeds Premium&apos;s{" "}
            <a href="/strokes-gained" className="text-[#87ffad] underline underline-offset-2">
              Strokes Gained analysis
            </a>
            , so you can see exactly where a round was won or lost, not just the final score.
          </p>
          <a
            href="/features"
            className="text-[15px] font-medium text-[#87ffad] underline underline-offset-2 [font-family:var(--font-space-grotesk)]"
          >
            See every Dink&apos;It feature →
          </a>
        </section>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Three Premium stats features
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {PREMIUM_FEATURES.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full w-full flex-col gap-5 overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.04]"
              >
                <div className="relative flex w-full justify-center pt-8">
                  <span className="absolute left-4 top-4 z-10 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-[#87ffad]/60 bg-[#212121] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative aspect-[390/844] w-[62%] max-w-[230px] overflow-hidden rounded-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="230px"
                      className="object-contain object-top"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-8 pb-8">
                  <h3 className="text-[20px] leading-[1.15] font-medium tracking-[-0.4px] text-white [font-family:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-white/80 [font-family:var(--font-42dot-sans)]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-full max-w-[820px] flex-col gap-8 px-6 pb-4">
          <h2 className="text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Questions about golf stats tracking
          </h2>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="flex flex-col gap-2 rounded-[16px] border border-white/15 bg-white/[0.04] p-6"
              >
                <h3 className="text-[16px] font-medium text-white [font-family:var(--font-space-grotesk)]">
                  {faq.q}
                </h3>
                <p className="text-[15px] leading-[1.5] text-white/75 [font-family:var(--font-42dot-sans)]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AboutSection
          mobileHeading={footer.mobileHeading}
          desktopHeading={footer.desktopHeading}
          subtext={footer.subtext}
          disclaimer={footer.disclaimer}
          copyright={footer.copyright}
        />
      </main>
    </div>
  );
}
