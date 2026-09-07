import Image from "next/image";

// Rendered as AboutSection's `children` on the homepage only — sits inside
// the same continuous white card as the footer, right above FooterContent.
export function AboutTeaser() {
  return (
    <>
      {/* Bleeds across the green/white transition — sits half on the
          green page bg, half over the white card top, per Figma. The
          card above this (AboutSection's outer wrapper) is `relative`,
          so this resolves its containing block there even though it's
          nested inside the (non-positioned) white card div. Mobile:
          83.7% wide, rises 62% of its own height above the transition
          line (a smaller, flatter overlap than desktop's 58%/64%,
          since the mobile About text below sits directly under it
          rather than beside it). */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 aspect-[761/507] w-[83.7%] max-w-[760px] -translate-x-1/2 -translate-y-[62%] sm:w-[58%] sm:-translate-y-[64%]">
        <Image
          src="/images/about-putting-green.png"
          alt=""
          fill
          sizes="760px"
          className="object-contain"
        />
      </div>

      {/* Mobile: stacked, left-aligned. Tablet/desktop: side-by-side. */}
      <div className="flex w-full flex-col pt-[95px] sm:hidden">
        <div className="flex flex-col items-start px-[35px] text-left">
          <p className="text-[16px] font-medium text-[#347e55] [font-family:var(--font-space-grotesk)]">
            About Us
          </p>
          <h2 className="mt-[22px] text-[34px] leading-[1.1] font-medium text-black [font-family:var(--font-space-grotesk)]">
            Why did we build Dink&rsquo;it golf?
          </h2>
          <p className="mt-[9px] text-[18px] leading-[1.4] text-[#707070] [font-family:var(--font-42dot-sans)]">
            Read our story about what lead us to create the app.
          </p>
          <a
            href="/about"
            className="mt-[33px] inline-flex items-center rounded-[4px] bg-[#56c186] px-[16px] py-[12px] text-[18px] font-medium text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
          >
            Read our story
          </a>
        </div>

        <div className="relative mx-4 mt-[43px] mb-[69px] aspect-[361/250] overflow-hidden rounded-[20px]">
          <Image
            src="/images/about-founder-photo.png"
            alt="Two golfers with a golf bag on a course"
            fill
            sizes="360px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="hidden w-full flex-col items-center gap-16 px-6 pt-20 pb-16 sm:flex sm:px-10 md:flex-row md:items-center md:gap-10 md:px-16 md:pt-24">
        <div className="flex w-full flex-col items-start gap-5 text-left md:flex-1">
          <p className="text-[18px] font-medium text-[#347e55] [font-family:var(--font-space-grotesk)] sm:text-[21px]">
            About Us
          </p>
          <h2 className="max-w-[422px] text-[32px] leading-[1.1] font-medium text-black [font-family:var(--font-space-grotesk)] sm:text-[38px] md:text-[44px]">
            Why did we build Dink&rsquo;it golf?
          </h2>
          <p className="max-w-[349px] text-[16px] leading-[26px] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Read our story about what lead us to create the app.
          </p>
          <a
            href="/about"
            className="inline-flex h-[47px] w-fit items-center rounded-[4px] bg-[#56c186] px-[16px] text-[18px] font-medium text-white transition-colors hover:bg-[#4aae76] [font-family:var(--font-space-grotesk)]"
          >
            Read our story
          </a>
        </div>

        <div className="relative aspect-[691/478] w-full overflow-hidden rounded-[20px] md:w-[52%]">
          <Image
            src="/images/about-founder-photo.png"
            alt="Two golfers with a golf bag on a course"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
