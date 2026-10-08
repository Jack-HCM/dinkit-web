import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Golf Club Distance Tracker | Real Averages for Every Club",
  description:
    "Average distance per club, calculated from your own GPS-tracked shots, with a manual override and a live club recommendation on the course. Free in Dink'It.",
  alternates: {
    canonical: "/golf-club-distance-tracker",
  },
};

const HOW_IT_WORKS = [
  {
    title: "A real average for every club you track",
    body: "Every full-swing shot you log feeds an average distance for that club, shown next to a manual override if you'd rather set your own number.",
    image: "/images/howto-clubdist-1-bag.jpg",
    alt: "Dink'It My Bag screen showing Driver 220 yards average from 15 tracked shots, with estimated distances for 3 Wood, 5 Wood, Hybrid, 2 Iron, and 3 Iron",
  },
  {
    title: "Recommends the right club while you're playing",
    body: "Aiming a shot on the course shows a recommended club and distance for that exact yardage, pulled straight from your bag's real numbers.",
    image: "/images/howto-shot-tracker-2-aim-mode.jpg",
    alt: "Dink'It GPS hole map in aim mode recommending Pitching Wedge at 85 yards",
  },
  {
    title: "Covers the short clubs too, and you're in control",
    body: "Wedges and short irons get the same tracked average as your driver, and any club can be excluded from on-course recommendations with one tap.",
    image: "/images/howto-clubdist-3-wedges.jpg",
    alt: "Dink'It My Bag screen showing tracked averages for 6 Iron through Sand Wedge, with Sand Wedge excluded from aim mode suggestions",
  },
];

const FAQS = [
  {
    q: "Is My Bag free?",
    a: "Yes. My Bag, average club distances, manual overrides, and the aim-mode club recommendation are all free, no Premium required.",
  },
  {
    q: "How is the average distance calculated?",
    a: "From the GPS distance between your logged shots during a round, attributed to the club you used, averaged across every GPS-tracked round you've played.",
  },
  {
    q: "What if I haven't tracked any shots with a club yet?",
    a: "Dink'It shows a general estimate for that club, clearly marked as an estimate, and switches over automatically once you've logged tracked shots with it.",
  },
  {
    q: "Can I set my own distance instead of using the tracked average?",
    a: "Yes. Type a number into any club's distance field and save it. A manual number always overrides the tracked average.",
  },
  {
    q: "Does it recommend clubs while I'm playing?",
    a: "Yes. Dink'It shows a recommended club and distance on the GPS hole map based on your bag's current numbers. Any club can be excluded from recommendations.",
  },
];

export default async function GolfClubDistanceTracker() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full max-w-[1326px] flex-col items-center gap-10 px-6 pt-[130px] pb-0 sm:pt-[150px] sm:pb-6 sm:px-10 md:flex-row md:items-center md:gap-14 md:px-14">
          <div className="flex w-full flex-col items-center text-center md:flex-1 md:items-start md:text-left">
            <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
              Club Distances
            </span>

            <h1 className="mt-[18px] max-w-[560px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
              Know how far you <span className="text-[#87ffad]">really</span> hit every club
            </h1>

            <p className="mt-[21px] max-w-[500px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
              Average distance per club, calculated from your own GPS-tracked shots, with a
              manual override if you'd rather set your own number, and a live club
              recommendation while you're on the course. Free, no Premium required.
            </p>

            <a
              href="https://app.dinkitgolf.com/dashboard"
              className="mt-[28px] shrink-0 rounded-[4px] bg-[#56c186] px-[20px] py-[14px] text-center text-[18px] font-medium whitespace-nowrap text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
            >
              Set Up My Bag
            </a>
          </div>

          <div className="relative aspect-[838/768] w-full overflow-hidden rounded-[20px] md:w-[46%]">
            <Image
              src="/images/hero-golf-club-distance-tracker.jpg"
              alt="A golf bag with clubs showing distance callouts for Driver 274 yards, 7 iron 140 yards, and Putter 22 yards"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="flex w-full max-w-[1120px] flex-col items-center gap-10 px-6">
          <h2 className="max-w-[640px] text-center text-[28px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[36px]">
            How Dink&apos;It tracks Club Distances
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
            Club Distances comes from the same{" "}
            <a href="/golf-shot-tracker" className="text-[#87ffad] underline underline-offset-2">
              GPS shot tracking
            </a>{" "}
            that powers{" "}
            <a href="/golf-shot-dispersion" className="text-[#87ffad] underline underline-offset-2">
              Shot Dispersion
            </a>{" "}
            and{" "}
            <a href="/strokes-gained" className="text-[#87ffad] underline underline-offset-2">
              Strokes Gained
            </a>
            , so the same tracked round feeds all three. Unlike those two, My Bag itself is
            free, no Premium required.
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
            Questions about Club Distances
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
