import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Performance Analysis | AI Coaching & Round Comparison",
  description:
    "AI coaching feedback after every tracked round, broken down by Driving, Approach, Short Game, and Putting, plus side-by-side comparison of any two rounds. Dink'It Premium.",
  alternates: {
    canonical: "/golf-performance-analysis",
  },
};

const HOW_IT_WORKS = [
  {
    title: "AI coaching after every round",
    body: "Analyse Round reads your scorecard and tracked shot data and writes a plain-English summary of how the round actually went, not just the final score, including which hole cost you the most relative to your usual form here.",
    image: "/images/howto-analysis-1-overall.jpg",
    alt: "Dink'It Analyse Round screen showing an AI-written Overall Play summary for a round at Highgate Golf Club",
  },
  {
    title: "Broken down by category, not just overall",
    body: "The same feedback is split into Driving, Approach, Short Game, and Putting, so you know which specific part of your game gained or cost you strokes, rather than one vague score.",
    image: "/images/howto-analysis-2-categories.jpg",
    alt: "Dink'It AI coaching feedback broken down into Driving and Approach sections",
  },
  {
    title: "Compare any two rounds at the same course",
    body: "Pick two rounds played at the same course for a side-by-side scorecard, Strokes Gained for each round, and an AI comparison narrative explaining what actually changed between them.",
    image: "/images/howto-analysis-3-compare.jpg",
    alt: "Dink'It Compare Rounds screen showing two scorecards and Strokes Gained totals side by side for two rounds at Highgate Golf Club",
  },
];

const FAQS = [
  {
    q: "Is performance analysis free?",
    a: "No. Analyse Round, Compare Rounds, and their AI narratives are part of Dink'It Premium, £5.99 a month. Career Stats and round history stay free regardless.",
  },
  {
    q: "How many AI analyses do I get?",
    a: "5 AI analyses a month, shared between Analyse Round and Compare Rounds. Once a round or pairing has been analysed, that result is saved and doesn't use another analysis to view again.",
  },
  {
    q: "Do I need GPS shot tracking for this?",
    a: "Analyse Round needs GPS data on at least half of a round's shots to generate coaching feedback. Compare Rounds works from your scorecards either way, with hole-by-hole shot maps added for any rounds you tracked.",
  },
  {
    q: "Can I compare rounds from different courses?",
    a: "Not yet. Compare Rounds works between two rounds played at the same course, so the hole-by-hole comparison is actually apples to apples.",
  },
];

export default async function GolfPerformanceAnalysis() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Performance Analysis
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              See what actually <span className="text-[#87ffad]">won or lost</span> a round
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              AI coaching feedback broken down by Driving, Approach, Short Game, and Putting,
              plus side-by-side comparison of any two rounds at the same course. Dink&apos;It
              Premium.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              Try Performance Analysis
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
            How Dink&apos;It analyses your performance
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
            Performance analysis reads the same{" "}
            <a href="/golf-shot-tracker" className="text-[#87ffad] underline underline-offset-2">
              GPS shot tracking
            </a>{" "}
            that powers{" "}
            <a href="/strokes-gained" className="text-[#87ffad] underline underline-offset-2">
              Strokes Gained
            </a>
            , so the coaching feedback and round comparisons are grounded in what actually
            happened on the course, not a guess from your final score.
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
            Questions about performance analysis
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
