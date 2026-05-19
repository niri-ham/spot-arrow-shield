// Database-ready content types.
// TODO(Lovable Cloud): Each interface maps 1:1 to a future Supabase table.
// Swap the get* functions in sibling files to query Supabase instead of
// returning mock arrays — no UI changes required.

export type GalleryCategory =
  | "cameras"
  | "networking"
  | "access-control"
  | "cabling"
  | "commercial"
  | "residential";

export interface GalleryImage {
  id: string;
  image_url: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  role?: string;
  quote: string;
  rating: number; // 1-5
  photo_url: string;
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
  image_url: string | null; // null → render text logo
  alt: string;
}

export interface ContactSubmission {
  full_name: string;
  email: string;
  phone: string;
  property_kind: "home" | "business";
  property_type: string;
  service_needed: string;
  camera_count: string;
  needs_remote_monitoring: boolean;
  needs_networking: boolean;
  needs_access_control: boolean;
  city: string;
  message: string;
}
