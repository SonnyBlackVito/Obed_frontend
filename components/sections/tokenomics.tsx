"use client"

import { useRef } from "react"
import { useGsap, gsap } from "@/hooks/use-gsap"

export function Tokenomics() {
  const rootRef = useRef<HTMLElement | null>(null)

  useGsap(() => {
    gsap.from("[data-tok='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    })
    gsap.from("[data-tok='card']", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-tok='grid']", start: "top 80%" },
    })
  }, [])

  return (
    <section
      ref={rootRef}
      id="tokenomics"
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border overflow-hidden"
      style={{ backgroundColor: "#0a0f1a" }}
    >
      {/* Base navy wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, #0a1020 0%, #0a0f1a 45%, #070b14 100%)",
        }}
      />

      {/* Soft off-center steel-blue radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 42% 52%, rgba(50,96,150,0.35) 0%, rgba(30,58,100,0.18) 35%, rgba(12,22,40,0.08) 65%, transparent 90%)",
          filter: "blur(2px)",
        }}
      />

      {/* Subtle corner vignette to deepen edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 90%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl relative">
        <div data-tok="heading" className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] text-primary font-semibold">TOKENOMICS</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Sustainable Token Economy
          </h2>
          <p className="mt-4 text-muted-foreground">
            OBED Coin is built on a stable token economy centered around the Reserve Fund.
          </p>
        </div>

        <div data-tok="grid" className="mt-12 grid md:grid-cols-5 gap-4">
          <Card className="md:col-span-2 md:row-span-1">
            <div className="text-5xl md:text-6xl font-bold text-primary text-glow-cyan">5%</div>
            <div className="mt-2 font-semibold text-foreground">Reserve Fund</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              5% of total supply is managed as a reserve fund for Stay Price maintenance and price
              stabilization.
            </p>
          </Card>

          <Card className="md:col-span-3 bg-primary/10 border-primary/40">
            <div className="text-3xl md:text-4xl font-bold text-foreground text-glow-cyan">
              Monthly
            </div>
            <div className="mt-1 font-semibold text-foreground">Stay Price Review</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              The committee reviews and publishes the Stay Price monthly based on market data,
              ensuring alignment with real-world value.
            </p>
          </Card>

          <Card>
            <div className="text-xl md:text-2xl font-bold text-foreground">글로벌 거래소</div>
            <div className="mt-1 text-sm font-semibold text-primary">Exchange Listed</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Listed on a global cryptocurrency exchange — accessible to crypto users worldwide.
            </p>
          </Card>

          <Card>
            <div className="font-semibold text-foreground">Stay Price Weighting</div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>OBED Market Cap (30 days) 40%</li>
              <li>Platform Price Index 35%</li>
              <li>Reserve Fund Balance 25%</li>
            </ul>
          </Card>

          <Card>
            <div className="font-semibold text-foreground">Fund Management</div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>Multi-sig wallet management</li>
              <li>Monthly public disclosure</li>
              <li>Continuously replenished via platform fees</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      data-tok="card"
      className={`relative rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors ${className}`}
    >
      {children}
    </div>
  )
}
