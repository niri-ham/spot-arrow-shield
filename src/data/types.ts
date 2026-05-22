// Database-ready content types.
// TODO(Lovable Cloud): Each interface maps 1:1 to a future Supabase table.
// Swap the get* functions in sibling files to query Supabase instead of
// returning mock arrays — no UI changes required.

export type GalleryCategory =
  | "cameras"
  | "networking"
  | "access-control"
  | "cabling"
  | "installations"
  | "equipment";

export interface GalleryImage {
  id: string;
  title: string;
  category: GalleryCategory;
  image_url: string; // permanent URL (Supabase Storage public URL when wired)
  alt_text: string;
  created_at: string;
}

export interface CompanyPhoto {
  id: string;
  image_url: string;
  alt: string;
  slot: "team" | "work" | "office" | "hero";
  created_at: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string; // lucide-react icon name
  summary: string;
  bullets: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface CompanyLogo {
  id: string;
  image_url: string | null;
  alt: string;
}

export interface ContactSubmission {
  full_name: string;
  email: string;
  phone: string;
  property_kind: "home" | "business";
  service_needed: string;
  city: string;
  message: string;
}
