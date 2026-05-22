import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Let's talk about your property.",
  subtitle = "Call us to learn more about security cameras, networking, access control, and structured cabling in Orlando, FL.",
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
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
                <a href="tel:+18633987761">
                  <Phone className="mr-2 h-4 w-4" /> Call 863-398-7761
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <a href="mailto:contact@spotarrowllc.com">
                  <Mail className="mr-2 h-4 w-4" /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
