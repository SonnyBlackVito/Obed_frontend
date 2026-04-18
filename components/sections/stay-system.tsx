"use client"

import { useRef } from "react"
import { useGsap, gsap } from "@/hooks/use-gsap"

const FEATURES = [
  {
    title: "Minimum Guarantee",
    desc: "Coins are never used below the announced Stay Price.",
    icon: ShieldIcon,
  },
  {
    title: "Market Independence",
    desc: "Stay Price holds regardless of external exchange fluctuations.",
    icon: ScaleIcon,
  },
  {
    title: "Two-Way Benefit",
    desc: "Market price applies when higher — always favoring the consumer.",
    icon: SwapIcon,
  },
  {
    title: "Transparent Disclosure",
    desc: "All changes are announced in advance via official channels.",
    icon: EyeIcon,
  },
]

export function StaySystem() {
  const rootRef = useRef<HTMLElement | null>(null)

  useGsap(() => {
    gsap.from("[data-stay='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    })
    gsap.from("[data-stay='logic']", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-stay='logic']", start: "top 80%" },
    })
    gsap.from("[data-stay='case']", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-stay='logic']", start: "top 75%" },
    })
    gsap.from("[data-stay='feature']", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-stay='features']", start: "top 80%" },
    })
  }, [])

  return (
    <section
      ref={rootRef}
      id="stay-system"
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border bg-gradient-to-b from-background via-card/40 to-background"
    >
      <div className="mx-auto max-w-6xl">
        <div data-stay="heading" className="text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.25em] text-primary font-semibold">
            CORE MECHANISM
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            OBED Stay — <span className="text-primary text-glow-cyan">Minimum Value Guarantee</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Even when the market price drops, the Stay Price (minimum exchange value) protects your
            coin&apos;s value at checkout. Market price applies when higher. Stay Price when lower —
            always in the consumer&apos;s favor.
          </p>
        </div>

        {/* Logic box */}
        <div
          data-stay="logic"
          className="mt-12 relative rounded-2xl border border-border bg-card p-6 md:p-10 shadow-glow-cyan"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
            Stay Logic
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <CaseCard
              label="CASE A"
              heading="NORMAL MARKET ≥ MARKET PRICE > STAY PRICE"
              badge="Market Price Applied"
              detail="Market price 1,200 KRW · Applied as-is"
              accent="muted"
            />
            <CaseCard
              label="CASE B"
              heading="STAY ACTIVATED · MARKET PRICE < STAY PRICE"
              badge="Stay Price Applied (Consumer Protected)"
              detail="Even at 700 KRW market, Stay Price 1,000 KRW applied"
              accent="primary"
            />
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Stay Price is reviewed monthly and announced{" "}
              <span className="text-foreground font-medium">48 hours in advance</span> via official
              channels.
            </span>
          </div>
        </div>

        {/* Feature cards */}
        <div
          data-stay="features"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              data-stay="feature"
              className="relative rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-primary/10 border border-primary/30 text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({
  label,
  heading,
  badge,
  detail,
  accent,
}: {
  label: string
  heading: string
  badge: string
  detail: string
  accent: "primary" | "muted"
}) {
  const isPrimary = accent === "primary"
  return (
    <div
      data-stay="case"
      className={`relative rounded-xl p-5 border ${
        isPrimary ? "border-primary/50 bg-primary/5" : "border-border bg-background/40"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`text-[10px] tracking-widest font-bold ${
            isPrimary ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {label}
        </span>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">{heading}</div>
      <div
        className={`mt-3 font-semibold ${isPrimary ? "text-primary" : "text-foreground"}`}
      >
        {badge}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{detail}</div>
    </div>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" strokeLinejoin="round" />
    </svg>
  )
}
function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M12 3v18M4 7h16M7 7l-3 6a3 3 0 0 0 6 0L7 7Zm10 0-3 6a3 3 0 0 0 6 0l-3-6Z" strokeLinejoin="round" />
    </svg>
  )
}
function SwapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M7 7h13l-3-3M17 17H4l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
