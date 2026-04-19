"use client";

import { useRef } from "react";
import { useGsap, gsap } from "@/hooks/use-gsap";
import { useLanguage } from "@/lib/i18n";

export function Whitepaper() {
  const rootRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useGsap(() => {
    gsap.from("[data-wp='heading'] > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
    });
    gsap.from("[data-wp='card']", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-wp='cards']", start: "top 80%" },
    });
  }, []);

  return (
    <section
      ref={rootRef}
      id="whitepaper"
      className="relative px-4 md:px-6 py-20 md:py-28 border-t border-border bg-gradient-to-b from-background via-card/30 to-background"
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at 110% 0%, rgba(120, 180, 255, 0.25), transparent 70%), radial-gradient(ellipse 70% 70% at -10% 100%, rgba(120, 180, 255, 0.25), transparent 70%), #15181B",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div data-wp="heading" className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] text-primary font-semibold">
            {t.whitepaper.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t.whitepaper.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.whitepaper.description}
          </p>
        </div>

        <div data-wp="cards" className="mt-12 grid md:grid-cols-2 gap-5">
          {t.whitepaper.papers.map((paper) => (
            <PaperCard
              key={paper.meta}
              lang={paper.lang}
              title={paper.title}
              meta={paper.meta}
              href={paper.href}
              downloadLabel={t.whitepaper.download}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PaperCard({
  lang,
  title,
  meta,
  href,
  downloadLabel,
}: {
  lang: string;
  title: string;
  meta: string;
  href: string;
  downloadLabel: string;
}) {
  return (
    <div
      data-wp="card"
      className="group relative rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-7 hover:border-primary/60 transition-colors flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl grid place-items-center bg-primary/10 border border-primary/30 text-primary shrink-0">
        <DocIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <div className="text-[11px] sm:text-xs text-muted-foreground">
          {lang}
        </div>
        <div className="mt-1 text-sm sm:text-base font-semibold text-foreground truncate">
          {title}
        </div>
        <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground truncate">
          {meta}
        </div>
      </div>
      <a
        href={href}
        download={meta}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-glow-cyan transition-shadow"
      >
        <DownloadIcon className="w-4 h-4" />
        {downloadLabel}
      </a>
    </div>
  );
}

function DocIcon({ className }: { className?: string }) {
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
        d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"
        strokeLinejoin="round"
      />
      <path d="M14 3v6h6M8 13h8M8 17h6" strokeLinecap="round" />
    </svg>
  );
}
function DownloadIcon({ className }: { className?: string }) {
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
        d="M12 4v12m0 0 4-4m-4 4-4-4M4 20h16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
