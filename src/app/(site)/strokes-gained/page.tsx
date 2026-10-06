import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Strokes Gained | See Where You Actually Lose Shots",
  description:
    "Strokes Gained broken down into Driving, Approach, Short Game, and Putting, logged for every round you track so you can see the trend, not just one round. Dink'It Premium.",
  alternates: {
    canonical: "/strokes-gained",
  },
};

const HOW_IT_WORKS = [
  {
    title: "Broken down into four categories",
    body: "Every tracked round is split into Driving, Approach, Short Game, and Putting, benchmarked against a handicap-relative baseline, so you know which part of your game actually gained or cost you strokes.",
    image: "/images/howto-stats-4-strokes-gained.jpg",
    alt: "Dink'It Strokes Gained screen for a round at Highgate Golf Club, showing overall Strokes Gained, Putting, and Tee to Green totals",
  },
  {
    title: "Logged for every round you play",
    body: "Each round you log adds a new entry to your Strokes Gained log, with the date, course, and headline number, so you can see how the figure moves over a season instead of chasing one good round.",
    image: "/images/howto-sg-2-trend.jpg",
    alt: "Dink'It Strokes Gained log showing total Strokes Gained logged for rounds played at Highgate Golf Club",
  },
  {
    title: "Filter by Tee-to-green or Putting",
    body: "Switch the log between overall Strokes Gained, Tee-to-green, and Putting to isolate the one category you're actually trying to fix.",
    image: "/images/howto-sg-3-category.jpg",
    alt: "Dink'It Strokes Gained log filtered to Putting, showing Putting Strokes Gained for each logged round",
  },
];

const FAQS = [
  {
    q: "Is Strokes Gained free?",
    a: "No. The Strokes Gained breakdown and log are part of Dink'It Premium, £5.99 a month. Career Stats and round history stay free regardless.",
  },
  {
    q: "What's the difference between tracked and Estimated?",
    a: "Strokes Gained is exact when a round is fully GPS shot-tracked, including putts logged separately from full swings. Rounds without that, manually entered scorecards, rounds missing some logged shots, or rounds with no putts marked, use an estimate based on your handicap index and average putts instead, marked Estimated.",
  },
  {
    q: "What are the four categories?",
    a: "Driving, Approach, Short Game, and Putting. Each one shows how many strokes you gained or lost against a handicap-relative baseline for that part of the round.",
  },
  {
    q: "Can I see one round or the trend over time?",
    a: "Both. Open a round's game stats for that round's breakdown, or use the Strokes Gained log here to see every tracked round's totals in one place.",
  },
];

export default async function StrokesGained() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Strokes Gained
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              See exactly where a round was <span className="text-[#87ffad]">won or lost</span>
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              Driving, Approach, Short Game, and Putting, benchmarked against a
              handicap-relative baseline and logged for every round you track. Dink&apos;It
              Premium.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              Try Strokes Gained
            </a>
          </div>

          <div className="relative flex aspect-[838/768] w-full items-center justify-center overflow-hidden rounded-[20px] border border-dashed border-white/30 bg-white/[0.04] md:w-[46%]">
            <span className="px-6 text-center text-[14px] font-medium text-white/50 [font-family:var(--font-space-grotesk)]">
              Hero image placeholder
            </span>
          </div>
        </div>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            How Dink&apos;It tracks Strokes Gained
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
            Built on your tracked shot data
          </h2>
          <p className="max-w-[640px] text-[16px] leading-[1.5] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Strokes Gained comes from the same{" "}
            <a href="/golf-shot-tracker" className="text-[#87ffad] underline underline-offset-2">
              GPS shot tracking
            </a>{" "}
            that powers{" "}
            <a href="/golf-performance-analysis" className="text-[#87ffad] underline underline-offset-2">
              AI coaching and round comparison
            </a>
            , so the same tracked round feeds all three. Not sure what Strokes Gained actually
            means?{" "}
            <a
              href="/strokes-gained/what-is-strokes-gained"
              className="text-[#87ffad] underline underline-offset-2"
            >
              Read the full explainer
            </a>
            .
          </p>
          <a
            href="/golf-stats-app"
            className="text-[15px] font-medium text-[#87ffad] underline underline-offset-2 [font-family:var(--font-space-grotesk)]"
          >
            See the free Golf Stats App →
          </a>
        </section>

        <section className="flex w-full max-w-[820px] flex-col gap-8 px-6 pb-4">
          <h2 className="text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Questions about Strokes Gained
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
