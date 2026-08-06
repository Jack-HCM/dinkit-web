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

// The rounded "sky" card sits inset from the full-bleed scene image.
// Text/card percentages below are relative to this OUTER scene container
// (not the sky card) so the phone stack can rise above the card's edge
// without being clipped by its rounded-corner mask.
const CARD_INSET = { left: 6, right: 6, top: 12, bottom: 0 };

const SKY_GRADIENT =
  "linear-gradient(to bottom, #a7d8ef 0%, #cfe9f5 55%, #eef8fb 100%)";

// Percentages measured against the full-bleed scene image (1376x768).
function slotStyle(slot: number): CSSProperties {
  switch (slot) {
    case 0:
      return {
        left: "50%",
        top: "44.8%",
        width: "21%",
        height: "84.3%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        zIndex: 40,
        opacity: 1,
      };
    case 1:
      return {
        left: "42.1%",
        top: "54.7%",
        width: "18.5%",
        height: "74%",
        transform: "translate(-50%, -50%) rotate(-8deg)",
        zIndex: 30,
        opacity: 1,
      };
    case 2:
      return {
        left: "63.5%",
        top: "50.5%",
        width: "18.5%",
        height: "74.1%",
        transform: "translate(-50%, -50%) rotate(8deg)",
        zIndex: 20,
        opacity: 1,
      };
    default:
      return {
        left: "50%",
        top: "44.8%",
        width: "15.8%",
        height: "63.4%",
        transform: "translate(-50%, -50%) rotate(0deg)",
        zIndex: 10,
        opacity: 0,
      };
  }
}

export function HeroImageSection() {
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
    <div className="relative w-full">
      {/* Mobile: simple stacked layout, precise Figma fan reserved for desktop */}
      <div className="relative w-full overflow-hidden md:hidden">
        <Image
          src="/images/hero-scene-box.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex w-full flex-col items-center gap-8 px-6 py-10 text-center">
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
      </div>

      {/* Desktop: full-bleed scene, edge to edge. The sky card is a plain
          rounded panel behind the (transparent-sky) scene image, so the box
          background and the bleeding clouds are pixel-identical content —
          nothing to misalign. Phone cards/text sit above everything as
          siblings of the sky card, so they're never clipped by its mask. */}
      <div className="relative hidden aspect-[1376/768] w-full md:block">
        <div
          className="pointer-events-none absolute rounded-t-[32px]"
          style={{
            left: `${CARD_INSET.left}%`,
            right: `${CARD_INSET.right}%`,
            top: `${CARD_INSET.top}%`,
            bottom: `${CARD_INSET.bottom}%`,
            background: SKY_GRADIENT,
          }}
        />

        <Image
          src="/images/hero-scene-bleed.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover"
        />

        {/* Fades the box's top edge into the brand colour, strictly clipped
            to the sky panel's own bounds so nothing bleeds into the page
            background outside the box. */}
        <div
          className="pointer-events-none absolute rounded-t-[32px]"
          style={{
            left: `${CARD_INSET.left}%`,
            right: `${CARD_INSET.right}%`,
            top: `${CARD_INSET.top}%`,
            bottom: `${CARD_INSET.bottom}%`,
            background:
              "linear-gradient(to bottom, #347e55 0%, rgba(52,126,85,0) 25%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#347e55] to-transparent" />

        <div className="absolute" style={{ left: "8.3%", top: "34.3%", width: "21%" }}>
          {pill}
          <div className="mt-4">{heading}</div>
        </div>

        <div className="absolute" style={{ left: "76.5%", top: "38%", width: "16%" }}>
          {body}
        </div>

        {cardStack}

        <div className="absolute bottom-[3.5%] left-1/2 -translate-x-1/2">{dots}</div>
      </div>
    </div>
  );
}
