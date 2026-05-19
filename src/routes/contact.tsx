import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Spot Arrow — Request a Security & Networking Quote" },
      {
        name: "description",
        content:
          "Request a quote for security cameras, access control, structured cabling, and business networking. Spot Arrow responds within one business day.",
      },
      { property: "og:title", content: "Contact Spot Arrow" },
      { property: "og:description", content: "Request a security and networking quote today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Spot Arrow",
          telephone: "+1-555-000-0000",
          email: "hello@spotarrow.com",
          areaServed: "Local service area",
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
});

const INFO = [
  { icon: Phone, label: "Phone", value: "(555) 000-0000" },
  { icon: Mail, label: "Email", value: "hello@spotarrow.com" },
  { icon: MapPin, label: "Service area", value: "Local — call for coverage" },
  { icon: Clock, label: "Business hours", value: "Mon–Fri · 8am–6pm" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Request a Quote</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Tell us about your property — we'll handle the rest.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Share a few details about your space and goals. A Spot Arrow specialist will follow up
            within one business day with recommendations and pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
          <aside className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Get in touch</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Prefer to talk first? Reach out directly — we'll answer your questions and walk
              through your options before any commitment.
            </p>
            <div className="mt-4 space-y-3">
              {INFO.map((i) => (
                <div key={i.label} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/20 shrink-0">
                    <i.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{i.label}</p>
                    <p className="text-sm font-medium mt-0.5">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to protect your property?"
        subtitle="Request a quote today — peace of mind starts with one conversation."
      />
    </>
  );
}
