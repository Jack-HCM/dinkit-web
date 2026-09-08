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
    <div className="flex h-full w-full flex-col gap-5 rounded-[20px] border border-white/15 bg-white/[0.04] p-8 sm:p-10">
      <StepNumber index={index} />
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="max-w-[440px] text-[24px] leading-[1.15] font-medium tracking-[-0.48px] text-white [font-family:var(--font-space-grotesk)] sm:text-[28px]">
          {step.title}
        </h3>
        <p className="max-w-[440px] text-[16px] leading-[1.55] text-white/80 [font-family:var(--font-42dot-sans)] sm:text-[17px]">
          {step.body}
        </p>
      </div>

      {step.image && (
        <div className="relative h-[200px] w-full overflow-hidden rounded-[16px]">
          <Image src={step.image} alt="" fill sizes="(min-width: 768px) 570px, 100vw" className="object-cover" />
        </div>
      )}
    </div>
  );
}

export function AboutStepsList({ steps }: { steps: AboutStep[] }) {
  return (
    <section className="grid w-full max-w-[1220px] grid-cols-1 gap-6 px-6 md:grid-cols-2 md:gap-8">
      {steps.map((step, index) => (
        <Step key={step.title} step={step} index={index} />
      ))}
    </section>
  );
}
