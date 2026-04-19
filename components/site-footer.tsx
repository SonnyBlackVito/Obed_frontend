import { cn } from "@/lib/utils";
import Image from "next/image";

function Divider() {
  return (
    <span
      aria-hidden
      className="hidden md:inline-block h-5 w-px bg-border/60 shrink-0"
    />
  );
}

function InfoItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("text-xs sm:text-sm md:text-base text-foreground/90", className)}>
      <span className="font-semibold">{label} : </span>
      <span className="text-foreground/80">{value}</span>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden border-t border-border"
      style={{ backgroundColor: "#05090d" }}
    >
      {/* Decorative watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center select-none"
      >
        <span
          className="font-bold tracking-tight leading-none text-[28vw] sm:text-[22vw] md:text-[18vw] lg:text-[16vw] translate-y-[10%] translate-x-[-60%]"
          style={{
            color: "rgba(255,255,255,0.035)",
            letterSpacing: "-0.02em",
          }}
        >
          OBED
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14 md:py-20 flex flex-col items-center text-center">
        {/* Wordmark */}
        <div className="flex items-baseline">
          <Image
            src="/logo_header.png"
            alt="OBED"
            width={200}
            height={200}
            className="w-[120px] sm:w-[160px] md:w-[200px] h-auto"
          />
        </div>

        {/* Info row 1 */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6">
          <InfoItem label="Company" value="주식회사 오벳" />
          <Divider />
          <InfoItem label="CEO" value="유경수 (RYU KYUNG SOO)" />
          <Divider />
          <InfoItem label="Reg. No." value="899-81-03634" />
        </div>

        {/* Info row 2 */}
        <div className="mt-2 sm:mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6">
          <InfoItem
            label="Address"
            value="경기도 포천시 화현면 금강로 3749, 1층"
          />
          <Divider />
          <InfoItem
            label="Business Type"
            value="Wholesale, Retail & Services"
          />
        </div>

        {/* Copyright */}
        <p className="mt-10 sm:mt-14 md:mt-20 text-xs sm:text-sm text-muted-foreground">
          © 2026 주식회사 오벳 · OBED . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
