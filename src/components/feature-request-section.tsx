import Image from "next/image";
import { FeatureRequestForm } from "@/components/feature-request-form";

export function FeatureRequestSection() {
  return (
    <section
      id="request-feature"
      className="relative flex w-full max-w-[1280px] scroll-mt-[110px] flex-col items-center px-6 pb-[120px] sm:pb-[160px] md:pb-[200px]"
    >
      <div className="relative w-full">
        <div className="flex flex-col gap-10 rounded-[24px] bg-white px-[26px] py-[40px] sm:px-[56px] sm:py-[56px] lg:flex-row lg:gap-16">
          <div className="flex flex-col justify-center gap-5 lg:w-[380px] lg:shrink-0">
            <span className="inline-block w-fit rounded-[24px] border border-[#44e276] px-[10px] py-[4px] text-[16px] font-bold text-black [font-family:var(--font-space-grotesk)]">
              Request Feature
            </span>

            <h2 className="text-[36px] leading-[1.15] font-bold tracking-[-0.6px] text-black [font-family:var(--font-space-grotesk)] sm:text-[42px]">
              Really want to see something in the app?
            </h2>

            <p className="max-w-[420px] text-[18px] leading-[1.5] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[20px]">
              Let us know what you&rsquo;d like to see in the app, or if you
              have anything you&rsquo;d like to flag.
            </p>
          </div>

          <div className="flex flex-1 items-center">
            <FeatureRequestForm />
          </div>
        </div>

        <div className="pointer-events-none absolute top-full left-1/2 right-1/2 -mx-[50vw] -mt-[24px] h-[200px] w-screen overflow-hidden rounded-t-[24px] sm:-mt-[32px] sm:h-[280px] md:-mt-[40px] md:h-[360px]">
          <Image
            src="/images/golf-scene-transparent.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 60%" }}
          />
        </div>
      </div>
    </section>
  );
}
