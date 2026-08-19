"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Each slide carries its own scene: a background "box" photo cropped from a
// raw source via Figma's exact percent crop, plus one or more cloud sprites
// that bleed above the box's top edge, cropped from the same underlying
// source image (box and cloud are two differently-windowed crops of one
// photo, so their edges line up exactly as Figma composed them).
type Crop = { top: string; left: string; width: string; height: string };
type CloudSprite = {
  src: string;
  mobile: Crop;
  desktop: Crop;
  crop: Crop;
};

const SLIDES = [
  {
    pill: "Free Plan",
    heading: "Easy GPS tracking, straight from your phone",
    body: "Stand by your ball and tap. Our app uses your phone's GPS to log every shot. No expensive hardware attachments required.",
    phone: "/images/feature-phone-tracking.png",
    phoneAspect: "860 / 1861",
    sceneBox: {
      src: "/images/feature-scene-box.jpg",
      mobileCrop: { top: "-18.68%", left: "-6.43%", width: "157.14%", height: "119.26%" } as Crop,
      desktopCrop: { top: "-9.81%", left: "-6.73%", width: "164.53%", height: "110.18%" } as Crop,
    },
    clouds: [
      {
        src: "/images/feature-scene-clouds.png",
        mobile: { left: "14.99%", top: "42.87%", width: "30.01%", height: "9.5%" },
        desktop: { left: "57.85%", top: "-5.09%", width: "15.69%", height: "17.36%" },
        crop: { top: "-29.8%", left: "-75.74%", width: "543.12%", height: "655.48%" },
      },
      {
        src: "/images/feature-scene-clouds.png",
        mobile: { left: "82.41%", top: "42.57%", width: "26.11%", height: "11.4%" },
        desktop: { left: "93.11%", top: "-5.66%", width: "13.71%", height: "20.76%" },
        crop: { top: "2.86%", left: "-291.54%", width: "474.05%", height: "417.12%" },
      },
    ] as CloudSprite[],
  },
  {
    pill: "Free Plan",
    heading: "Play and compare with friends.",
    body: "Connect with your regular group easily. Compare your stats in one central place. Keep the friendly competition going between rounds.",
    phone: "/images/feature-phone-friends.png",
    phoneAspect: "860 / 1680",
    sceneBox: {
      src: "/images/feature-scene-box-friends.png",
      mobileCrop: { top: "-5.5%", left: "-6.36%", width: "124.13%", height: "110.24%" } as Crop,
      desktopCrop: { top: "-5.5%", left: "-6.36%", width: "124.13%", height: "110.24%" } as Crop,
    },
    clouds: [
      {
        src: "/images/feature-scene-clouds-friends.png",
        mobile: { left: "0.16%", top: "46.74%", width: "100.16%", height: "12.82%" },
        desktop: { left: "50.08%", top: "-5.86%", width: "50.08%", height: "25.33%" },
        crop: { top: "0%", left: "-6.18%", width: "123.64%", height: "436.57%" },
      },
    ] as CloudSprite[],
  },
  {
    pill: "No Plan Needed",
    heading: "Find your next course.",
    body: "Discover highly rated courses right near you. Get accurate local recommendations instantly. Explore new fairways and plan your next weekend round.",
    phone: "/images/feature-phone-courses.png",
    phoneAspect: "860 / 1684",
    sceneBox: {
      src: "/images/feature-scene-box-courses.png",
      mobileCrop: { top: "-7.4%", left: "-14.9%", width: "128.68%", height: "114.61%" } as Crop,
      desktopCrop: { top: "-7.4%", left: "-14.9%", width: "128.68%", height: "114.61%" } as Crop,
    },
    clouds: [
      {
        src: "/images/feature-scene-clouds-courses.png",
        mobile: { left: "0%", top: "45.97%", width: "100%", height: "13.3%" },
        desktop: { left: "50%", top: "-7.37%", width: "50%", height: "26.28%" },
        crop: { top: "-0.11%", left: "-14.9%", width: "128.68%", height: "436.18%" },
      },
    ] as CloudSprite[],
  },
  {
    pill: "Premium Plan",
    heading: "Unlock your full data.",
    body: "Upgrade to access deeper performance metrics. Review detailed tendencies to lower your score. Get serious tools to fast-track your improvement.",
    phone: "/images/feature-phone-stats.png",
    phoneAspect: "872 / 1684",
    sceneBox: {
      src: "/images/feature-scene-box-stats.png",
      mobileCrop: { top: "-9.45%", left: "-29.28%", width: "164.42%", height: "109.46%" } as Crop,
      desktopCrop: { top: "-9.45%", left: "-29.28%", width: "164.42%", height: "109.46%" } as Crop,
    },
    clouds: [
      {
        src: "/images/feature-scene-clouds-stats.png",
        mobile: { left: "-12.2%", top: "44.34%", width: "112.2%", height: "13.39%" },
        desktop: { left: "43.9%", top: "-10.59%", width: "56.1%", height: "26.47%" },
        crop: { top: "4.29%", left: "-15.22%", width: "146.54%", height: "413.62%" },
      },
    ] as CloudSprite[],
  },
];

