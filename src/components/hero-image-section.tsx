"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

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

// Mobile slider: redesigned as a traditional horizontal peek-carousel, not
// the desktop's 3D fan — phones sit upright (no rotation), spaced out
// left/center/right, with the prev/next phones cropped off at the scene's
// edges. Percentages measured against Figma's mobile scene group (431x486,
// which itself bleeds slightly off both edges of the phone frame).
function mobileSlotStyle(slot: number): CSSProperties {
  switch (slot) {
    case 0:
      return {
        left: "32.48%",
        top: "0%",
        width: "35.73%",
        height: "68.31%",
        zIndex: 30,
        opacity: 1,
      };
    case 1:
      return {
        left: "75.64%",
        top: "20.16%",
        width: "24.36%",
        height: "47.12%",
        zIndex: 20,
        opacity: 1,
      };
    case 2:
      return {
        left: "0%",
        top: "20.99%",
        width: "24.59%",
        height: "46.91%",
        zIndex: 20,
        opacity: 1,
      };
    default:
      return {
        left: "32.48%",
        top: "0%",
        width: "35.73%",
        height: "68.31%",
        zIndex: 10,
        opacity: 0,
      };
  }
}

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
    // Slot 1 is the "up next" card (becomes slot 0 on the next advance), so
    // it sits on the right at +8deg — when it becomes active its rotation
    // sweeps down to 0deg, i.e. anti-clockwise. Slot 2 (two-away, sits on
    // the left) is the mirror.
    case 1:
      return {
        left: "63.5%",
        top: "50.5%",
        width: "18.5%",
        height: "74.1%",
        transform: "translate(-50%, -50%) rotate(8deg)",
        zIndex: 30,
        opacity: 1,
      };
    case 2:
      return {
        left: "42.1%",
        top: "54.7%",
        width: "18.5%",
        height: "74%",
        transform: "translate(-50%, -50%) rotate(-8deg)",
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

// Depth multipliers for the scroll parallax: background travels further
// per pixel scrolled than the phone stack, so the phones read as closer.
const PARALLAX_BG_SPEED = 0.12;
const PARALLAX_PHONE_SPEED = 0.04;

export function HeroImageSection() {
  const [index, setIndex] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const phonesLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [index]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);

      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `translateY(${offset * PARALLAX_BG_SPEED}px)`;
      }
      if (phonesLayerRef.current) {
        phonesLayerRef.current.style.transform = `translateY(${offset * PARALLAX_PHONE_SPEED}px)`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = SLIDES[index];

  const goPrev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  const arrowButton = (direction: "prev" | "next") => (
    <button
      type="button"
      onClick={direction === "prev" ? goPrev : goNext}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-[#87ffad] bg-[#212121] transition-opacity hover:opacity-80"
    >
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        className={direction === "prev" ? "rotate-180" : ""}
      >
        <path
          d="M1 1L7 6L1 11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  const pill = (
    <div
      key={`pill-${index}`}
      className="animate-hero-fade inline-block rounded-[24px] border border-[#87ffad] bg-[#212121] px-[10px] py-[4px] text-[16px] font-bold whitespace-nowrap text-[#87ffad] [font-family:var(--font-space-grotesk)]"
    >
      {active.pill}
    </div>
  );

  const heading = (
    <h3
      key={`heading-${index}`}
      className="animate-hero-fade text-[48px] leading-[1.083] font-bold text-white [font-family:var(--font-space-grotesk)] [text-shadow:0px_6px_32px_rgba(0,0,0,0.8)] sm:text-[40px] sm:leading-[1.1] md:text-[38px] md:leading-[1.15]"
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

  const pillRow = (
    <div className="flex items-center gap-[11px]">
      {arrowButton("prev")}
      {pill}
      {arrowButton("next")}
    </div>
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

  const mobileCardStack = (
    <>
      {SLIDES.map((slide, i) => {
        const slot = (i - index + SLIDES.length) % SLIDES.length;
        return (
          <div
            key={`m-${slide.image}-${i}`}
            className="absolute transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={mobileSlotStyle(slot)}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="160px"
              className="rounded-[16px] object-contain drop-shadow-[0px_14px_28px_rgba(0,0,0,0.4)]"
            />
          </div>
        );
      })}
    </>
  );

  return (
    <div className="relative w-full">
      {/* Mobile: traditional horizontal peek-slider, own geometry — the
          claymation background only covers the top ~2/3 (ending under the
          middle phone) and fades into the section's green via the same
          gradient technique as desktop, with the body copy sitting on the
          flat green below rather than overlaid on the image. */}
      <div className="flex w-full flex-col items-center gap-[22px] px-4 pt-10 pb-16 text-center md:hidden">
        {pillRow}
        {heading}
        <div className="relative -mx-4 mt-[51px] w-full overflow-hidden" style={{ height: "123.66vw" }}>
          <div
            className="absolute left-1/2 h-full -translate-x-1/2"
            style={{ width: "109.68vw" }}
          >
            <div
              className="pointer-events-none absolute overflow-hidden"
              style={{ left: "3.71%", top: "6.79%", width: "92.81%", height: "66.67%" }}
            >
              <div
                className="absolute"
                style={{ left: "-27.37%", top: "2.47%", width: "154.82%", height: "106.68%" }}
              >
                <Image
                  src="/images/hero-scene-box.png"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              className="pointer-events-none absolute bg-gradient-to-t from-[#347e55] from-[12.698%] to-[rgba(52,126,85,0)]"
              style={{ left: "4.87%", top: "40.95%", width: "91.18%", height: "35.19%" }}
            />

            <div className="pointer-events-none absolute inset-0">
              {mobileCardStack}
            </div>

            <div
              className="pointer-events-auto absolute left-1/2 z-50 -translate-x-1/2"
              style={{ top: "73.46%" }}
            >
              {dots}
            </div>
            <div className="absolute z-50" style={{ left: "13.92%", width: "74.01%", top: "84.77%" }}>
              {body}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: full-bleed scene, edge to edge. The sky card is a plain
          rounded panel behind the (transparent-sky) scene image, so the box
          background and the bleeding clouds are pixel-identical content —
          nothing to misalign. Phone cards/text sit above everything as
          siblings of the sky card, so they're never clipped by its mask. */}
      <div
        ref={sceneRef}
        className="relative hidden aspect-[1376/768] w-full md:block"
      >
        <div ref={bgLayerRef} className="absolute inset-0">
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#347e55] to-transparent" />
        </div>

        <div className="absolute" style={{ left: "8.3%", top: "34.3%", width: "21%" }}>
          {pillRow}
          <div className="mt-4">{heading}</div>
        </div>

        <div className="absolute" style={{ left: "76.5%", top: "38%", width: "16%" }}>
          {body}
        </div>

        <div ref={phonesLayerRef} className="pointer-events-none absolute inset-0">
          {cardStack}
        </div>

        <div className="absolute bottom-[3.5%] left-1/2 -translate-x-1/2">{dots}</div>
      </div>
    </div>
  );
}
