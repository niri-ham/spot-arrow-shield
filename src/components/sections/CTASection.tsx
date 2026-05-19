import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
}

export function CTASection({
  title = "Ready to protect your property?",
  subtitle = "Request a quote today — we'll design a custom system built for your space.",
  primaryLabel = "Request a Quote",
  primaryTo = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-surface p-10 md:p-16 shadow-elevated">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {title}
              </h2>
              <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
            </div>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
              <Link to={primaryTo}>
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
