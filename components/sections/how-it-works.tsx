"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { useLanguage } from "@/lib/i18n";

export function HowItWorks() {
  const rootRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useGsap(() => {
    gsap.from("[data-how='heading'] > *", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });
    gsap.from("[data-how='orb']", {
      scale: 0.6,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.6)",
      scrollTrigger: { trigger: "[data-how='steps']", start: "top 80%" },
    });
    gsap.from("[data-how='text']", {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-how='steps']", start: "top 75%" },
    });
    gsap.from("[data-how='connector-line']", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-how='steps']", start: "top 75%" },
    });
    gsap.from("[data-how='connector-dot']", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: "back.out(2)",
      scrollTrigger: { trigger: "[data-how='steps']", start: "top 75%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Centered horizontal blue radial glow on pure black */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(30,74,122,0.85) 0%, rgba(20,52,90,0.55) 25%, rgba(10,26,48,0.3) 50%, rgba(0,0,0,0.1) 75%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div
          data-how="heading"
          className="flex flex-col items-center text-center"
        >
          <span
            aria-hidden
            className="block w-10 h-[3px] rounded-full bg-primary/80"
          />
          <span className="mt-4 text-xs md:text-sm tracking-[0.3em] font-bold text-primary drop-shadow-[0_0_12px_rgba(0,178,255,0.55)]">
            {t.howItWorks.sectionLabel}
          </span>
          <h2 className="mt-8 md:mt-10 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {t.howItWorks.heading}
          </h2>
        </div>

        {/* Steps */}
        <div
          data-how="steps"
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-stretch md:items-start gap-10 md:gap-0"
        >
          {t.howItWorks.steps.map((step, i) => (
            <div
              key={step.n}
              className="flex-1 flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Step column */}
              <div className="flex flex-col items-center text-center flex-1 w-full">
                {/* Gradient orb */}
                <div
                  data-how="orb"
                  className="relative w-[100px] h-[100px] md:w-28 md:h-28 rounded-full grid place-items-center border-2 border-transparent"
                  style={{
                    background:
                      "linear-gradient(180deg, #61A6D9 0%, rgba(11,15,25,0) 100%) padding-box, linear-gradient(180deg, #00B7FF 0%, rgba(11,15,25,0) 100%) border-box",
                    boxShadow:
                      "0 18px 40px -14px rgba(0,0,0,0.55), inset 0 -8px 18px rgba(11,15,25,0.45)",
                  }}
                >
                  <span className="text-sm md:text-base font-bold tracking-[0.18em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                    {step.n}
                  </span>
                </div>

                {/* Text */}
                <div data-how="text" className="mt-10 md:mt-14 max-w-[14rem]">
                  <h3 className="text-base md:text-lg font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connector (between orbs only) */}
              {i < t.howItWorks.steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:flex items-center justify-center shrink-0 h-28 md:h-32 px-2"
                >
                  <div className="flex items-center gap-2 w-20 lg:w-28">
                    <span
                      data-how="connector-dot"
                      className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,178,255,0.8)]"
                    />
                    <span
                      data-how="connector-line"
                      className="flex-1 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0,178,255,0.1), rgba(0,178,255,0.7), rgba(0,178,255,0.1))",
                      }}
                    />
                    <span
                      data-how="connector-dot"
                      className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,178,255,0.8)]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
