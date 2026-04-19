"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.staySystem, href: "#stay-system" },
    { label: t.nav.useCases, href: "#use-cases" },
    { label: t.nav.tokenomics, href: "#tokenomics" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    {
      label: t.nav.whitepaper,
      href: "/OBED_whitepaper_en_0318.pdf",
      target: "_blank" as const,
      rel: "noopener noreferrer",
    },
    { label: t.nav.qa, href: "#qa" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current.querySelectorAll("[data-anim='nav-item']"), {
      y: -14,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.1,
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed  top-0 left-0 right-0 z-50 transition-all duration-300 border-b  border-[#555555]",
        scrolled
          ? "bg-[#0B0F19]/80 border-[#555555] backdrop-blur-xl border-b "
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto  w-full max-w-360 px-4 md:px-6 h-20 flex items-center justify-between gap-5">
        <a href="#top" className="flex items-center gap-2" data-anim="nav-item">
          <Image
            src="/logo_header.png"
            alt="OBED Coin"
            width={140}
            height={140}
            className="w-auto h-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              data-anim="nav-item"
              className="text-[15px] leading-[22px] font-semibold text-[#8B8BA2] hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className="flex items-center gap-3 w-[108px] h-[32px]"
          data-anim="nav-item"
        >
          <a
            href="https://t.me/obedworld"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-9 h-9 rounded-full grid place-items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <TelegramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/CoinObed94777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-9 h-9 rounded-full grid place-items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </a>

          <div className="ml-1 flex items-center p-1 gap-1 rounded-full bg-card border border-border ">
            <button
              type="button"
              onClick={() => setLocale("KO")}
              className={cn(
                "px-3 py-1 text-[15px] leading-[22px] font-semibold rounded-full transition-all",
                locale === "KO"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground",
              )}
            >
              KO
            </button>
            <button
              type="button"
              onClick={() => setLocale("EN")}
              className={cn(
                "px-3 py-1 text-[15px] leading-[22px] font-semibold rounded-full transition-all",
                locale === "EN"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground",
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
        fill="#8B8BA2"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
    >
      <path
        d="M15.575 0L10.579 5.711L6.259 0H0L7.477 9.776L0.391 17.875H3.425L8.894 11.625L13.674 17.875H19.776L11.982 7.571L18.607 0H15.575ZM14.511 16.06L3.542 1.719H5.345L16.191 16.059L14.511 16.06Z"
        fill="#8B8BA2"
      />
    </svg>
  );
}
