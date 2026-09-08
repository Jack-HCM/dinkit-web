import Image from "next/image";
import type { AboutPageData } from "@/sanity/lib/types";

export function OurStorySection({ story }: { story: AboutPageData["story"] }) {
  const paragraphs = story.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <section className="w-full max-w-[1280px] overflow-hidden rounded-[24px] bg-white px-6">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center pt-16 pb-12 text-center sm:pt-20">
        <p className="text-[16px] font-medium text-[#347e55] [font-family:var(--font-space-grotesk)] sm:text-[18px]">
          {story.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[608px] text-[32px] leading-[1.15] font-medium tracking-[-0.64px] text-black [font-family:var(--font-space-grotesk)] sm:text-[40px] md:text-[46px]">
          {story.heading}
        </h2>

        <div className="relative mt-10 aspect-[691/478] w-full overflow-hidden rounded-[20px]">
          <Image
            src={story.image}
            alt="Two golfers with a golf bag on a course"
            fill
            sizes="(min-width: 768px) 691px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 flex max-w-[579px] flex-col gap-5 pb-16 sm:pb-20">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[16px] leading-[1.6] whitespace-pre-line text-[#2d2d2d] [font-family:var(--font-42dot-sans)] sm:text-[18px]"
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
