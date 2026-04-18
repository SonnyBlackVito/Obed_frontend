"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Stay System", href: "#stay-system" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Whitepaper", href: "#whitepaper" },
  { label: "Q&A", href: "#qa" },
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"KO" | "EN">("EN");

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#555555]",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2" data-anim="nav-item">
          <Image
            src="/logo_header.png"
            alt="OBED Coin"
            width={140}
            height={140}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-anim="nav-item"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3" data-anim="nav-item">
          <a
            href="#"
            aria-label="Telegram"
            className="w-9 h-9 rounded-full grid place-items-center text-muted-foreground hover:text-foreground transition-colors">
            <TelegramIcon className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="X"
            className="w-9 h-9 rounded-full grid place-items-center text-muted-foreground hover:text-foreground transition-colors">
            <XIcon className="w-4 h-4" />
          </a>

          <div className="ml-1 flex items-center p-1 rounded-full bg-card border border-border">
            <button
              type="button"
              onClick={() => setLang("KO")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-full transition-all",
                lang === "KO"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground",
              )}>
              KO
            </button>
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={cn(
                "px-3 py-1 text-xs font-semibold rounded-full transition-all",
                lang === "EN"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground",
              )}>
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
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden>
      <path d="M22 2 2 10.5l6.5 2.5L11 20l3-4 5 3 3-17Zm-4.3 4.2L9.5 13l-.3 4 2.2-2 4.8 3.5 1.5-12.3Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden>
      <path d="M18.244 2H21l-6.53 7.46L22 22h-6.828l-4.77-6.24L4.8 22H2.04l6.99-7.98L2 2h6.914l4.32 5.72L18.244 2Zm-2.39 18h1.49L7.23 4H5.63l10.224 16Z" />
    </svg>
  );
}
