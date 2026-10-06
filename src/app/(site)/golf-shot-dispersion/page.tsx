import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Shot Dispersion | See Your Real Left-Right Miss",
  description:
    "See your average left or right miss in yards for Driving, Approach, and Short Game, from your real GPS-tracked shots. Dink'It Premium.",
  alternates: {
    canonical: "/golf-shot-dispersion",
  },
};

const HOW_IT_WORKS = [
  {
    title: "A left-right bias for every category",
    body: "Every GPS-tracked round splits your full-swing shots into Driving, Approach, and Short Game, and shows the average yards you miss left or right of the real line to the pin for each one.",
    image: "/images/howto-dispersion-1-biased.jpg",
    alt: "Dink'It Shot placement screen showing Driving 7 yards right, Approach 7 yards left, and Short Game 9 yards right",
  },
  {
    title: "Know when you're dead straight too",
    body: "No bias isn't hidden or rounded away. When a category comes back dead center, Dink'It shows On line, so a clean day shows up as clearly as a leak.",
    image: "/images/howto-dispersion-2-online.jpg",
    alt: "Dink'It Shot placement screen showing Driving On line and Short Game On line for a round at Highgate Golf Club",
  },
  {
    title: "Shows up right on your dashboard",
    body: "Shot placement sits in your Career Stats alongside Strokes Gained, so your left-right tendency updates automatically after every GPS-tracked round instead of staying buried in a separate report.",
    image: "/images/howto-dispersion-3-dashboard.jpg",
    alt: "Dink'It dashboard Shot placement card showing Driving, Approach, and Short Game bias across GPS-tracked holes",
  },
];

const FAQS = [
  {
    q: "Is Shot Dispersion free?",
    a: "No. Shot placement is part of Dink'It Premium, £5.99 a month. Career Stats and round history stay free regardless.",
  },
  {
    q: "What does 'On line' mean?",
    a: "Zero yards of left or right bias for that category in that round. Dink'It shows it exactly as On line rather than rounding a small number away.",
  },
  {
    q: "Which categories does it cover?",
    a: "Driving, Approach, and Short Game. Driving is the first full-swing shot on a par 4 or par 5. Short Game is a full swing from within 30 yards of the green. Everything else full-swing counts as Approach. Putts aren't included.",
  },
  {
    q: "Does it break shots down by club?",
    a: "Not yet. Today it's grouped by category, Driving, Approach, and Short Game, not by individual club.",
  },
  {
    q: "Do I need GPS shot tracking for this to work?",
    a: "Yes. It's calculated from shots logged against a hole's real mapped line, so it only appears for holes you GPS-tracked. Manually entered or Estimated rounds won't show it.",
  },
];

export default async function GolfShotDispersion() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Shot Dispersion
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              Know which way you miss, <span className="text-[#87ffad]">not just how often</span>
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              Driving, Approach, and Short Game shots mapped against the real line to the
              green, so you see your left or right bias in yards instead of a guess.
              Dink&apos;It Premium.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              Try Shot Dispersion
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
            How Dink&apos;It tracks Shot Dispersion
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
            Shot Dispersion comes from the same{" "}
            <a href="/golf-shot-tracker" className="text-[#87ffad] underline underline-offset-2">
              GPS shot tracking
            </a>{" "}
            that powers{" "}
            <a href="/strokes-gained" className="text-[#87ffad] underline underline-offset-2">
              Strokes Gained
            </a>{" "}
            and{" "}
            <a href="/golf-performance-analysis" className="text-[#87ffad] underline underline-offset-2">
              AI coaching
            </a>
            , so the same tracked round feeds all three.
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
            Questions about Shot Dispersion
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
