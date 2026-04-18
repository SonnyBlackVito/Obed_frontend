export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative w-7 h-7 grid place-items-center">
            <div className="absolute inset-0 rounded-full border-2 border-primary" />
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <span className="text-sm font-semibold text-foreground">OBED Coin</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} OBED Labs. OBED Coin — Your coin&apos;s value, always protected.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
