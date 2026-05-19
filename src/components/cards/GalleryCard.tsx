import type { GalleryImage } from "@/data/types";

export function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <figure className="group relative overflow-hidden rounded-xl border border-border bg-card">
      {/* TODO(Lovable Cloud): image_url will come from Supabase Storage */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.image_url}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-12 opacity-0 transition-opacity group-hover:opacity-100">
        <p className="text-sm font-medium">{image.caption ?? image.alt}</p>
        <p className="text-xs text-muted-foreground capitalize mt-0.5">
          {image.category.replace("-", " ")}
        </p>
      </div>
    </figure>
  );
}
