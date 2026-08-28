import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { FeaturesList } from "@/components/features-list";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "App Features",
  description:
    "Every Dink'It feature, free and Premium — GPS shot tracking, lifetime stats, Strokes Gained, shot dispersion, and AI coaching.",
  alternates: {
    canonical: "/features",
  },
};

export default async function Features() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-10 sm:gap-11">
        <div className="flex w-full flex-col items-center px-6 pt-[130px] pb-0 text-center sm:pt-[150px] sm:pb-14">
          <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
            App features
          </span>

          <h1 className="mt-[18px] max-w-[720px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
            Everything you get with{" "}
            <span className="text-[#87ffad]">Dink&rsquo;It</span>
          </h1>

          <p className="mt-[21px] max-w-[560px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Free covers everything a golfer needs to log and understand a
            round. Premium adds the analysis you&rsquo;d otherwise need
            separate hardware or a $50&ndash;100/yr subscription to get.
          </p>
        </div>

        <FeaturesList />

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
