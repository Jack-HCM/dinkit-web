import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";

export function HeroImageSection() {
  return (
    <div className="relative w-full px-4 sm:px-6">
      <div className="relative mx-auto w-full max-w-[1280px]">
        <Image
          src="/images/hero-scene-bleed.png"
          alt=""
          width={1376}
          height={768}
          className="pointer-events-none absolute left-1/2 top-[-7.7%] h-[111%] w-[115%] max-w-none -translate-x-1/2 object-contain"
        />

        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px]">
          <Image
            src="/images/hero-scene-box.png"
            alt=""
            width={1376}
            height={768}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
