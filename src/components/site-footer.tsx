import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { renderHeading } from "@/lib/heading";
import type { HeadingWithHighlight } from "@/sanity/lib/types";

export function FooterContent({
  mobileHeading,
  desktopHeading,
  subtext,
  disclaimer,
  copyright,
}: {
  mobileHeading: string;
  desktopHeading: HeadingWithHighlight;
  subtext: string;
  disclaimer: string;
  copyright: string;
}) {
  return (
    <div className="w-full px-6 pt-16 pb-[140px] sm:px-10 sm:pb-[170px] md:px-16 md:pb-[210px]">
      <div
        id="waitlist"
        className="mx-auto flex w-full max-w-[503px] flex-col items-center gap-8 text-center sm:gap-[22px]"
      >
        <div className="h-[38px] w-[98px] sm:h-[46px] sm:w-[119px]">
          <img
            src="/images/dinkit-logo-dark.svg"
            alt="Dink'it Golf"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Mobile repeats the hero's heading copy (no colour emphasis);
            tablet/desktop keep the original "Golf Tracking, Simplified." */}
        <h2 className="text-[34px] leading-[42px] font-medium tracking-[-0.68px] text-black [font-family:var(--font-space-grotesk)] sm:hidden">
          {mobileHeading}
        </h2>
        <h2 className="hidden text-[32px] leading-[1.1] font-medium tracking-[-0.6px] text-black [font-family:var(--font-space-grotesk)] sm:block sm:text-[40px] md:text-[48px] md:tracking-[-0.96px]">
          {renderHeading(desktopHeading, "text-[#44e276]")}
        </h2>

        <p className="text-[16px] text-[#2d2d2d] [font-family:var(--font-42dot-sans)] sm:text-[18px]">
          {subtext}
        </p>

        <WaitlistForm theme="light" />
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[577px] flex-col items-center gap-3 pb-10 text-center">
        <p className="text-[13px] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[14px]">
          {disclaimer}
        </p>
        <p className="text-[14px] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[15px]">
          {copyright}
        </p>
        <p className="text-[14px] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[15px]">
          Website design and build by{" "}
          <a
            href="https://hivecreativemedia.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-[#44e276] hover:opacity-80"
          >
            Hive Creative Media
          </a>
        </p>
        <Link
          href="/cookie-policy"
          className="text-[13px] text-[#707070] underline underline-offset-2 hover:opacity-80 [font-family:var(--font-42dot-sans)] sm:text-[14px]"
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
