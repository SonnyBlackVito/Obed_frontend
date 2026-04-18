"use client"

import { useRef } from "react"
import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap"

const STATS = [
  { value: "250+", label: "Partner Dermatology Clinics" },
  { value: "140,000+", label: "Products on Partner Mall" },
  { value: "50%", label: "Discount on Coin Payment" },
  { value: "50%", label: "Reserve Fund of Total Supply" },
]

export function Stats() {
  const rootRef = useRef<HTMLElement | null>(null)

  useGsap(() => {
    gsap.from("[data-stat]", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top 80%",
      },
    })

    // Count up numbers
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const target = Number.parseFloat(el.dataset.count || "0")
      const suffix = el.dataset.suffix || ""
      const prefix = el.dataset.prefix || ""
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        onUpdate: () => {
          el.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix
        },
      })
    })
  }, [])

  return (
    <section ref={rootRef} className="relative px-4 md:px-6 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-full bg-card border border-border shadow-glow-cyan">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {STATS.map((stat, i) => (
              <div
                key={stat.label + i}
                data-stat
                className="px-6 py-6 md:py-8 text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  <StatValue value={stat.value} />
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatValue({ value }: { value: string }) {
  // Parse out numeric portion for count animation
  const match = value.match(/^([^\d]*)([\d,]+)([^\d]*)$/)
  if (!match) return <>{value}</>
  const [, prefix, numStr, suffix] = match
  const numeric = Number.parseFloat(numStr.replace(/,/g, ""))
  return (
    <span data-count={numeric} data-prefix={prefix} data-suffix={suffix}>
      {prefix}0{suffix}
    </span>
  )
}
