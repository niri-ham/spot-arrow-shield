import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { getTestimonials } from "@/data/testimonials";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials — Spot Arrow Clients" },
      {
        name: "description",
        content:
          "Real reviews from Spot Arrow clients about camera installations, remote monitoring, networking, and ongoing support.",
      },
      { property: "og:title", content: "Spot Arrow Testimonials" },
      { property: "og:description", content: "What homeowners and businesses say about working with Spot Arrow." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  const testimonials = getTestimonials();
  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Client Voices</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Trusted by homeowners and businesses.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Honest feedback from real Spot Arrow clients on installation, support, and the
            day-to-day experience of working with us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="Testimonials" title="What our clients say." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
        </div>
      </section>

      <CTASection
        title="Join the clients who sleep better at night."
        subtitle="Get a no-pressure quote and a system designed around your property."
      />
    </>
  );
}
