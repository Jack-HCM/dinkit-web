import Image from "next/image";
import type { AboutStep } from "@/sanity/lib/types";

function StepNumber({ index }: { index: number }) {
  return (
    <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#87ffad]/40 text-[16px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:h-[52px] sm:w-[52px] sm:text-[18px]">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function Step({ step, index }: { step: AboutStep; index: number }) {
  return (
    <div className="flex w-full flex-col gap-6 border-t border-white/15 pt-10 first:border-t-0 first:pt-0 sm:flex-row sm:gap-10">
      <StepNumber index={index} />
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="max-w-[540px] text-[26px] leading-[1.15] font-medium tracking-[-0.52px] text-white [font-family:var(--font-space-grotesk)] sm:text-[32px]">
            {step.title}
          </h3>
          <p className="max-w-[480px] text-[16px] leading-[1.55] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[17px]">
            {step.body}
          </p>
        </div>

        {step.image && (
          <div className="relative h-[200px] w-full overflow-hidden rounded-[16px] sm:h-[180px] sm:w-[280px] sm:shrink-0">
            <Image src={step.image} alt="" fill sizes="280px" className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}

export function AboutStepsList({ steps }: { steps: AboutStep[] }) {
  return (
    <section className="flex w-full max-w-[1220px] flex-col gap-10 px-6 sm:gap-14">
      {steps.map((step, index) => (
        <Step key={step.title} step={step} index={index} />
      ))}
    </section>
  );
}
