import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { AboutStepsList } from "@/components/about-steps-list";
import { OurStorySection } from "@/components/our-story-section";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";
import { getAboutPage } from "@/sanity/lib/about-page";
import { renderHeading } from "@/lib/heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How Dink'It Golf gets built: from human-scoped design through Claude-assisted development to real golfers testing it on the course. Plus the story behind why we started.",
  alternates: {
    canonical: "/about",
  },
};

export default async function About() {
  const [{ footer }, aboutPage] = await Promise.all([getLandingPage(), getAboutPage()]);
  const { hero, steps, story } = aboutPage;

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-16 sm:gap-20">
        <div className="flex w-full flex-col items-center px-6 pt-[130px] pb-0 text-center sm:pt-[150px] sm:pb-6">
          <span className="inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
            {hero.badge}
          </span>

          <h1 className="mt-[18px] max-w-[720px] text-[36px] leading-[1.1] font-medium tracking-[-0.72px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px]">
            {renderHeading(hero.heading, "text-[#87ffad]")}
          </h1>

          <p className="mt-[21px] max-w-[560px] text-[16px] leading-[1.4] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            {hero.subtext}
          </p>
        </div>

        <AboutStepsList steps={steps} />

        <OurStorySection story={story} />

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
