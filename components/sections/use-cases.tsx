"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";

export function UseCases() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGsap(() => {
    gsap.from("[data-uc='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });
    gsap.from("[data-uc='card']", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-uc='cards']", start: "top 80%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      id="use-cases"
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border"
      style={{
        background:
          "radial-gradient(25% 80% at 0% 50%, rgba(93, 162, 214, 0.35), transparent 100%), radial-gradient(25% 80% at 100% 50%, rgba(93, 162, 214, 0.35), transparent 100%), #0B0F19",
      }}
    >
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="99"
          height="6"
          viewBox="0 0 99 6"
          fill="none"
          className="mb-2"
        >
          <path
            d="M3 3H96"
            stroke="#5DA2D6"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-xs drop-shadow-[0_0_5px_rgba(93,162,214,0.4)] tracking-[0.2em] text-[#5DA2D6] font-extrabold uppercase">
          USE CASES
        </span>
      </div>

      <div className="mx-auto max-w-6xl">
        <div data-uc="heading" className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Use OBED Coin Anywhere
          </h2>
          <p className="mt-5 text-[#8B8BA2] text-[15px] md:text-[18px]">
            From online shopping to offline clinic visits — OBED Coin is part of
            your daily life.
          </p>
        </div>

        <div
          data-uc="cards"
          className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6"
        >
          <UseCaseCard
            icon={<CartIcon className="w-6 h-6" />}
            title="E-Commerce Shopping Mall"
            description="Shop across 140,000+ products with OBED Coin. Stay Price applies automatically, plus up to 50% discount."
            chips={["140K+ Products", "Up to 50% Off", "Real-time Pay"]}
          />
          <UseCaseCard
            icon={<StethoscopeIcon className="w-6 h-6" />}
            title="250+ Partner Dermatology Clinics"
            description="Pay for laser treatments, Botox, fillers and skin care at 250+ clinics nationwide with real-time POS integration."
            chips={["Laser Up to 50%", "Botox 25%+", "QR Payment"]}
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
  chips,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  chips: string[];
}) {
  return (
    <div
      data-uc="card"
      className="relative rounded-2xl border border-[#5DA2D6]/60 bg-card p-6 md:p-8 hover:border-primary/60 transition-colors overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-40"
      />
      <div className="relative">
        <div className="w-12 h-12 rounded-xl grid place-items-center bg-primary/10 border border-primary/30 text-primary">
          {icon}
        </div>
        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full text-xs bg-background border border-border text-foreground"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path
        d="M3 4h2l2 13h11l2-8H7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
    </svg>
  );
}
function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path
        d="M6 3v7a5 5 0 0 0 10 0V3M8 3h-2M16 3h-2M11 15v2a4 4 0 0 0 8 0v-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="13" r="2" />
    </svg>
  );
}
