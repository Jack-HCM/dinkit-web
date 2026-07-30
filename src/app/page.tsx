import { WaitlistForm } from "@/components/waitlist-form";
import { GolfIllustration } from "@/components/golf-illustration";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#347e55]">
      <main className="flex flex-1 flex-col items-center gap-10 pt-10 sm:gap-11 sm:pt-14">
        <div className="flex w-full flex-col items-center gap-8 px-6 text-center sm:gap-[22px]">
          <div className="h-[52px] w-[150px] sm:h-[70px] sm:w-[200px] md:h-[82px] md:w-[236px]">
            <img
              src="/images/dinkit-logo.svg"
              alt="Dink'it Golf"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]">
            COMING SOON
          </span>

          <h1 className="max-w-[925px] text-[38px] leading-[1.05] font-medium tracking-[-0.6px] text-white [font-family:var(--font-space-grotesk)] sm:text-[52px] sm:tracking-[-0.9px] md:text-[66px] md:leading-[68px] md:tracking-[-1.32px]">
            Golf Tracking, <span className="text-[#87ffad]">Simplified.</span>
          </h1>

          <p className="max-w-[503px] text-[16px] text-white [font-family:var(--font-42dot-sans)] sm:text-[18px]">
            Join the waitlist. The first 50 people who sign up for beta
            testing will be eligible for premium access for life*
          </p>

          <WaitlistForm />
        </div>

        <GolfIllustration />

        <div className="flex w-full max-w-[577px] flex-col items-center gap-6 px-6 pb-12 text-center sm:gap-8 sm:pb-16">
          <p className="text-[13px] text-white [font-family:var(--font-42dot-sans)] sm:text-[14px]">
            *Taking part in beta testing will mean giving sufficient feedback
            based on your experience with using the app in a live setting.
            This will qualify for the &lsquo;free for life&rsquo; premium
            access
          </p>
          <p className="text-[14px] text-[#87ffad] [font-family:var(--font-42dot-sans)] sm:text-[15px]">
            Website Design &amp; Development by Hive Creative Media
          </p>
        </div>
      </main>
    </div>
  );
}
