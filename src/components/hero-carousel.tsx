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

// Percentages measured directly against the Figma hero box (1280x691).
function slotStyle(slot: number): CSSProperties {
  switch (slot) {
    case 0:
      return {
        left: "50%",
        top: "37.3%",
        width: "23.9%",
        height: "95.8%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        zIndex: 40,
        opacity: 1,
      };
    case 1:
      return {
        left: "41%",
        top: "48.5%",
        width: "21%",
        height: "84.1%",
        transform: "translate(-50%, -50%) rotate(-8deg)",
        zIndex: 30,
        opacity: 1,
      };
    case 2:
      return {
        left: "65.4%",
        top: "43.7%",
        width: "21%",
        height: "84.2%",
        transform: "translate(-50%, -50%) rotate(8deg)",
        zIndex: 20,
        opacity: 1,
      };
    default:
      return {
        left: "50%",
        top: "37.3%",
        width: "18%",
        height: "72%",
        transform: "translate(-50%, -50%) rotate(0deg)",
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

  const pill = (
    <div
      key={`pill-${index}`}
      className="animate-hero-fade inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[14px] font-bold whitespace-nowrap text-[#87ffad] [font-family:var(--font-space-grotesk)] sm:text-[16px]"
    >
      {active.pill}
    </div>
  );

  const heading = (
    <h3
      key={`heading-${index}`}
      className="animate-hero-fade text-[32px] leading-[1.1] font-bold text-white [font-family:var(--font-space-grotesk)] [text-shadow:0px_6px_32px_rgba(0,0,0,0.8)] sm:text-[40px] md:text-[38px] md:leading-[1.15]"
    >
      {active.heading}
    </h3>
  );

  const body = (
    <p
      key={`body-${index}`}
      className="animate-hero-fade text-[16px] leading-relaxed font-medium text-white [font-family:var(--font-42dot-sans)] [text-shadow:0px_0px_10px_black] sm:text-[18px] md:text-[17px]"
    >
      {active.body}
    </p>
  );

  const dots = (
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
  );

  const cardStack = (
    <>
      {SLIDES.map((slide, i) => {
        const slot = (i - index + SLIDES.length) % SLIDES.length;
        return (
          <div
            key={slide.image + i}
            className="absolute transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={slotStyle(slot)}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="310px"
              className="rounded-[24px] object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        );
      })}
    </>
  );

  return (
    <>
      {/* Mobile: simple stacked layout, precise Figma fan reserved for desktop */}
      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-6 py-10 text-center md:hidden">
        {pill}
        {heading}
        <div className="relative aspect-[306/662] w-[190px]">
          <Image
            src={active.image}
            alt=""
            fill
            sizes="190px"
            className="rounded-[24px] object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.45)]"
          />
        </div>
        {body}
        {dots}
      </div>

      {/* Desktop: absolutely positioned to match Figma's 1280x691 box exactly */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <div className="absolute" style={{ left: "2.6%", top: "25.3%", width: "24%" }}>
          {pill}
          <div className="mt-4">{heading}</div>
        </div>

        <div className="absolute" style={{ left: "76.6%", top: "29.5%", width: "18.7%" }}>
          {body}
        </div>

        {cardStack}

        <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2">{dots}</div>
      </div>
    </>
  );
}
