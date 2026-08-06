"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Only one real slide is available so far — the remaining 3 will be
// supplied later with their own copy, scene image, and phone mockup.
const SLIDES = [
  {
    pill: "Free Plan",
    heading: "Easy GPS tracking, straight from your phone",
    body: "Stand by your ball and tap. Our app uses your phone's GPS to log every shot. No expensive hardware attachments required.",
    phone: "/images/hero-card-tracking.png",
  },
];

const ROTATE_MS = 5000;

// Same technique as the hero: background travels further per pixel
// scrolled than the phone, so the phone reads as closer.
const PARALLAX_BG_SPEED = 0.12;
const PARALLAX_PHONE_SPEED = 0.04;

export function FeatureCarouselSection() {
  const [index, setIndex] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
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

      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `translateY(${offset * PARALLAX_BG_SPEED}px)`;
      }
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

  const dots = SLIDES.length > 1 && (
    <div className="flex items-center gap-3">
      {SLIDES.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Show slide ${i + 1}`}
          className={`h-[8px] rounded-full transition-all duration-500 ${
            i === index
              ? "w-[28px] bg-[#44e276]"
              : "w-[8px] bg-black/15 hover:bg-black/25"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="flex w-full max-w-[1280px] flex-col items-center gap-10 px-6 sm:gap-12 md:gap-16">
      <h2 className="text-center text-[32px] leading-[1.1] font-medium tracking-[-0.6px] text-white [font-family:var(--font-space-grotesk)] sm:text-[40px] md:text-[48px] md:tracking-[-0.96px]">
        Golf Tracking, <span className="text-[#87ffad]">Simplified.</span>
      </h2>

      {/* Mobile: stacked card, no scene image — kept simple pending a
          dedicated mobile Figma pass (same approach as the hero). */}
      <div className="flex w-full flex-col items-center gap-6 rounded-[24px] bg-white px-6 py-10 text-center md:hidden">
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
        {dots}
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

        {/* Full scene image, unclipped and taller than the panel above so
            the clouds painted near its top can rise above the box edge
            into the green background — same technique as the hero. No
            rounding here: the image's sky is transparent, so the panel's
            own rounded corners show through cleanly underneath it. */}
        <div
          ref={bgLayerRef}
          className="pointer-events-none absolute top-[-9%] right-0 bottom-0 left-1/2"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 100%)",
          }}
        >
          <Image
            src="/images/hero-scene-bleed.png"
            alt=""
            fill
            sizes="640px"
            className="object-cover"
            style={{ objectPosition: "58% 0%" }}
          />
        </div>

        <div className="absolute inset-y-0 left-0 flex w-1/2 flex-col justify-center gap-6 py-10 pr-10 pl-10 lg:pl-16">
          {pill}
          {heading}
          {body}
          {dots}
        </div>

        <div
          ref={phoneLayerRef}
          className="absolute top-1/2 left-1/2 h-[80%] w-[17%] -translate-x-1/2 -translate-y-1/2 rotate-[4deg]"
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
