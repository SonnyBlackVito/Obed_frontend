"use client";

import { useRef, useState } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function FAQ() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLanguage();

  useGsap(() => {
    gsap.from("[data-faq='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });
    gsap.from("[data-faq='item']", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-faq='list']", start: "top 85%" },
    });
    gsap.from("[data-faq='cta']", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-faq='cta']", start: "top 90%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      id="qa"
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-4xl">
        <div data-faq="heading" className="text-center">
          <span className="text-xs tracking-[0.25em] text-primary font-semibold">
            {t.faq.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            {t.faq.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.faq.description}
          </p>
        </div>

        <div data-faq="list" className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                data-faq="item"
                className={cn(
                  "rounded-xl border bg-card overflow-hidden transition-colors",
                  isOpen ? "border-primary/50" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="flex items-center gap-3 text-foreground font-medium">
                    <span className="text-primary">Q.</span>
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "w-7 h-7 rounded-full grid place-items-center transition-transform",
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-45"
                        : "bg-background border border-border text-muted-foreground",
                    )}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telegram CTA */}
        <div
          data-faq="cta"
          className="mt-10 rounded-2xl border border-primary/40 bg-primary/5 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
        >
          <div className="flex-1">
            <div className="font-semibold text-foreground">
              {t.faq.ctaTitle}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {t.faq.ctaDescription}
            </div>
          </div>
          <a
            href="https://t.me/OBED_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-glow-cyan transition-shadow"
          >
            {t.faq.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
