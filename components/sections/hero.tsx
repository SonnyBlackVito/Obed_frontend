"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      // ref={rootRef}
      id="top"
      className="relative w-full  bg-[##0B0F19] overflow-hidden py-28 md:py-36 pb-16 md:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="relative ">
          <div
            data-hero="badge"
            className="w-fit mb-8 h-auto min-h-[36px] px-4 md:px-6 flex mx-auto items-center gap-[8px] py-[6px] rounded-full bg-[#192430] border-[1.5px] border-[#61A6D9] text-white text-center text-[12px] md:text-[14px] font-semibold leading-normal md:leading-[24px]"
          >
            <div>
              <span className="text-xl mr-1">⬡</span>
              {t.hero.badge}
            </div>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance ">
            <span
              data-hero="title-1"
              className="block text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] font-extrabold leading-none tracking-[0.64px] text-4xl md:text-5xl lg:text-[64px] text-center"
            >
              {t.hero.title1}
            </span>
            <span
              data-hero="title-2"
              className="block relative -left-3 md:-left-3 text-right text-[#0AF] drop-shadow-[0_0_5px_rgba(0,163,255,0.6)] text-4xl md:text-5xl lg:text-[68px] font-extrabold leading-none "
            >
              {t.hero.title2}
            </span>
          </h1>

          <p
            data-hero="subtitle"
            className="mt-6 mx-auto text-center  font-inter text-[14px] font-normal leading-[24px] text-base md:text-lg text-muted-foreground max-w-xl "
          >
            {t.hero.subtitle}
          </p>

          <div className="mt-8 sm:mt-14 flex flex-col sm:flex-row gap-2 sm:gap-[10px] font-inter justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto">
            <a
              data-hero="cta"
              href="#stay-system"
              className="group relative w-full sm:w-[309px] flex items-center justify-center gap-[6px] sm:gap-[10px] px-5 sm:px-[32px] py-3 sm:py-[16px] rounded-full font-semibold text-primary-foreground overflow-hidden"
              style={{
                background: "linear-gradient(90deg, #0AF 0%, #00C9D7 100%)",
              }}
            >
              <span className="relative text-white font-normal leading-[20px] sm:leading-[24px] text-[14px] sm:text-[16px] md:text-[18px] z-10">
                {t.hero.cta1}
              </span>
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, #00C9D7 0%, #0AF 100%)",
                }}
              />
            </a>
            <a
              data-hero="cta"
              href="#use-cases"
              className="group w-full sm:w-[309px] flex items-center justify-center gap-[6px] sm:gap-[10px] px-5 sm:px-[32px] py-3 sm:py-[16px] rounded-full font-semibold bg-card border border-solid border-[#8B8BA2] text-foreground hover:border-primary/60 transition-colors"
            >
              <span className="relative text-white font-normal leading-[20px] sm:leading-[24px] text-[14px] sm:text-[16px] md:text-[18px] z-10">
                {t.hero.cta2}
              </span>
            </a>
          </div>
        </div>

        {/* Coin illustration */}
        <div
          data-hero="coin"
          className="relative aspect-square max-w-[560px] mx-auto w-full"
        >
          <div data-hero="coin-inner" className="relative w-full h-full">
            <Image
              src="/header_bo.png"
              alt="Glowing OBED cryptocurrency coin with holographic binary code beam"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
