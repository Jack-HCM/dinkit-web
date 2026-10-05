import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { ArticleToc, type TocItem } from "@/components/article-toc";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "What Is Strokes Gained? A Plain-English Explanation",
  description:
    "Strokes Gained explained without the stats-class jargon: what it measures, why total score hides where you're actually losing strokes, and how to see it from your own rounds.",
  alternates: {
    canonical: "/strokes-gained/what-is-strokes-gained",
  },
};

const TOC_ITEMS: TocItem[] = [
  { id: "why-score-isnt-enough", label: "Two golfers, same score" },
  { id: "four-categories", label: "The four categories" },
  { id: "total-score-isnt-enough", label: "Why total score isn't enough" },
  { id: "how-to-see-your-own", label: "How to see your own Strokes Gained" },
];

const CATEGORIES = [
  {
    title: "Driving",
    body: "How much ground your tee shots gain or lose compared to the baseline, before anything else in the hole happens.",
  },
  {
    title: "Approach",
    body: "Shots into the green from outside short-game range — usually the category with the biggest swings for mid-to-high handicappers.",
  },
  {
    title: "Short game",
    body: "Chips, pitches, and bunker shots once you're near the green but not yet on it.",
  },
  {
    title: "Putting",
    body: "Everything that happens once the ball is on the green.",
  },
];

export default async function WhatIsStrokesGained() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full flex-col items-center px-6 pt-[130px] pb-0 text-center sm:pt-[150px] sm:pb-6">
          <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
            Strokes Gained
          </span>

          <h1 className="mt-[18px] max-w-[760px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
            What is <span className="text-[#87ffad]">Strokes Gained</span>?
          </h1>

          <p className="mt-[21px] max-w-[580px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Your scorecard tells you what you shot. Strokes Gained tells you why — by comparing
            every shot you hit to a baseline, instead of just adding up strokes.
          </p>
        </div>

        <div className="flex w-full max-w-[1120px] items-start gap-12 px-6 lg:px-10">
          <ArticleToc items={TOC_ITEMS} />

          <div className="flex w-full flex-1 flex-col gap-16 sm:gap-20">
            <section id="why-score-isnt-enough" className="flex w-full max-w-[760px] flex-col gap-6">
              <p className="text-[16px] leading-[1.7] text-white/85 [font-family:var(--font-42dot-sans)]">
                Two golfers can both shoot 88 and have completely different rounds. One leaked
                strokes off the tee and scrambled well. The other drove it beautifully and
                three-putted half the back nine. Final score can&apos;t tell them apart —
                it&apos;s just a total. Strokes Gained is built to tell them apart.
              </p>
              <p className="text-[16px] leading-[1.7] text-white/85 [font-family:var(--font-42dot-sans)]">
                Instead of only counting strokes, Strokes Gained compares each shot you hit
                against a baseline for golfers at your handicap level, hitting from the same
                distance and lie. Hit a shot better than that baseline and you &quot;gain&quot; a
                fraction of a stroke on the field. Hit it worse, and you lose one. Add every shot
                in the round up by category, and you get a breakdown of exactly where your round
                was won or lost — not just what you scored.
              </p>
            </section>

            <section id="four-categories" className="flex w-full flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
                  The four categories
                </h2>
                <p className="max-w-[640px] text-[16px] leading-[1.5] text-white/70 [font-family:var(--font-42dot-sans)]">
                  Dink&apos;It&apos;s Strokes Gained analysis (Premium) breaks a round down into
                  these four, benchmarked against a handicap-relative baseline:
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.title}
                    className="flex h-full w-full flex-col gap-3 rounded-[20px] border border-white/15 bg-white/[0.04] p-8"
                  >
                    <h3 className="text-[20px] leading-[1.15] font-medium tracking-[-0.4px] text-[#87ffad] [font-family:var(--font-space-grotesk)]">
                      {cat.title}
                    </h3>
                    <p className="text-[15px] leading-[1.55] text-white/80 [font-family:var(--font-42dot-sans)]">
                      {cat.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="total-score-isnt-enough" className="flex w-full max-w-[760px] flex-col gap-6">
              <h2 className="text-[24px] leading-[1.2] font-medium tracking-[-0.4px] text-white [font-family:var(--font-space-grotesk)] sm:text-[28px]">
                Why total score isn&apos;t enough
              </h2>
              <p className="text-[16px] leading-[1.7] text-white/85 [font-family:var(--font-42dot-sans)]">
                A score tells you the destination, not the route. If you don&apos;t know whether
                a bad round came from the tee, the approach, around the green, or on it,
                you&apos;re practising on a guess. Strokes Gained turns &quot;I played badly&quot;
                into &quot;I lost 1.8 strokes on approach shots from 120-150 yards&quot; —
                something you can actually do something about.
              </p>
            </section>

            <section id="how-to-see-your-own" className="flex w-full max-w-[760px] flex-col gap-6">
              <h2 className="text-[24px] leading-[1.2] font-medium tracking-[-0.4px] text-white [font-family:var(--font-space-grotesk)] sm:text-[28px]">
                How to see your own Strokes Gained
              </h2>
              <p className="text-[16px] leading-[1.7] text-white/85 [font-family:var(--font-42dot-sans)]">
                Strokes Gained can&apos;t be worked out after the fact from a scorecard alone — it
                needs to know where each shot was actually hit from. That&apos;s what
                Dink&apos;It&apos;s{" "}
                <a href="/golf-shot-tracker" className="text-[#87ffad] underline underline-offset-2">
                  GPS shot tracking
                </a>{" "}
                is for: tap to log each shot&apos;s position and club as you play, free, no extra
                hardware. Once a round has shots tracked, Premium turns that into a full Strokes
                Gained breakdown by category, plus a trend line across every round you&apos;ve
                tracked — so you can watch a weak category actually improve over a season, not
                just guess at it.
              </p>
              <a
                href="https://app.dinkitgolf.com/dashboard"
                className="mt-2 w-fit shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
              >
                Start Tracking Your Strokes Gained
              </a>
            </section>
          </div>
        </div>

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
