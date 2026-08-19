import Image from "next/image";
import { FooterContent } from "@/components/site-footer";

export function AboutSection() {
  return (
    <section className="relative flex w-full max-w-[1360px] flex-col items-center px-6">
      <div className="relative w-full">
        <div className="flex w-full flex-col rounded-t-none bg-white sm:rounded-t-[24px]">
          <FooterContent />
        </div>

        {/* Breaks out to the full viewport width — bleeds past the card's
            own edges, not just its padding, per Figma. */}
        <div className="absolute bottom-0 left-1/2 right-1/2 -mx-[50vw] h-[120px] w-screen overflow-hidden sm:h-[150px] md:h-[190px]">
          <Image
            src="/images/footer-tree-bleed.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 64%" }}
          />
        </div>
      </div>
    </section>
  );
}
