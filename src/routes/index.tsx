import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cpu, Eye, Cable, KeyRound, Wrench, Home, Building2, Wifi, Smartphone, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/cards/FeatureCard";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Spot Arrow — Security Cameras & Networking in Orlando, FL" },
      {
        name: "description",
        content:
          "Spot Arrow installs and supports customizable security cameras, AI surveillance, access control, structured cabling, and business networking in Orlando, FL.",
      },
      { property: "og:title", content: "Spot Arrow — Security & Networking in Orlando, FL" },
      {
        property: "og:description",
        content:
          "Design, installation, and support for video surveillance, access control, and business networking.",
      },
      { property: "og:url", content: "https://spot-arrow-shield.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://spot-arrow-shield.lovable.app/" }],
  }),
});

const WHY = [
  { icon: "Settings2", title: "Custom security solutions", description: "Every system is designed around your property — never one-size-fits-all." },
  { icon: "Cpu", title: "AI-capable camera systems", description: "Smart detection, people & vehicle alerts, and license plate options." },
  { icon: "Smartphone", title: "Remote monitoring setup", description: "Live view, playback, and alerts on phone, tablet, and PC." },
  { icon: "Wifi", title: "Reliable networking support", description: "Business-grade Wi-Fi and LAN that keeps cameras and devices online." },
  { icon: "Cable", title: "Clean installation", description: "Concealed wiring, organized cabling, and professional finish work." },
  { icon: "Wrench", title: "Ongoing maintenance & support", description: "Long-term technical support so your system keeps performing." },
];

const FOCUS_AREAS = [
  { icon: Home, title: "Residential Security", body: "Protect your home with full-perimeter cameras, smart doorbells, and remote viewing.", tag: "Homes" },
  { icon: Building2, title: "Commercial Security", body: "Surveillance and access systems for offices, retail, warehouses, and restaurants.", tag: "Businesses" },
  { icon: Eye, title: "Remote Monitoring", body: "Watch live feeds, review playback, and get alerts from anywhere on phone or PC.", tag: "Anywhere" },
  { icon: Wifi, title: "Networking & Wi-Fi", body: "LAN design, business Wi-Fi, and optimization for cameras and daily operations.", tag: "Connectivity" },
  { icon: KeyRound, title: "Access Control", body: "Door access, keypads, and keycard entry for restricted areas and businesses.", tag: "Entry" },
  { icon: Wrench, title: "Ongoing Tech Support", body: "Long-term maintenance, repairs, adjustments, and proactive system care.", tag: "Support" },
];

const TRUST_BADGES = [
  { icon: Cpu, label: "AI-capable cameras" },
  { icon: Smartphone, label: "Remote phone & PC viewing" },
  { icon: Cable, label: "Clean structured cabling" },
  { icon: ShieldCheck, label: "Custom-built systems" },
  { icon: Wrench, label: "Professional installation" },
  { icon: Eye, label: "Long-term support" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Security · Networking · Access Control · Orlando, FL
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl leading-[1.05]">
            Modern Security and Networking{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Built for Peace of Mind
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Spot Arrow designs, sells, installs, and supports customizable video surveillance,
            access control, and business networking systems for homes and commercial spaces in
            Orlando, FL.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
              <a href="tel:+18633987761"><Phone className="mr-2 h-4 w-4" /> Call 863-398-7761</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border">
              <Link to="/services">View Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/40 backdrop-blur px-3 py-2.5">
                <b.icon className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs font-medium text-foreground/80">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <SectionHeading
            eyebrow="Who we are"
            title="Reliable protection, designed around your property."
          />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Spot Arrow helps homeowners and businesses protect what matters most through reliable,
            modern security and networking solutions. From AI-capable camera systems to remote
            monitoring, access control, business Wi-Fi, structured cabling, and full system
            integration — we build systems customized to each property's needs.
          </p>
        </div>
      </section>

      {/* Punchline band */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <Punch title="Peace of mind" body="Systems engineered to keep watch so you don't have to." />
            <Punch title="Fast delivery" body="Quick scheduling, efficient installs, no long delays." />
            <Punch title="Proactive protection" body="Smart alerts and ongoing care that stays ahead of issues." />
          </div>
        </div>
      </section>

      {/* What we secure */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="What we secure"
          title="Built for homes, businesses, and everything in between."
          subtitle="Six focus areas that cover the full lifecycle of modern security and connectivity."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOCUS_AREAS.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{f.tag}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            eyebrow="Why Choose Spot Arrow"
            title="Trusted security and networking, end to end."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w) => (
              <FeatureCard key={w.title} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact section (replaces quote band) */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-surface p-10 md:p-16 shadow-elevated">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Get in touch</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Speak with us about your property's needs.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Call{" "}
                <a href="tel:+18633987761" className="text-foreground font-semibold hover:text-primary transition-colors">
                  863 398 7761
                </a>{" "}
                or email{" "}
                <a href="mailto:contact@spotarrowllc.com" className="text-foreground font-semibold hover:text-primary transition-colors break-all">
                  contact@spotarrowllc.com
                </a>{" "}
                to learn more about security camera installation, remote monitoring,
                networking, access control, and structured cabling services in Orlando, FL.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
                  <a href="tel:+18633987761"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <a href="mailto:contact@spotarrowllc.com"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link to="/contact">Contact form <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Punch({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-primary">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
