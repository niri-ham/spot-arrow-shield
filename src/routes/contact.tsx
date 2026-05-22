import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Spot Arrow — Security & Networking in Orlando, FL" },
      {
        name: "description",
        content:
          "Contact Spot Arrow for security cameras, access control, structured cabling, and business networking in Orlando, FL. Call 863-398-7761 or email contact@spotarrowllc.com.",
      },
      { property: "og:title", content: "Contact Spot Arrow" },
      { property: "og:description", content: "Speak with us about your property's security and networking needs in Orlando, FL." },
      { property: "og:url", content: "https://spot-arrow-shield.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://spot-arrow-shield.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Spot Arrow",
          telephone: "+1-863-398-7761",
          email: ["contact@spotarrowllc.com", "vpatel7761@gmail.com"],
          areaServed: "Orlando, FL",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Orlando",
            addressRegion: "FL",
            addressCountry: "US",
          },
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
});

// TODO: replace placeholder business hours when finalized.
const INFO = [
  { icon: Phone, label: "Phone", value: "863-398-7761", href: "tel:+18633987761" },
  { icon: Mail, label: "Email", value: "contact@spotarrowllc.com", href: "mailto:contact@spotarrowllc.com" },
  { icon: Mail, label: "Email", value: "vpatel7761@gmail.com", href: "mailto:vpatel7761@gmail.com" },
  { icon: MapPin, label: "Service area", value: "Orlando, FL" },
  { icon: Clock, label: "Business hours", value: "Mon–Fri · 8am–6pm" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Contact Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Speak with us about your property's needs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Reach out for more information about security camera installation, remote monitoring,
            networking, access control, and structured cabling in Orlando, FL.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
          <aside className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Get in touch</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Prefer to talk first? Reach out directly — we'll answer your questions and walk
              through your options.
            </p>
            <div className="mt-4 space-y-3">
              {INFO.map((i, idx) => {
                const content = (
                  <>
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/20 shrink-0">
                      <i.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{i.label}</p>
                      <p className="text-sm font-medium mt-0.5 break-all">{i.value}</p>
                    </div>
                  </>
                );
                return i.href ? (
                  <a
                    key={idx}
                    href={i.href}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
