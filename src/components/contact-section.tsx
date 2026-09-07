import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <div className="flex flex-col gap-10 border-b border-[#ece7db] px-6 py-[40px] sm:px-10 sm:py-[56px] md:px-16 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex flex-col justify-center gap-5 lg:w-[380px] lg:shrink-0">
        <span className="inline-block w-fit rounded-[24px] border border-[#44e276] px-[10px] py-[4px] text-[16px] font-bold text-black [font-family:var(--font-space-grotesk)]">
          Contact Us
        </span>

        <h1 className="text-[36px] leading-[1.15] font-bold tracking-[-0.6px] text-black [font-family:var(--font-space-grotesk)] sm:text-[42px]">
          Got some feedback to share?
        </h1>

        <p className="max-w-[420px] text-[18px] leading-[1.5] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[20px]">
          Let us know what you&rsquo;d like to see in the app, or if you have
          anything you&rsquo;d like to flag.
        </p>
      </div>

      <div className="flex flex-1 items-center">
        <ContactForm />
      </div>
    </div>
  );
}
