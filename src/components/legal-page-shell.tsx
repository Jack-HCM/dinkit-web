export function LegalPageShell({
  badge,
  heading,
  intro,
  children,
}: {
  badge: string;
  heading: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-start px-8 pt-16 pb-16 sm:px-14 sm:pt-20 sm:pb-20 md:px-20">
      <div className="flex w-full max-w-[760px] flex-col items-start gap-4 text-left">
        <span className="inline-block rounded-[24px] border border-[#44e276] px-[10px] py-[4px] text-[14px] font-bold text-black [font-family:var(--font-space-grotesk)] sm:text-[16px]">
          {badge}
        </span>
        <h1 className="text-[32px] font-bold leading-[1.15] text-black [font-family:var(--font-space-grotesk)] sm:text-[42px]">
          {heading}
        </h1>
        <p className="text-[16px] leading-[1.5] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[18px]">
          {intro}
        </p>
      </div>

      <div className="mt-10 flex w-full max-w-[760px] flex-col gap-8 sm:mt-12">
        {children}
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[19px] font-medium text-black [font-family:var(--font-space-grotesk)] sm:text-[21px]">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-[1.6] text-[#4a4a4a] [font-family:var(--font-42dot-sans)] sm:text-[16px]">
        {children}
      </div>
    </section>
  );
}
