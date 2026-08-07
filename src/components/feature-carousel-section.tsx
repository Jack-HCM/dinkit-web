"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Scene + phone imagery is shared across all 4 slides for now — real,
// slide-specific assets will be supplied later and swapped in per slide.
const SLIDES = [
  {
    pill: "Free Plan",
    heading: "Easy GPS tracking, straight from your phone",
    body: "Stand by your ball and tap. Our app uses your phone's GPS to log every shot. No expensive hardware attachments required.",
    phone: "/images/hero-card-tracking.png",
  },
  {
    pill: "Free Plan",
    heading: "Play and compare with friends.",
    body: "Connect with your regular group easily. Compare your stats in one central place. Keep the friendly competition going between rounds.",
    phone: "/images/hero-card-tracking.png",
  },
  {
    pill: "No Plan Needed",
    heading: "Find your next course.",
    body: "Discover highly rated courses right near you. Get accurate local recommendations instantly. Explore new fairways and plan your next weekend round.",
    phone: "/images/hero-card-tracking.png",
  },
  {
    pill: "Premium Plan",
    heading: "Unlock your full data.",
    body: "Upgrade to access deeper performance metrics. Review detailed tendencies to lower your score. Get serious tools to fast-track your improvement.",
    phone: "/images/hero-card-tracking.png",
  },
];

const ROTATE_MS = 5000;

// Unlike the hero, only the phone moves here — the scene/clouds stay put.
const PARALLAX_PHONE_SPEED = 0.08;

export function FeatureCarouselSection() {
  const [index, setIndex] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const phoneLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);

      if (phoneLayerRef.current) {
        phoneLayerRef.current.style.transform = `translateY(${offset * PARALLAX_PHONE_SPEED}px)`;
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

  const pill = (
    <div
      key={`pill-${index}`}
      className="animate-hero-fade inline-block self-start rounded-[24px] border border-[#44e276] px-[10px] py-[4px] text-[14px] font-bold whitespace-nowrap text-black [font-family:var(--font-space-grotesk)] sm:text-[16px]"
    >
      {active.pill}
    </div>
  );

  const heading = (
    <h3
      key={`heading-${index}`}
      className="animate-hero-fade text-[28px] leading-[1.2] font-bold text-black [font-family:var(--font-space-grotesk)] sm:text-[34px] md:text-[42px] md:leading-[1.15]"
    >
      {active.heading}
    </h3>
  );

  const body = (
    <p
      key={`body-${index}`}
      className="animate-hero-fade text-[16px] leading-relaxed text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[18px] md:text-[20px]"
    >
      {active.body}
    </p>
  );

  const goPrev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  const arrowButton = (direction: "prev" | "next") => (
    <button
      type="button"
      onClick={direction === "prev" ? goPrev : goNext}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#347e55] text-[#347e55] transition-colors hover:bg-[#347e55]/10"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className={direction === "next" ? "rotate-180" : ""}
      >
        <path
          d="M8.5 2.5L3.5 7L8.5 11.5M3.5 7H12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  const dots = SLIDES.length > 1 && (
    <div className="flex items-center gap-[7px]">
      {SLIDES.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Show slide ${i + 1}`}
          className={`shrink-0 rounded-full bg-[#87ffad] transition-all duration-500 ${
            i === index ? "h-[17px] w-[17px] opacity-100" : "h-[10px] w-[10px] opacity-30"
          }`}
        />
      ))}
    </div>
  );

  const controls = SLIDES.length > 1 && (
    <div className="flex items-center gap-6">
      {arrowButton("prev")}
      {dots}
      {arrowButton("next")}
    </div>
  );

  return (
    <section className="flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-10 sm:gap-14 sm:py-14 md:gap-20 md:py-20">
      <h2 className="text-center text-[32px] leading-[1.1] font-medium tracking-[-0.6px] text-white [font-family:var(--font-space-grotesk)] sm:text-[40px] md:text-[48px] md:tracking-[-0.96px]">
        Golf Tracking, <span className="text-[#87ffad]">Simplified.</span>
      </h2>

      {/* Mobile: stacked card, no scene image — kept simple pending a
          dedicated mobile Figma pass (same approach as the hero). */}
      <div className="flex w-full flex-col items-center gap-8 rounded-[24px] bg-white px-6 py-12 text-center md:hidden">
        {pill}
        <div className="relative aspect-[306/662] w-[170px] rotate-[3deg]">
          <Image
            src={active.phone}
            alt=""
            fill
            sizes="170px"
            className="rounded-[24px] object-contain drop-shadow-[0px_16px_32px_rgba(0,0,0,0.25)]"
          />
        </div>
        {heading}
        {body}
        {controls}
      </div>

      {/* Desktop: box split 50/50, image half built the same way as the
          hero scene — a plain sky-colour panel sits behind a transparent-sky
          image, so the box fill and the bleeding clouds are pixel-identical.
          The bleed image is a sibling of (not clipped by) the right panel,
          so clouds can rise above the box's top edge. */}
      <div
        ref={sceneRef}
        className="relative hidden w-full overflow-visible md:block md:aspect-[1280/529]"
      >
        <div className="absolute inset-0 rounded-[24px] bg-white" />

        {/* Flat colour fill for the image half — just a solid panel, no
            children, so it needs no clipping of its own. */}
        <div className="absolute inset-y-0 left-1/2 right-0 rounded-r-[24px] bg-[#a7d8ef]" />

        {/* In-box scene: flush to the panel's own bounds, matching Figma's
            main image exactly (rounded only on the right, like the panel
            behind it). The image is shifted up inside an oversized inner
            box so the visible window starts below the source's cloud
            band — otherwise "cover" shows the full source height here
            (this panel is shorter than it is wide), putting a raw,
            hard-edged cloud fragment right at the panel's own top. */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 right-0 overflow-hidden rounded-r-[24px]">
          <div className="absolute inset-x-0 top-[-40%] h-[140%]">
            <Image
              src="/images/hero-scene-bleed.png"
              alt=""
              fill
              sizes="640px"
              className="object-cover"
              style={{ objectPosition: "58% 0%" }}
            />
          </div>
        </div>

        {/* Cloud bleed: a separate, independently-cropped window onto just
            the sky band of the same source image, sized so the clouds sit
            fully within it (with margin) rather than being sliced by the
            box's top edge. Floats above the box and overspills left/right,
            unclipped — its own edges land in transparent sky, so no seam
            or hard line shows against the green background. */}
        <div className="pointer-events-none absolute top-[-24%] right-[-6%] bottom-[86%] left-[20%] z-10 overflow-hidden">
          <Image
            src="/images/hero-scene-bleed.png"
            alt=""
            fill
            sizes="900px"
            className="object-cover"
            style={{ objectPosition: "56% 4%" }}
          />
        </div>

        <div className="absolute inset-y-0 left-0 flex w-1/2 max-w-[480px] flex-col justify-center gap-6 py-10 pr-16 pl-10 lg:pr-20 lg:pl-16">
          {pill}
          {heading}
          {body}
          {controls}
        </div>

        <div
          ref={phoneLayerRef}
          className="pointer-events-none absolute top-1/2 left-1/2 h-[92%] w-[20%] -translate-x-1/2 -translate-y-1/2 rotate-[4deg]"
        >
          <Image
            src={active.phone}
            alt=""
            fill
            sizes="220px"
            className="object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
