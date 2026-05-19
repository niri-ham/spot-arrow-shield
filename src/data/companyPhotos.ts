import type { CompanyPhoto } from "./types";

// TODO(Lovable Cloud): replace with supabase.from("company_photos").select()
// Real team and project photos will be uploaded to Supabase Storage.
const COMPANY_PHOTOS: CompanyPhoto[] = [
  {
    id: "cp1",
    image_url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    alt: "Spot Arrow technician working on a security system",
    slot: "team",
    created_at: "2025-01-05",
  },
  {
    id: "cp2",
    image_url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    alt: "Field technician installing network equipment",
    slot: "work",
    created_at: "2025-01-06",
  },
  {
    id: "cp3",
    image_url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    alt: "Spot Arrow office workspace",
    slot: "office",
    created_at: "2025-01-07",
  },
  {
    id: "cp4",
    image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    alt: "Security and networking hardware",
    slot: "hero",
    created_at: "2025-01-08",
  },
];

export const getCompanyPhotos = () => COMPANY_PHOTOS;
export const getCompanyPhotoBySlot = (slot: CompanyPhoto["slot"]) =>
  COMPANY_PHOTOS.find((p) => p.slot === slot);
