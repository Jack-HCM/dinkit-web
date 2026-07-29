import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#f6f4ef] text-[#1d241f]">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f6b48]">
          Coming soon
        </span>

        <h1 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#1d241f] sm:text-5xl md:text-6xl [font-family:var(--font-fraunces)]">
          Golf, tracked properly.
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-[#5a6058]">
          Per-shot GPS, Strokes Gained, and AI coaching &mdash; built from the
          round you already play, not extra hardware. Dink&rsquo;It is
          launching soon. Get on the list for early access.
        </p>

        <div className="mt-10 w-full max-w-md">
          <WaitlistForm />
        </div>
      </main>

      <footer className="border-t border-black/5 px-6 py-6 text-center text-xs text-[#8a9086]">
        &copy; {new Date().getFullYear()} Dink&rsquo;It. All rights reserved.
      </footer>
    </div>
  );
}
