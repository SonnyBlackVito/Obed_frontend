"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";

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
];

export function StaySystem() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGsap(() => {
    gsap.from("[data-stay='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    });
    gsap.from("[data-stay='logic']", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-stay='logic']", start: "top 80%" },
    });
    gsap.from("[data-stay='case']", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-stay='logic']", start: "top 75%" },
    });
    gsap.from("[data-stay='feature']", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-stay='features']", start: "top 80%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      id="stay-system"
      className="relative  px-4 md:px-6 py-20 md:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-60 mix-blend-lighten"
        style={{
          backgroundImage: "url('/background_image.png')",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 50%, transparent 100%)",
        }}
      />
      <div
        data-stay="heading"
        className="text-center drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] max-w-6xl mx-auto flex flex-col items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="99"
          height="6"
          viewBox="0 0 99 6"
          fill="none"
          className="mb-3"
        >
          <path
            d="M3 3H96"
            stroke="#5DA2D6"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        <span className="text-2xl font-extrabold drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] text-[#5DA2D6] uppercase">
          Core Mechanism
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl text-white text-center font-inter font-extrabold self-stretch leading-tight md:whitespace-nowrap">
          OBED Stay — Minimum Value Guarantee
        </h1>
        <p className="mt-5 text-[#8B8BA2] text-lg md:text-[20px] font-normal leading-[28px] w-full max-w-none mx-auto">
          Even when the market price drops, the{" "}
          <span className="bg-gradient-to-r from-[#61A6D9] to-[#2567A5] text-transparent bg-clip-text font-extrabold">
            Stay Price (minimum exchange value)
          </span>{" "}
          protects your coin&apos;s value at checkout. Market price applies when
          higher, Stay Price when lower — always in the consumer&apos;s favor.
        </p>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Logic box */}
        <div
          data-stay="logic"
          className="mt-14 relative rounded-[24px] border border-[#333] p-8 md:p-10"
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-white font-bold text-lg md:text-xl">
            <ScaleIcon className="w-5 h-5 text-[#fff]" />
            Stay Logic
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
            <CaseCard
              label="CASE A — NORMAL MARKET · MARKET PRICE ≥ STAY PRICE"
              badge="Market Price Applied"
              detail={
                <span>
                  Market price{" "}
                  <span className="text-[#61A6D9] font-semibold">
                    1,200 KRW
                  </span>{" "}
                  → Applied as-is
                </span>
              }
              accent="green"
            />
            <CaseCard
              label="CASE B — STAY ACTIVATED · MARKET PRICE < STAY PRICE"
              badge="Stay Price Applied (Consumer Protected)"
              detail={
                <span>
                  Even at{" "}
                  <span className="text-[#61A6D9] font-semibold">700 KRW</span>{" "}
                  → Stay Price{" "}
                  <span className="text-[#61A6D9] font-semibold">
                    1,000 KRW
                  </span>{" "}
                  applied
                </span>
              }
              accent="red"
            />
          </div>

          <div className="mt-8 text-center text-[14px] md:text-[15px] italic text-[#8B8BA2]">
            💡 Stay Price is reviewed monthly and announced{" "}
            <span className="text-[#61A6D9] font-medium italic">
              48 hours in advance
            </span>{" "}
            via official channels.
          </div>
        </div>

        {/* Feature cards */}
        <div
          data-stay="features"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              data-stay="feature"
              className="relative rounded-2xl border border-[#333] bg-gradient-to-br from-[#122A40]/50 to-[#0E1520] p-6 hover:border-[#61A6D9]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center border border-[#333] text-[#61A6D9] mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-[15px] mb-2">{title}</h3>
              <p className="text-[#8B8BA2] text-[13px] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  label,
  badge,
  detail,
  accent,
}: {
  label: string;
  badge: string;
  detail: React.ReactNode;
  accent: "green" | "red";
}) {
  const borderColor =
    accent === "green" ? "border-l-[#00D789]" : "border-l-[#FF4D4D]";

  return (
    <div
      data-stay="case"
      className={`relative rounded-2xl p-6 border border-[#222] bg-[#192430] border-l-[4px] ${borderColor}`}
    >
      <div className="text-[11px] md:text-[12px] tracking-wider text-[#8B8BA2] font-medium uppercase mb-3">
        {label}
      </div>
      <div className="text-[17px] md:text-[18px] font-bold text-white mb-2">
        {badge}
      </div>
      <div className="text-[14px] md:text-[15px] text-[#8B8BA2]">{detail}</div>
    </div>
  );
}

function ShieldIcon({ className }: { className?: string }) {
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
        d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ScaleIcon({ className }: { className?: string }) {
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
        d="M12 3v18M4 7h16M7 7l-3 6a3 3 0 0 0 6 0L7 7Zm10 0-3 6a3 3 0 0 0 6 0l-3-6Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function SwapIcon({ className }: { className?: string }) {
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
        d="M7 7h13l-3-3M17 17H4l3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
