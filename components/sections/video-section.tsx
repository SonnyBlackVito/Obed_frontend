"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { useLanguage } from "@/lib/i18n";

export function VideoSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { t } = useLanguage();

  useGsap(() => {
    gsap.from("[data-video-title]", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });
    gsap.from("[data-video-frame]", {
      y: 60,
      opacity: 0,
      scale: 0.96,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    });
    gsap.from("[data-video-stage]", {
      opacity: 0,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    });
    gsap.from("[data-video-beam]", {
      opacity: 0,
      scaleY: 0.6,
      transformOrigin: "top center",
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative px-4 md:px-6 
             py-4 sm:py-6 md:py-10 lg:py-28 
             overflow-hidden bg-background
             bg-[url('/obed_offical_video.png')] bg-no-repeat bg-cover
             bg-[center_top] md:bg-[center_60%] lg:bg-[0%_120%]"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Stage background: dark room + overhead light cone + lit floor */}
        <div
          data-video-stage
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[28px]"
          style={{
            background:
              "linear-gradient(180deg, #05090f 0%, #070d18 55%, #0a1628 100%)",
            boxShadow:
              "0 60px 120px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* Overhead light beam / inverted spotlight cone */}
          <div
            data-video-beam
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[78%] h-[55%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(180,215,245,0.55) 0%, rgba(110,170,220,0.3) 35%, rgba(60,110,170,0.12) 70%, transparent 100%)",
              clipPath: "polygon(18% 0%, 82% 0%, 95% 100%, 5% 100%)",
              filter: "blur(2px)",
            }}
          />
          {/* Core brighter beam */}
          <div
            data-video-beam
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[50%] h-[45%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(220,235,250,0.55) 0%, rgba(150,195,235,0.25) 50%, transparent 100%)",
              clipPath: "polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)",
              filter: "blur(4px)",
            }}
          />

          {/* Illuminated blue floor */}
          <div
            className="absolute inset-x-0 bottom-0 h-[55%]"
            style={{
              background:
                "radial-gradient(ellipse 75% 95% at 50% 0%, rgba(120,180,230,0.75) 0%, rgba(60,120,180,0.5) 30%, rgba(25,55,100,0.3) 60%, transparent 90%)",
            }}
          />

          {/* Horizon line where back wall meets floor */}
          <div
            className="absolute left-[4%] right-[4%]"
            style={{
              top: "45%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(190,220,245,0.95) 50%, transparent 100%)",
              filter: "blur(1px)",
            }}
          />

          {/* Soft horizon halo */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: "38%",
              height: "100px",
              background:
                "radial-gradient(ellipse 45% 100% at 50% 100%, rgba(170,210,240,0.5) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative text-center px-4 md:px-10 pt-10 md:pt-14 pb-12 md:pb-16">
          <h2
            data-video-title
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance"
            style={{
              textShadow:
                "0 2px 20px rgba(0,0,0,0.6), 0 0 40px rgba(150,195,235,0.25)",
            }}
          >
            {t.video.title}
          </h2>

          <div
            data-video-frame
            className="mt-10 md:mt-14 relative mx-auto max-w-4xl rounded-2xl overflow-hidden aspect-video"
            style={{
              boxShadow:
                "0 40px 80px -20px rgba(0,0,0,0.75), 0 0 60px rgba(120,180,230,0.25), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label={t.video.playLabel}
              >
                <Image
                  src="/obed-video-thumb.jpg"
                  alt="OBED Coin official video thumbnail featuring company representative"
                  fill
                  className="object-cover opacity-95 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="w-20 h-20 rounded-full grid place-items-center bg-primary text-primary-foreground shadow-glow-cyan-lg transition-transform group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 ml-1"
                    >
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </span>
                </div>
              </button>
            ) : (
              <video
                src="/OBED_Coin.mp4"
                autoPlay
                controls
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
