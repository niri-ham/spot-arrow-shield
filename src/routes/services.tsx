import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { getServices, getProducts } from "@/data/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Security Cameras, Networking & Access Control | Spot Arrow" },
      {
        name: "description",
        content:
          "Video surveillance installation, remote monitoring, network design, access control, structured cabling, and systems integration for homes and businesses in Orlando, FL.",
      },
      { property: "og:title", content: "Spot Arrow Services" },
      { property: "og:description", content: "Full-service security and networking installation and support in Orlando, FL." },
      { property: "og:url", content: "https://spot-arrow-shield.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://spot-arrow-shield.lovable.app/services" }],
  }),
});

function ServicesPage() {
  const services = getServices();
  const products = getProducts();

  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Services & Products</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Everything you need to protect, connect, and control.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Eight core services covering the full lifecycle — from camera install to long-term
            support — plus the equipment to back them up.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="Services" title="What we do." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            eyebrow="Products"
            title="The equipment behind every install."
            subtitle="We source and install professional-grade equipment matched to your property and budget."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[p.icon] ?? Icons.Package;
              return (
                <div
                  key={p.id}
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="mt-4 font-semibold leading-tight">{p.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{p.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which services you need?"
        subtitle="Contact Spot Arrow for security and networking solutions tailored to your property in Orlando, FL."
      />
    </>
  );
}
