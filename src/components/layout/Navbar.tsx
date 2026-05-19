import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* TODO(Lovable Cloud): swap mark for getCompanyLogo().image_url when uploaded */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary shadow-glow">
            <Radar className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">Spot Arrow</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Security · Networking
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-glow">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium",
                  pathname === item.to
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-primary text-primary-foreground font-semibold">
              <Link to="/contact" onClick={() => setOpen(false)}>Request a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
