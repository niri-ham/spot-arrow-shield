import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { CTASection } from "@/components/sections/CTASection";
import { getGalleryImages } from "@/data/gallery";
import type { GalleryCategory } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Camera & Network Installations | Spot Arrow" },
      {
        name: "description",
        content:
          "Project gallery: security camera installations, structured cabling, access control panels, and network deployments for residential and commercial clients in Orlando, FL.",
      },
      { property: "og:title", content: "Spot Arrow Project Gallery" },
      { property: "og:description", content: "Cameras, networking, access control, and cabling installations." },
      { property: "og:url", content: "https://spot-arrow-shield.lovable.app/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://spot-arrow-shield.lovable.app/gallery" }],
  }),
});

const FILTERS: { label: string; value: GalleryCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Cameras", value: "cameras" },
  { label: "Networking", value: "networking" },
  { label: "Access Control", value: "access-control" },
  { label: "Cabling", value: "cabling" },
  { label: "Installations", value: "installations" },
  { label: "Equipment", value: "equipment" },
];

function GalleryPage() {
  const all = getGalleryImages();
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? all : all.filter((g) => g.category === filter)),
    [all, filter],
  );

  const hasImages = all.length > 0;

  return (
    <>
      <section className="bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Project Gallery</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Real installs. Clean work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A look at recent camera, networking, access control, and cabling projects across
            residential and commercial properties in Orlando, FL.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {hasImages && (
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                  filter === f.value
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {!hasImages ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-border bg-card/40 p-12 md:p-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 font-display text-2xl md:text-3xl font-semibold">
              Gallery coming soon
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We're putting together photos of recent camera, networking, access control, and
              cabling projects across Orlando, FL. Check back shortly — or reach out to see
              examples of our work.
            </p>
            <Button asChild className="mt-6 bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
              <a href="tel:+18633987761">
                <Phone className="mr-2 h-4 w-4" /> Call 863-398-7761
              </a>
            </Button>
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No images in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img) => <GalleryCard key={img.id} image={img} />)}
          </div>
        )}
      </section>

      <CTASection title="Want to see something similar at your property?" />
    </>
  );
}
