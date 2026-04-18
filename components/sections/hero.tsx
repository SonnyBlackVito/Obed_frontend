"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGsap, gsap } from "@/hooks/use-gsap"

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)

  useGsap(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.from("[data-hero='badge']", { y: 20, opacity: 0, duration: 0.7 })
      .from("[data-hero='title-1']", { y: 40, opacity: 0, duration: 0.9 }, "-=0.4")
      .from("[data-hero='title-2']", { y: 40, opacity: 0, duration: 0.9 }, "-=0.6")
      .from("[data-hero='subtitle']", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from("[data-hero='cta']", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
      .from(
        "[data-hero='coin']",
        { scale: 0.85, opacity: 0, duration: 1.2, ease: "power4.out" },
        "-=1.2",
      )

    // Subtle parallax on the coin with mouse
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      gsap.to("[data-hero='coin-inner']", {
        x,
        y,
        duration: 1,
        ease: "power2.out",
      })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-radial-cyan opacity-60" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.15]" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,178,255,0.18), rgba(0,178,255,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
        <div className="relative">
          <div
            data-hero="badge"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-xs md:text-sm text-foreground"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-glow-cyan" />
            Payment Utility Token · Real World
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
            <span data-hero="title-1" className="block text-foreground">
              Your Coin&apos;s Value,
            </span>
            <span
              data-hero="title-2"
              className="block text-primary text-glow-cyan"
            >
              Always Protected
            </span>
          </h1>

          <p
            data-hero="subtitle"
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Even when the market price drops, the Stay Price (minimum exchange value) protects your
            coin&apos;s value at checkout — E-Commerce · Dermatology · Daily Payments, all with
            OBED Coin.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              data-hero="cta"
              href="#stay-system"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-primary-foreground overflow-hidden shadow-glow-cyan"
              style={{
                background:
                  "linear-gradient(90deg, #00b2ff 0%, #22d3ee 100%)",
              }}
            >
              <span className="relative z-10">Explore Stay System</span>
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(90deg, #22d3ee 0%, #00b2ff 100%)",
                }}
              />
            </a>
            <a
              data-hero="cta"
              href="#use-cases"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-card border border-border text-foreground hover:border-primary/60 transition-colors"
            >
              See Use Cases
            </a>
          </div>
        </div>

        {/* Coin illustration */}
        <div data-hero="coin" className="relative aspect-square max-w-[560px] mx-auto w-full">
          <div data-hero="coin-inner" className="relative w-full h-full">
            {/* Pulsing rings */}
            <div
              aria-hidden
              className="absolute inset-[28%] rounded-full border border-primary/40 animate-pulse-ring"
            />
            <div
              aria-hidden
              className="absolute inset-[28%] rounded-full border border-primary/30 animate-pulse-ring"
              style={{ animationDelay: "1s" }}
            />

            <div className="absolute inset-0 animate-float-coin">
              <Image
                src="/obed-coin.jpg"
                alt="Glowing OBED cryptocurrency coin with holographic binary code beam"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Glow under coin */}
            <div
              aria-hidden
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-16 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(0,178,255,0.55), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
