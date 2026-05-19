import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40">
      <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15" />
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mt-4 text-foreground/90 leading-relaxed">"{testimonial.quote}"</p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
        {/* TODO(Lovable Cloud): photo_url will come from supabase storage */}
        <img
          src={testimonial.photo_url}
          alt={testimonial.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
        />
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
