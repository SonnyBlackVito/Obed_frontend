"use client";

import { useRef } from "react";
import { useGsap, gsap, ScrollTrigger } from "@/hooks/use-gsap";

const STATS = [
  { value: "250+", label: "Partner Dermatology Clinics" },
  { value: "140,000+", label: "Products on Partner Mall" },
  { value: "50%", label: "Discount on Coin Payment" },
  { value: "50%", label: "Reserve Fund of Total Supply" },
];

export function Stats() {
  const rootRef = useRef<HTMLElement | null>(null);

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
    });

    // Count up numbers
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const target = Number.parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        onUpdate: () => {
          el.textContent =
            prefix + Math.floor(obj.val).toLocaleString() + suffix;
        },
      });
    });
  }, []);

  return (
    <section ref={rootRef} className="relative px-4 md:px-6 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[36px] overflow-hidden border border-[#61A6D9]">
          {/* Aurora Waves Pattern */}
          <style>{`
            @keyframes aurora {
              0% { transform: scale(1) rotate(0deg); opacity: 0.5; }
              50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
              100% { transform: scale(1) rotate(360deg); opacity: 0.5; }
            }
          `}</style>
          <div
            className="absolute z-0 w-[200%] h-[200%] -left-[50%] -top-[50%]"
            style={{
              background: `linear-gradient(45deg, #1a1a1a 0%, #003366 100%),
                repeating-linear-gradient(
                  45deg,
                  rgba(0, 255, 255, 0.1) 0px,
                  rgba(0, 255, 255, 0.1) 20px,
                  rgba(0, 255, 0, 0.1) 20px,
                  rgba(0, 255, 0, 0.1) 40px
                ),
                radial-gradient(
                  circle at 50% 50%,
                  rgba(32, 196, 232, 0.3) 0%,
                  rgba(76, 201, 240, 0.1) 100%
                )`,
              backgroundBlendMode: "normal, overlay, overlay",
              animation: "aurora 8s linear infinite",
            }}
          />
          <div className="absolute -top-[18px] md:-top-[22px] left-0 w-full flex justify-center pointer-events-none z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1100"
              height="46"
              viewBox="0 0 1100 46"
              fill="none"
              className="max-w-full"
            >
              <g filter="url(#filter0_f_5_17012)">
                <path
                  d="M550 28C256.185 28 18 23.5228 18 18L1082 18C1082 23.5228 843.815 28 550 28Z"
                  fill="url(#paint0_linear_5_17012)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5_17012"
                  x="0"
                  y="0"
                  width="1100"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_5_17012"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_5_17012"
                  x1="18"
                  y1="23"
                  x2="1082"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#61A6D9" />
                  <stop offset="1" stopColor="#2567A5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom symmetrical SVG */}
          <div className="absolute -bottom-[18px] md:-bottom-[22px] left-0 w-full flex justify-center pointer-events-none rotate-180 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1100"
              height="46"
              viewBox="0 0 1100 46"
              fill="none"
              className="max-w-full"
            >
              <g filter="url(#filter0_f_5_17012_bottom)">
                <path
                  d="M550 28C256.185 28 18 23.5228 18 18L1082 18C1082 23.5228 843.815 28 550 28Z"
                  fill="url(#paint0_linear_5_17012_bottom)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_5_17012_bottom"
                  x="0"
                  y="0"
                  width="1100"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_5_17012"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_5_17012_bottom"
                  x1="18"
                  y1="23"
                  x2="1082"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#61A6D9" />
                  <stop offset="1" stopColor="#2567A5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-border relative z-10">
            {STATS.map((stat, i) => (
              <div
                key={stat.label + i}
                data-stat
                className="relative px-6 py-6 md:py-8 text-center"
              >
                {/* Custom Gradient Divider | */}
                {i !== STATS.length - 1 && (
                  <div
                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[45px] pointer-events-none ${
                      i % 2 !== 0 ? "hidden md:block" : ""
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, #61A6D9 0%, #2567A5 100%)",
                    }}
                  />
                )}

                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  <StatValue value={stat.value} />
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatValue({ value }: { value: string }) {
  // Parse out numeric portion for count animation
  const match = value.match(/^([^\d]*)([\d,]+)([^\d]*)$/);
  if (!match) return <>{value}</>;
  const [, prefix, numStr, suffix] = match;
  const numeric = Number.parseFloat(numStr.replace(/,/g, ""));
  return (
    <span data-count={numeric} data-prefix={prefix} data-suffix={suffix}>
      {prefix}0{suffix}
    </span>
  );
}
