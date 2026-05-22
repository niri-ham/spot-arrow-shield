import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { getCompanyPhotos } from "@/data/companyPhotos";
import vasantPhoto from "@/assets/vasant-patel.jpeg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Spot Arrow — Custom Security & Networking in Orlando, FL" },
      {
        name: "description",
        content:
          "Spot Arrow makes modern security and networking simple, reliable, and accessible for homes and businesses in Orlando, FL. Led by President Vasant Patel.",
      },
      { property: "og:title", content: "About Spot Arrow" },
      { property: "og:description", content: "Custom security and networking, designed and supported end to end in Orlando, FL." },
      { property: "og:url", content: "https://spot-arrow-shield.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://spot-arrow-shield.lovable.app/about" }],
  }),
});

const VALUES = [
  { icon: "Settings2", title: "Custom-built systems", description: "We design every install around the property, the people, and the workflow." },
  { icon: "HardHat", title: "Professional installation", description: "Concealed wiring, weather-rated mounting, and clean finish work." },
  { icon: "Cpu", title: "AI-capable cameras", description: "Smart detection that filters noise so the alerts that matter get through." },
  { icon: "LifeBuoy", title: "Long-term support", description: "We stay with you — tuning, repairs, and proactive maintenance." },
];

function AboutPage() {
  const photos = getCompanyPhotos();
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">About Spot Arrow</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Security and networking that's actually built for you.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            We make modern protection simple, reliable, and accessible — for homes, offices,
            warehouses, retail, and everything in between across Orlando, FL.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Spot Arrow was created to make modern security and networking simple, reliable, and
              accessible for homes and businesses. Every property has different needs, which is why
              we focus on fully customizable systems instead of one-size-fits-all packages.
            </p>
            <p>
              Whether a client needs cameras for a home, surveillance for a business, access
              control for restricted areas, structured cabling, or a stronger network setup,
              Spot Arrow designs systems built around real-world protection and long-term
              reliability.
            </p>
            <p>
              Our work combines high-quality equipment, clean installation, remote monitoring, and
              ongoing technical support. We help clients not only install security systems, but
              also understand how to use them effectively. The goal is proactive protection,
              dependable service, and peace of mind — from the first consultation through
              long-term maintenance.
            </p>
          </div>
          <aside className="lg:col-span-5 grid grid-cols-2 gap-3 content-start">
            {/* TODO(Lovable Cloud): photos pulled from getCompanyPhotos() — wire to supabase later */}
            {photos.map((p, i) => (
              <img
                key={p.id}
                src={p.image_url}
                alt={p.alt}
                loading="lazy"
                className={`rounded-xl border border-border object-cover w-full ${
                  i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              />
            ))}
          </aside>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading eyebrow="Leadership" title="Meet our president." />
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={vasantPhoto}
                  alt="Vasant Patel, President of Spot Arrow"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">President</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Vasant Patel</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Leading Spot Arrow's security and networking work across Orlando, FL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading eyebrow="How we work" title="The Spot Arrow standard." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => <FeatureCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      <CTASection
        title="Reach out for more information."
        subtitle="Call us to learn how we can design a security and networking system around your property."
      />
    </>
  );
}
