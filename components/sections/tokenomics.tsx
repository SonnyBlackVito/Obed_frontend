"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";

export function Tokenomics() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGsap(() => {
    gsap.from("[data-tok='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });
    gsap.from("[data-tok='card']", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-tok='grid']", start: "top 80%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      id="tokenomics"
      className="relative px-4 md:px-6 py-20 md:py-28 overflow-hidden"
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
          TOKENOMICS
        </span>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div data-tok="heading" className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Sustainable Token Economy
          </h2>
          <p className="mt-5 text-[#8B8BA2] text-[15px] md:text-[18px]">
            OBED Coin is built on a stable token economy centered around the
            Reserve Fund.
          </p>
        </div>

        <div
          data-tok="grid"
          className="mt-16 md:mt-20 grid md:grid-cols-5 gap-6"
        >
          <Card
            className="md:col-span-3 flex flex-col items-center justify-center text-center p-8 md:p-12"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(93, 162, 214, 0.25), transparent 100%), #15181B",
            }}
          >
            <div className="text-6xl md:text-7xl font-extrabold text-[#00A3FF] drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]">
              5%
            </div>
            <div className="mt-4 text-[18px] md:text-[20px] font-bold text-white">
              Reserve Fund
            </div>
            <p className="mt-4 text-[14px] md:text-[15px] text-[#8B8BA2] leading-relaxed max-w-[400px]">
              5% of total supply is managed as a reserve fund for Stay Price
              maintenance and price stabilization.
            </p>
          </Card>

          <Card
            className="md:col-span-2 flex flex-col items-center justify-center text-center p-8 md:p-12"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(93, 162, 214, 0.25), transparent 100%), #15181B",
            }}
          >
            <div className="text-5xl md:text-7xl font-extrabold text-[#00A3FF] drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]">
              Monthly
            </div>
            <div className="mt-4 text-[18px] md:text-[20px] font-bold text-white">
              Stay Price Review
            </div>
            <p className="mt-4 text-[14px] md:text-[15px] text-[#8B8BA2] leading-relaxed max-w-[280px]">
              The committee reviews and publishes the Stay Price monthly based
              on market data.
            </p>
          </Card>

          <Card
            className="md:col-span-2 flex flex-col items-center justify-center text-center p-8 md:p-12"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(93, 162, 214, 0.25), transparent 100%), #15181B",
            }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-[#00A3FF] drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]">
              글로벌 거래소
            </div>
            <div className="mt-4 text-[18px] md:text-[20px] font-bold text-white">
              Exchange Listed
            </div>
            <p className="mt-4 text-[14px] md:text-[15px] text-[#8B8BA2] leading-relaxed max-w-[260px]">
              Listed on a global cryptocurrency exchange — accessible to crypto
              users worldwide.
            </p>
          </Card>

          <Card
            className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(93, 162, 214, 0.2), transparent 100%), radial-gradient(ellipse 50% 50% at 50% 100%, rgba(93, 162, 214, 0.15), transparent 100%), #15181B",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full text-center">
              <div>
                <div className="text-[14px] font-bold text-white uppercase tracking-wider">
                  STAY PRICE WEIGHTING
                </div>
                <div className="mt-6 flex flex-col space-y-3 text-[#8B8BA2] text-[14px] md:text-[15px]">
                  <span>OBED Market Avg (30-day) 40%</span>
                  <span>Platform Price Index 35%</span>
                  <span>Reserve Fund Balance 25%</span>
                </div>
              </div>
              <div>
                <div className="text-[14px] font-bold text-white uppercase tracking-wider">
                  FUND MANAGEMENT
                </div>
                <div className="mt-6 flex flex-col space-y-3 text-[#8B8BA2] text-[14px] md:text-[15px]">
                  <span>Multi-sig wallet management</span>
                  <span>Monthly public disclosure</span>
                  <span>Continuously replenished via platform fees</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      data-tok="card"
      className={`relative rounded-[24px] border border-[#5DA2D6]/30 hover:border-[#5DA2D6]/60 transition-colors overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
