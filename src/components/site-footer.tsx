import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";

export function SiteFooter() {
  return (
    <div className="relative w-full max-w-[1360px]">
      <div className="rounded-t-[24px] bg-white px-6 pt-16 pb-[140px] sm:px-10 sm:pb-[170px] md:px-16 md:pb-[210px]">
        <div className="mx-auto flex w-full max-w-[503px] flex-col items-center gap-8 text-center sm:gap-[22px]">
          <div className="h-[38px] w-[98px] sm:h-[46px] sm:w-[119px]">
            <img
              src="/images/dinkit-logo-dark.svg"
              alt="Dink'it Golf"
              className="h-full w-full object-contain"
            />
          </div>

          <h2 className="text-[32px] leading-[1.1] font-medium tracking-[-0.6px] text-black [font-family:var(--font-space-grotesk)] sm:text-[40px] md:text-[48px] md:tracking-[-0.96px]">
            Golf Tracking, <span className="text-[#44e276]">Simplified.</span>
          </h2>

          <p className="text-[16px] text-[#2d2d2d] [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Join the waitlist. The first 50 people who sign up for beta
            testing will be eligible for premium access for life*
          </p>

          <WaitlistForm theme="light" />
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-[577px] flex-col items-center gap-3 pb-10 text-center">
          <p className="text-[13px] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[14px]">
            *Taking part in beta testing will mean giving sufficient feedback
            based on your experience with using the app in a live setting.
            This will qualify for the &lsquo;free for life&rsquo; premium
            access
          </p>
          <p className="text-[14px] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[15px]">
            &copy; Dink&rsquo;it Golf 2026 | All rights reserved
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

      {/* Breaks out to the full viewport width — bleeds past the card's
          own edges, not just its padding, per Figma. */}
      <div className="absolute bottom-0 left-1/2 right-1/2 -mx-[50vw] h-[120px] w-screen overflow-hidden sm:h-[150px] md:h-[190px]">
        <Image
          src="/images/footer-tree-bleed.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 64%" }}
        />
      </div>
    </div>
  );
}
