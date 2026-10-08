import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Handicap Tracker | A Handicap That Updates Itself",
  description:
    "Start with the handicap you already know. Once you've logged 3 rated rounds, Dink'It replaces it with a real Handicap Index computed from your own scores. Free, no Premium required.",
  alternates: {
    canonical: "/golf-handicap-tracker",
  },
};

const HOW_IT_WORKS = [
  {
    title: "Start with the number you already know",
    body: "The first time you sign in, Dink'It asks for your current handicap. You can skip it if you don't have one, and change it anytime from your account.",
    image: "/images/howto-handicap-3-prompt.jpg",
    alt: "Dink'It first-run prompt asking a new user for their current handicap, with a skip option",
  },
  {
    title: "Log rated rounds and it takes over",
    body: "Any round you log against a rated tee, one with a course rating and slope set, counts. Once you've played 3, Dink'It calculates a real score differential for each one and replaces your self-reported number for good.",
    image: "/images/howto-handicap-2-account.jpg",
    alt: "Dink'It account page showing a computed Handicap badge of 14 next to a self-reported Current Handicap field of 14.2",
  },
  {
    title: "See it on your dashboard every time you play",
    body: "Your Handicap Index sits on your dashboard alongside your other stats, recalculated as soon as a new rated round comes in.",
    image: "/images/howto-handicap-1-dashboard.jpg",
    alt: "Dink'It dashboard header showing a Handicap stat of 14",
  },
];

const FAQS = [
  {
    q: "Is handicap tracking free?",
    a: "Yes. Handicap tracking is free, no Premium required.",
  },
  {
    q: "How many rounds do I need before Dink'It calculates my handicap?",
    a: "Three rated rounds, a round logged with a total score against a tee that has a course rating and slope rating set. Below that, Dink'It shows the number you self-reported.",
  },
  {
    q: "What happens to the handicap I entered myself?",
    a: "It's shown until you've logged 3 rated rounds, then replaced entirely by your computed Handicap Index. Dink'It doesn't blend or average the two numbers.",
  },
  {
    q: "What counts as a rated round?",
    a: "Any round where you log a total score against a tee with a course rating and slope rating. GPS shot tracking isn't required, a scorecard is enough.",
  },
  {
    q: "Can I change my handicap manually later?",
    a: "Yes, from your account page, right up until you've got 3 rated rounds logged. After that it's computed automatically from your scores.",
  },
];

export default async function GolfHandicapTracker() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Handicap Index
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              A handicap that <span className="text-[#87ffad]">updates itself</span> as you play
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              Enter a starting number when you sign up. Once you've logged 3 rated rounds,
              Dink'It replaces it with a real Handicap Index computed from your own scores, no
              blending, no guesswork. Free, no Premium required.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              Track My Handicap
            </a>
          </div>

          <div className="relative aspect-[838/768] w-full overflow-hidden rounded-[20px] md:w-[46%]">
            <Image
              src="/images/hero-golf-handicap-tracker.jpg"
              alt="Three golfers on a course with green Handicap badges above them reading 14, 20 and 9"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            How Dink&apos;It tracks your Handicap Index
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
            Built on your rated rounds
          </h2>
          <p className="max-w-[640px] text-[16px] leading-[1.5] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Your Handicap Index uses the same rated rounds that feed your{" "}
            <a href="/golf-performance-analysis" className="text-[#87ffad] underline underline-offset-2">
              career stats
            </a>
            , and it's one of the five numbers compared in{" "}
            <a href="/golf-head-to-head-comparison" className="text-[#87ffad] underline underline-offset-2">
              Head-to-Head
            </a>
            . Unlike GPS shot tracking features, it doesn't need tracked shots, just a logged
            score against a rated tee.
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
            Questions about Handicap Index
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
