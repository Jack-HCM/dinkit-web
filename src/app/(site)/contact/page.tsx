import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { ContactSection } from "@/components/contact-section";
import { AboutSection } from "@/components/about-section";
import { getLandingPage } from "@/sanity/lib/landing-page";

export const metadata: Metadata = {
  title: "Contact / Feature Request",
  description:
    "Got feedback on Dink'It? Let us know what you'd like to see in the app, or flag anything that's not working.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function Contact() {
  const { footer } = await getLandingPage();

  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <SiteNav alwaysVisible />
      <main className="flex flex-1 flex-col items-center gap-10 sm:gap-11">
        <div className="pt-[130px] sm:pt-[150px]" />

        <ContactSection />

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
