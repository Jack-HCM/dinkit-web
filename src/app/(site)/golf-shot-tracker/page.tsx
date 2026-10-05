import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Shot Tracker — GPS Shot-by-Shot Tracking",
  description:
    "Track every shot's GPS position, club, and penalties as you play, on a satellite map that rotates to your direction. Free, no extra hardware — just your phone.",
  alternates: {
    canonical: "/golf-shot-tracker",
  },
};

const HOW_IT_WORKS = [
  {
    title: "Tap to log each shot",
    body: "Tap where you played from and Dink'It records that shot's GPS position, the club you used, and any penalty — no continuous background tracking draining your battery.",
  },
  {
    title: "Watch the map rotate with you",
    body: "The satellite map turns to face your direction of play, so the hole always reads the way you're standing on it. Pinch to zoom, twist to rotate manually, one tap to recenter.",
  },
  {
    title: "Get a shot-by-shot map of the hole",
    body: "Every tracked shot lands on a per-hole map with distances and drop reasons attached — shareable with a direct link if you want someone else to see exactly how a hole played out.",
  },
];

const FAQS = [
  {
    q: "Does the golf shot tracker need extra hardware?",
    a: "No. Dink'It uses your phone's GPS — there's no sensor, tag, or separate device to buy or charge.",
  },
  {
    q: "Does it track my position continuously during a round?",
    a: "No. Shot tracking is tap-to-track: you log a shot's position when you play it, rather than Dink'It recording your location continuously in the background. That keeps battery use and privacy exposure to a minimum.",
  },
  {
    q: "Is shot tracking free?",
    a: "Yes. GPS shot tracking, the shot log map, and per-round stats are all part of Dink'It's free tier. Strokes Gained and shot dispersion analysis built from your tracked shots are part of Premium.",
  },
  {
    q: "What do I get once I've tracked a few rounds?",
    a: "Lifetime stats, per-round breakdowns, and — on Premium — Strokes Gained and shot dispersion analysis, which need tracked shot data to work. The more rounds you track, the more those numbers mean.",
  },
];

export default async function GolfShotTracker() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full flex-col items-center px-6 pt-[130px] pb-0 text-center sm:pt-[150px] sm:pb-6">
          <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
            Golf Shot Tracker
          </span>

          <h1 className="mt-[18px] max-w-[760px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
            Track every shot&apos;s <span className="text-[#87ffad]">GPS position</span>, free
          </h1>

          <p className="mt-[21px] max-w-[580px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Tap-to-track each shot&apos;s position, club, and penalties on a satellite map that
            rotates to your play direction — no extra hardware, no subscription required.
          </p>

          <a
            href="https://app.dinkitgolf.com/dashboard"
            className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
          >
            Track Your Next Round Free
          </a>
        </div>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            How shot tracking works
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full w-full flex-col gap-5 rounded-[20px] border border-white/15 bg-white/[0.04] p-8"
              >
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#87ffad]/40 text-[16px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-3">
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
            Shot tracking is the data behind everything else
          </h2>
          <p className="max-w-[640px] text-[16px] leading-[1.5] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Every GPS-tracked shot feeds your lifetime stats for free, and powers Premium&apos;s{" "}
            <a href="/strokes-gained/what-is-strokes-gained" className="text-[#87ffad] underline underline-offset-2">
              Strokes Gained analysis
            </a>{" "}
            and shot dispersion breakdowns — so the more rounds you track, the sharper the picture
            of where you&apos;re actually gaining and losing strokes.
          </p>
          <a
            href="/features"
            className="text-[15px] font-medium text-[#87ffad] underline underline-offset-2 [font-family:var(--font-space-grotesk)]"
          >
            See every Dink&apos;It feature →
          </a>
        </section>

        <section className="flex w-full max-w-[820px] flex-col gap-8 px-6 pb-4">
          <h2 className="text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            Questions about shot tracking
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
