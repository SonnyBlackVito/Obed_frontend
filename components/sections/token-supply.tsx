"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { useLanguage } from "@/lib/i18n";

const SLICE_COLORS = [
  "#00AAFF", // Ecosystem & Mall – cyan blue
  "#2563EB", // Hospital Network – royal blue
  "#7C3AED", // Team & Advisors – violet
  "#0EA5E9", // Investors – sky blue
  "#06B6D4", // Marketing & Partners – teal
  "#F59E0B", // Reserve Fund – amber
];

export function TokenSupply() {
  const rootRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useGsap(() => {
    gsap.from("[data-supply='text'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: "[data-supply='chart']", start: "top 80%" },
    });
    tl.from("[data-supply='chart']", {
      scale: 0.92,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        "[data-supply='slice']",
        {
          opacity: 0,
          scale: 0.85,
          transformOrigin: "center center",
          duration: 0.55,
          stagger: 0.12,
          ease: "back.out(1.6)",
        },
        "-=0.4",
      )
      .from(
        "[data-supply='center']",
        { opacity: 0, scale: 0.7, duration: 0.5, ease: "power2.out" },
        "-=0.2",
      );
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border overflow-hidden"
    >
      {/* Diagonal light streak background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(800px 400px at 15% 20%, rgba(0,178,255,0.18), transparent 60%), radial-gradient(600px 300px at 85% 80%, rgba(34,211,238,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-0 w-[60%] h-[120%] -z-10 rotate-[18deg] opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(93,162,214,0.18), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT: Bordered info card */}
        <div
          data-supply="text"
          className="relative rounded-3xl border border-primary/30 bg-card/80 backdrop-blur-sm p-8 md:p-10 shadow-[0_0_40px_-12px_rgba(0,178,255,0.25)]"
        >
          {/* small top divider */}
          <div className="flex justify-center">
            <span
              className="block h-[3px] w-12 rounded-full bg-primary"
              aria-hidden
            />
          </div>

          <div className="mt-5 text-center">
            <span className="text-xs md:text-sm tracking-[0.28em] text-primary font-bold">
              {t.tokenSupply.sectionLabel}
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-foreground text-balance">
              {t.tokenSupply.heading}
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              {t.tokenSupply.description}
            </p>
          </div>

          <ul className="mt-10 space-y-5">
            {t.tokenSupply.slices.map((s, i) => (
              <li key={s.label} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-1 inline-block w-1.5 h-7 rounded-full shrink-0"
                  style={{
                    backgroundColor: SLICE_COLORS[i],
                    boxShadow: `0 0 12px ${SLICE_COLORS[i]}80`,
                  }}
                />
                <div className="flex-1">
                  <div className="text-foreground font-semibold text-base flex items-baseline gap-2">
                    <span>{s.label}</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: SLICE_COLORS[i] }}
                    >
                      {s.value}%
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Block chart — 6-block mosaic */}
        <div className="relative flex items-center justify-center">
          <div
            data-supply="chart"
            className="relative aspect-square w-full max-w-md rounded-[2rem] overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,178,255,0.25), 0 0 60px 8px rgba(0,178,255,0.45), 0 0 120px 20px rgba(0,178,255,0.2)",
            }}
            role="img"
            aria-label="OBED Coin token allocation: 20%, 30%, 15%, 20%, 10%, 5%"
          >
            <div className="flex w-full h-full">
              {/* Left column: 50% width → Hospital 30% (top) + Team 15% + Reserve 5% (bottom) */}
              <div className="flex flex-col" style={{ width: "50%" }}>
                {/* Hospital Network 30% */}
                <div
                  data-supply="slice"
                  className="relative flex items-start justify-start p-4 md:p-5"
                  style={{
                    height: "60%",
                    backgroundColor: SLICE_COLORS[1],
                  }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    30
                    <span className="text-base md:text-lg align-top">%</span>
                  </span>
                </div>
                {/* Team & Advisors 15% */}
                <div
                  data-supply="slice"
                  className="relative flex items-center justify-start p-4 md:p-5"
                  style={{
                    height: "30%",
                    backgroundColor: SLICE_COLORS[2],
                  }}
                >
                  <span className="text-xl md:text-2xl font-bold text-white">
                    15
                    <span className="text-sm md:text-base align-top">%</span>
                  </span>
                </div>
                {/* Reserve Fund 5% */}
                <div
                  data-supply="slice"
                  className="relative flex items-end justify-start p-4 md:p-5"
                  style={{
                    height: "10%",
                    backgroundColor: SLICE_COLORS[5],
                  }}
                >
                  <span className="text-sm md:text-base font-bold text-white leading-none">
                    5<span className="text-xs align-top">%</span>
                  </span>
                </div>
              </div>

              {/* Right column: 50% width → Ecosystem 20% (top) + Investors 20% (mid) + Marketing 10% (bottom) */}
              <div className="flex flex-col" style={{ width: "50%" }}>
                {/* Ecosystem & Mall 20% */}
                <div
                  data-supply="slice"
                  className="relative flex items-start justify-end p-4 md:p-5"
                  style={{
                    height: "40%",
                    backgroundColor: SLICE_COLORS[0],
                  }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    20
                    <span className="text-base md:text-lg align-top">%</span>
                  </span>
                </div>
                {/* Investors 20% */}
                <div
                  data-supply="slice"
                  className="relative flex items-center justify-end p-4 md:p-5"
                  style={{
                    height: "40%",
                    backgroundColor: SLICE_COLORS[3],
                  }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    20
                    <span className="text-base md:text-lg align-top">%</span>
                  </span>
                </div>
                {/* Marketing & Partners 10% */}
                <div
                  data-supply="slice"
                  className="relative flex items-end justify-end p-4 md:p-5"
                  style={{
                    height: "20%",
                    backgroundColor: SLICE_COLORS[4],
                  }}
                >
                  <span className="text-lg md:text-xl font-bold text-white">
                    10
                    <span className="text-sm md:text-base align-top">%</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Center total-supply card */}
            <div
              data-supply="center"
              className="absolute inset-0 grid place-items-center pointer-events-none"
            >
              <div className="bg-background mx-auto justify-center flex flex-col w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] rounded-xl md:rounded-2xl px-4 py-4 sm:px-5 sm:py-5 md:px-7 md:py-6 lg:px-8 lg:py-7 text-center shadow-2xl border border-border/50">
                <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-lg font-normal text-[#8B8BA2] whitespace-nowrap">
                  {t.tokenSupply.totalSupply}
                </div>
                <div className="mt-1 sm:mt-2 font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground whitespace-nowrap">
                  {t.tokenSupply.totalValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
