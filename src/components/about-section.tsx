import Image from "next/image";
import { FooterContent } from "@/components/site-footer";
import type { HeadingWithHighlight } from "@/sanity/lib/types";

export function AboutSection({
  mobileHeading,
  desktopHeading,
  subtext,
  disclaimer,
  copyright,
  children,
  extraTopClearance,
}: {
  mobileHeading: string;
  desktopHeading: HeadingWithHighlight;
  subtext: string;
  disclaimer: string;
  copyright: string;
  children?: React.ReactNode;
  // Reserves extra green space above the card for children (e.g.
  // AboutTeaser) that bleed a decorative image up past the card's own top
  // edge — the normal inter-section gap isn't enough room for that.
  extraTopClearance?: boolean;
}) {
  return (
    <section
      id="about"
      className={`relative flex w-full max-w-[1360px] scroll-mt-[110px] flex-col items-center px-6 ${
        extraTopClearance ? "pt-[95px] sm:pt-[200px]" : ""
      }`}
    >
      <div className="relative w-full">
        <div className="flex w-full flex-col rounded-t-[24px] bg-white">
          {children}
          <FooterContent
            mobileHeading={mobileHeading}
            desktopHeading={desktopHeading}
            subtext={subtext}
            disclaimer={disclaimer}
            copyright={copyright}
          />
        </div>

        {/* Breaks out to the full viewport width — bleeds past the card's
            own edges, not just its padding, per Figma. Width is capped to the
            source image's native resolution (centered within the breakout) so
            object-cover's scale factor stays bounded — otherwise, at very wide
            viewports, the crop window shrinks and drifts down into the treeline. */}
        <div className="absolute bottom-0 left-1/2 right-1/2 -mx-[50vw] h-[120px] w-screen overflow-hidden sm:h-[150px] md:h-[190px] lg:h-[220px] xl:h-[260px]">
          <div className="relative mx-auto h-full max-w-[2000px]">
            <Image
              src="/images/footer-tree-bleed.png"
              alt=""
              fill
              sizes="2000px"
              className="object-cover"
              style={{ objectPosition: "50% 52%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
