"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const SLIDES = [
  {
    pill: "GPS Tracking",
    heading: "GPS tracking. Zero hardware.",
    body: "Track your shots and log your rounds in detail. No expensive attachments needed",
    image: "/images/hero-card-tracking.png",
  },
  {
    pill: "Performance",
    heading: "Track stats like a pro.",
    body: "We simplify advanced performance data. See your driving, approach, and putting broken down cleanly. Spot exactly where to improve.",
    image: "/images/hero-card-stats.png",
  },
  {
    pill: "Shot Patterns",
    heading: "See your true patterns.",
    body: "Stop guessing your natural miss. We map your historical shots automatically. Make smarter aiming decisions on every box.",
    image: "/images/hero-card-scorecards.png",
  },
  {
    pill: "AI Coaching",
    heading: "Coaching and Insights",
    body: "Our AI reads your raw numbers for you. Get straightforward summaries after your rounds. Focus your practice where it matters.",
    image: "/images/hero-card-stats.png",
  },
];

const ROTATE_MS = 5000;

function slotStyle(slot: number): CSSProperties {
  switch (slot) {
    case 0:
      return {
        transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
        zIndex: 40,
        opacity: 1,
      };
    case 1:
      return {
        transform: "translate(-76%, -46%) rotate(-8deg) scale(0.88)",
        zIndex: 30,
        opacity: 1,
      };
    case 2:
      return {
        transform: "translate(-24%, -46%) rotate(8deg) scale(0.88)",
        zIndex: 20,
        opacity: 1,
      };
    default:
      return {
        transform: "translate(-50%, -42%) rotate(0deg) scale(0.78)",
        zIndex: 10,
        opacity: 0,
      };
  }
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [index]);

  const active = SLIDES[index];

  return (
    <div className="relative z-10 flex w-full flex-col items-center gap-10 px-6 py-12 sm:px-10 sm:py-16">
      <div className="grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-[1fr_400px_1fr] md:gap-6">
        <div className="order-1 flex flex-col items-center text-center md:order-1 md:items-end md:text-right">
          <div
            key={`pill-${index}`}
            className="animate-hero-fade mb-[22px] rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold whitespace-nowrap text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]"
          >
            {active.pill}
          </div>
          <h3
            key={`heading-${index}`}
            className="animate-hero-fade max-w-[320px] text-[32px] leading-[1.1] font-bold text-white [font-family:var(--font-space-grotesk)] [text-shadow:0px_6px_32px_rgba(0,0,0,0.8)] sm:text-[40px] md:text-[48px] md:leading-[52px]"
          >
            {active.heading}
          </h3>
        </div>

        <div className="order-2 md:order-2">
          <div className="relative mx-auto aspect-[610/1320] w-[190px] sm:w-[225px]">
            {SLIDES.map((slide, i) => {
              const slot = (i - index + SLIDES.length) % SLIDES.length;
              return (
                <div
                  key={slide.image + i}
                  className="absolute top-1/2 left-1/2 h-full w-full transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={slotStyle(slot)}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    sizes="225px"
                    className="rounded-[24px] object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.45)]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="order-3 flex justify-center text-center md:order-3 md:justify-start md:text-left">
          <p
            key={`body-${index}`}
            className="animate-hero-fade max-w-[320px] text-[16px] leading-relaxed font-medium text-white [font-family:var(--font-42dot-sans)] [text-shadow:0px_0px_10px_black] sm:text-[18px] md:text-[25px]"
          >
            {active.body}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-[8px] rounded-full transition-all duration-500 ${
              i === index
                ? "w-[28px] bg-[#87ffad]"
                : "w-[8px] bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
