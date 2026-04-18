"use client"

import { useRef } from "react"
import { useGsap, gsap } from "@/hooks/use-gsap"

type Slice = {
  label: string
  value: number
  color: string
  description: string
}

const SLICES: Slice[] = [
  {
    label: "25% Title",
    value: 25,
    color: "#00b2ff",
    description: "Coins are never used below the announced Stay Price.",
  },
  {
    label: "40% Title",
    value: 40,
    color: "#2563eb",
    description: "Coins are never used below the announced Stay Price.",
  },
  {
    label: "35% Title",
    value: 35,
    color: "#6b7280",
    description: "Coins are never used below the announced Stay Price.",
  },
]

export function TokenSupply() {
  const rootRef = useRef<HTMLElement | null>(null)

  useGsap(() => {
    gsap.from("[data-supply='text'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: "[data-supply='chart']", start: "top 80%" },
    })
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
      )
  }, [])

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
            <span className="block h-[3px] w-12 rounded-full bg-primary" aria-hidden />
          </div>

          <div className="mt-5 text-center">
            <span className="text-xs md:text-sm tracking-[0.28em] text-primary font-bold">
              TOKENOMICS
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-foreground text-balance">
              Big title
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">bodytext</p>
          </div>

          <ul className="mt-10 space-y-7">
            {SLICES.map((s) => (
              <li key={s.label} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-1 inline-block w-1.5 h-7 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: s.color,
                    boxShadow: `0 0 12px ${s.color}80`,
                  }}
                />
                <div className="flex-1">
                  <div className="text-foreground font-semibold text-base">{s.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Block chart */}
        <div className="relative flex items-center justify-center">
          <div
            data-supply="chart"
            className="relative aspect-square w-full max-w-md rounded-[2rem] overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,178,255,0.25), 0 0 60px 8px rgba(0,178,255,0.45), 0 0 120px 20px rgba(0,178,255,0.2)",
            }}
            role="img"
            aria-label="OBED Coin total supply distribution: 25%, 40%, 35%"
          >
            <div className="flex w-full h-full">
              {/* Left column: 60% width (25 + 35) */}
              <div className="flex flex-col" style={{ width: "60%" }}>
                {/* 25% slice (top) */}
                <div
                  data-supply="slice"
                  className="relative flex items-start justify-start p-5 md:p-6"
                  style={{
                    height: `${(25 / 60) * 100}%`,
                    backgroundColor: "#00b2ff",
                  }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    25<span className="text-base md:text-lg align-top">%</span>
                  </span>
                </div>
                {/* 35% slice (bottom) */}
                <div
                  data-supply="slice"
                  className="relative flex items-end justify-start p-5 md:p-6"
                  style={{
                    height: `${(35 / 60) * 100}%`,
                    backgroundColor: "#6b7280",
                  }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    35<span className="text-base md:text-lg align-top">%</span>
                  </span>
                </div>
              </div>
              {/* Right column: 40% width */}
              <div
                data-supply="slice"
                className="relative flex items-center justify-end p-5 md:p-6"
                style={{ width: "40%", backgroundColor: "#2563eb" }}
              >
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  40<span className="text-base md:text-lg align-top">%</span>
                </span>
              </div>
            </div>

            {/* Center total-supply card */}
            <div
              data-supply="center"
              className="absolute inset-0 grid place-items-center pointer-events-none"
            >
              <div className="bg-background/95 rounded-2xl px-8 py-7 md:px-10 md:py-8 text-center shadow-2xl border border-border/50">
                <div className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground font-medium">
                  TOTAL SUPPLY
                </div>
                <div className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                  1.0 Billion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