const ROTATE_MS = 5000;

// Unlike the hero, only the phone moves here — the scene/clouds stay put.
const PARALLAX_PHONE_SPEED = 0.08;

export function FeatureCarouselSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const phoneLayerRef = useRef<HTMLDivElement>(null);

  // Depending on `index` means any manual navigation (arrows/dots) restarts
  // the interval from zero, instead of the auto-advance firing moments
  // after a manual click.
  useEffect(() => {
    if (SLIDES.length < 2 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [index, paused]);

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
      className="animate-hero-fade inline-block self-start rounded-[24px] border border-[#44e276] px-[10px] py-[4px] text-[16px] font-bold whitespace-nowrap text-black [font-family:var(--font-space-grotesk)]"
    >
      {active.pill}
    </div>
  );

  const heading = (
    <h3
      key={`heading-${index}`}
      className="animate-hero-fade text-[24px] leading-[1.4] font-bold text-black [font-family:var(--font-space-grotesk)] sm:text-[34px] sm:leading-[1.2] md:text-[42px] md:leading-[1.15]"
    >
      {active.heading}
    </h3>
  );

  const body = (
    <p
      key={`body-${index}`}
      className="animate-hero-fade text-[16px] leading-[1.4] text-[#707070] [font-family:var(--font-42dot-sans)] sm:text-[18px] sm:leading-relaxed md:text-[20px]"
    >
      {active.body}
    </p>
  );

  const goPrev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const SWIPE_THRESHOLD = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

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
    <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start sm:gap-6">
      {arrowButton("prev")}
      {dots}
      {arrowButton("next")}
    </div>
  );

  return (
    <section className="flex w-full max-w-[1280px] flex-col items-center gap-14 px-6 py-10 sm:py-14 md:gap-20 md:py-20">
      <h2 className="text-center text-[34px] leading-[1.1] font-medium tracking-[-0.68px] text-white [font-family:var(--font-space-grotesk)] sm:text-[40px] sm:tracking-[-0.6px] md:text-[48px] md:tracking-[-0.96px]">
        Golf Tracking, <span className="text-[#87ffad]">Simplified.</span>
      </h2>

      {/* Mobile: text content left-aligned at the top of a white card,
          phone + scene illustration bleeding out the bottom (matching the
          GPS-scene fan's hero-scene-box.png golfer illustration). */}
      <div
        className="relative w-full md:hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden rounded-[24px] bg-white">
          <div
            className="flex flex-col items-start gap-[18px] text-left"
            style={{ paddingTop: 39, paddingLeft: 36, paddingRight: 26 }}
          >
            {pill}
            {heading}
            {body}
            {controls}
          </div>

          <div
            className="relative mt-9 w-full"
            style={{ aspectRatio: "340 / 498" }}
          >
            <div
              className="pointer-events-none absolute left-0 w-full overflow-hidden"
              style={{ top: "49.7%", height: "50.6%" }}
            >
              {/* Same source photo the cloud sprites below are cropped
                  from, at Figma's exact crop — so the baked-in clouds at
                  its top edge line up with the bleeding sprites. */}
              <div
                key={`scene-mobile-${index}`}
                className="animate-hero-fade absolute"
                style={active.sceneBox.mobileCrop}
              >
                <Image
                  src={active.sceneBox.src}
                  alt=""
                  fill
                  sizes="400px"
                  className="object-fill"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cloud bleed, unclipped: sits in its own box exactly overlaying
            the scene box above (same aspect ratio, bottom-aligned to the
            card since the scene box is the card's last child), so Figma's
            scene-relative percentages apply directly. Same source image
            and crops as the desktop version's two sprites. Painted before
            the phone below, so the phone sits in front of (occludes) the
            cloud where they overlap, matching Figma. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{ aspectRatio: "340 / 498" }}
        >
          {active.clouds.map((cloud, i) => (
            <div
              key={`${index}-${i}`}
              className="animate-hero-fade absolute overflow-hidden"
              style={cloud.mobile}
            >
              <div className="absolute" style={cloud.crop}>
                <Image
                  src={cloud.src}
                  alt=""
                  fill
                  unoptimized
                  className="object-fill"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Phone, unclipped: same bottom-anchored box as the clouds above,
            but painted after so it sits in front of them. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{ aspectRatio: "340 / 498" }}
        >
          <div
            className="absolute -translate-x-1/2"
            style={{ left: "50%", top: 0, height: "68.8%", aspectRatio: active.phoneAspect }}
          >
            <div key={`phone-mobile-${index}`} className="animate-hero-fade relative h-full w-full">
              <Image
                src={active.phone}
                alt=""
                fill
                sizes="200px"
                className="object-fill drop-shadow-[0px_16px_32px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: box split 50/50, image half built the same way as the
          hero scene — a plain sky-colour panel sits behind a transparent-sky
          image, so the box fill and the bleeding clouds are pixel-identical.
          The bleed image is a sibling of (not clipped by) the right panel,
          so clouds can rise above the box's top edge. */}
      <div
        ref={sceneRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative hidden w-full overflow-visible md:block md:aspect-[1280/572]"
      >
        <div className="absolute inset-0 rounded-[24px] bg-white" />

        {/* Flat colour fill for the image half — just a solid panel, no
            children, so it needs no clipping of its own. */}
        <div className="absolute inset-y-0 left-1/2 right-0 rounded-r-[24px] bg-[#a7d8ef]" />

        {/* In-box scene: Figma's exact crop of the box photo against this
            panel. */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 right-0 overflow-hidden rounded-r-[24px]">
          <div
            key={`scene-desktop-${index}`}
            className="animate-hero-fade absolute"
            style={active.sceneBox.desktopCrop}
          >
            <Image
              src={active.sceneBox.src}
              alt=""
              fill
              sizes="640px"
              className="object-fill"
            />
          </div>
        </div>

        {/* Cloud bleed: one or more sprites, each a tightly-cropped window
            onto its own cloud cluster from the same source photo the box
            below is cropped from — Figma's exact crop for both, so the
            edges line up. Positioned as siblings of the box (not children),
            so they float above it unclipped. Kept scoped to the box's own
            width so nothing bleeds over the white text card on the left. */}
        {active.clouds.map((cloud, i) => (
          <div
            key={`${index}-${i}`}
            className="animate-hero-fade pointer-events-none absolute z-10 overflow-hidden"
            style={cloud.desktop}
          >
            <div className="absolute" style={cloud.crop}>
              <Image
                src={cloud.src}
                alt=""
                fill
                unoptimized
                className="object-fill"
              />
            </div>
          </div>
        ))}

        <div className="absolute inset-y-0 left-0 flex w-1/2 max-w-[480px] flex-col py-10 pr-10 pl-10 lg:pr-14 lg:pl-16">
          {/* This block fills the remaining space and centers pill/heading/
              body within it, so the controls below always land at the same
              fixed bottom position regardless of how long the text runs.
              min-h-0 lets it actually shrink to that space instead of
              overflowing (flex items default to a content-based minimum),
              which would otherwise push the controls down and out of the
              overflow-visible scene on the longest slide. */}
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-6">
            {pill}
            {heading}
            {body}
          </div>
          <div className="pt-6">{controls}</div>
        </div>

        <div
          ref={phoneLayerRef}
          className="pointer-events-none absolute top-1/2 left-1/2 z-20 h-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[4deg]"
          style={{ aspectRatio: active.phoneAspect }}
        >
          <div key={`phone-desktop-${index}`} className="animate-hero-fade relative h-full w-full">
            <Image
              src={active.phone}
              alt=""
              fill
              sizes="220px"
              className="object-fill drop-shadow-[0px_20px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
