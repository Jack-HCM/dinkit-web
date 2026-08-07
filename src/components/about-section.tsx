import Image from "next/image";

export function AboutSection() {
  return (
    <section className="relative flex w-full max-w-[1360px] flex-col items-center px-6">
      <div className="relative w-full">
        {/* Bleeds up out of the card — sits half on the green page bg,
            half over the white card top, per Figma. */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 aspect-[761/507] w-[55%] max-w-[500px] -translate-x-1/2 -translate-y-[64%]">
          <Image
            src="/images/about-putting-green.png"
            alt=""
            fill
            sizes="500px"
            className="object-contain"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-16 rounded-t-[24px] bg-white px-6 pt-16 pb-16 sm:px-10 sm:pt-20 md:flex-row md:items-center md:gap-10 md:px-16 md:pt-24">
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
              href="/our-story"
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
      </div>
    </section>
  );
}
