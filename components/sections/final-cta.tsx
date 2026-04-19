"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { useLanguage } from "@/lib/i18n";

export function FinalCTA() {
  const rootRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useGsap(() => {
    // Reveal content on scroll
    gsap.from("[data-cta] > *", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });

    // Side bar images slide in from their respective edges
    gsap.from("[data-bars='left']", {
      x: -80,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
    });
    gsap.from("[data-bars='right']", {
      x: 80,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
    });

    // Gentle continuous float so the bars feel alive
    gsap.to("[data-bars]", {
      y: -12,
      duration: 2.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden px-4 md:px-6 py-28 md:py-40 border-t border-border"
    >
      {/* Subtle radial background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,178,255,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Left side bars */}
      <div
        aria-hidden
        data-bars="left"
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[75%] w-[110px] sm:w-[160px] md:w-[220px] lg:w-[280px]"
      >
        <Image
          src="/cta-bars.png"
          alt=""
          fill
          sizes="(max-width: 768px) 160px, 280px"
          className="object-contain object-left"
          priority={false}
        />
      </div>

      {/* Right side bars (mirrored) */}
      <div
        aria-hidden
        data-bars="right"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[75%] w-[110px] sm:w-[160px] md:w-[220px] lg:w-[280px] scale-x-[-1]"
      >
        <Image
          src="/cta-bars.png"
          alt=""
          fill
          sizes="(max-width: 768px) 160px, 280px"
          className="object-contain object-left"
          priority={false}
        />
      </div>

      {/* Content */}
      <div data-cta className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-balance leading-[1.1]">
          <span className="block text-foreground text-glow-white">
            {t.finalCta.heading1}
          </span>
          <span className="block text-primary text-glow-cyan mt-2">{t.finalCta.heading2}</span>
        </h2>

        <p className="mt-6 text-muted-foreground text-base md:text-lg">
          {t.finalCta.description}
        </p>

        {/* Primary action row */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#stay-system"
            className="inline-flex items-center justify-center min-w-[240px] px-8 py-4 rounded-full font-semibold text-primary-foreground shadow-glow-cyan transition-transform hover:scale-[1.02]"
            style={{
              background: "linear-gradient(90deg, #00b2ff 0%, #22d3ee 100%)",
            }}
          >
            {t.finalCta.cta1}
          </a>
          <a
            href="#whitepaper"
            className="inline-flex items-center justify-center min-w-[240px] px-8 py-4 rounded-full font-semibold bg-card border border-border text-foreground hover:border-primary/60 transition-colors"
          >
            {t.finalCta.cta2}
          </a>
        </div>

        {/* Secondary social row */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://t.me/obedworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-w-[200px] px-6 py-3 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/60 transition-colors text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
            {t.finalCta.telegram}
          </a>
          <a
            href="https://x.com/CoinObed94777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-w-[200px] px-6 py-3 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/60 transition-colors text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {t.finalCta.x}
          </a>
        </div>
      </div>
    </section>
  );
}
