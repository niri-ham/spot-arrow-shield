import type { GalleryImage } from "./types";

// TODO(Lovable Cloud): replace with supabase.from("gallery_images").select()
// Upload real photos to Supabase Storage and store the public URL in image_url.
// Copyright-free placeholders from Unsplash (CC0-like license) for now.
const GALLERY: GalleryImage[] = [
  {
    id: "g1",
    image_url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    alt: "Modern security camera mounted on building exterior",
    category: "cameras",
    caption: "4K dome camera — commercial install",
    created_at: "2025-01-10",
  },
  {
    id: "g2",
    image_url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    alt: "Server rack with structured cabling",
    category: "networking",
    caption: "Server room — networking backbone",
    created_at: "2025-01-12",
  },
  {
    id: "g3",
    image_url: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=1200&q=80",
    alt: "Keypad access control panel at office door",
    category: "access-control",
    caption: "Keypad access — office entry",
    created_at: "2025-01-14",
  },
  {
    id: "g4",
    image_url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80",
    alt: "Organized network cabling in patch panel",
    category: "cabling",
    caption: "Structured cabling — patch panel",
    created_at: "2025-01-15",
  },
  {
    id: "g5",
    image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    alt: "Modern commercial office space",
    category: "commercial",
    caption: "Commercial install — corporate office",
    created_at: "2025-01-16",
  },
  {
    id: "g6",
    image_url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
    alt: "Residential home exterior at dusk",
    category: "residential",
    caption: "Residential perimeter coverage",
    created_at: "2025-01-18",
  },
  {
    id: "g7",
    image_url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200&q=80",
    alt: "Outdoor bullet camera",
    category: "cameras",
    caption: "Bullet camera — perimeter monitoring",
    created_at: "2025-01-20",
  },
  {
    id: "g8",
    image_url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    alt: "Network switch with active connections",
    category: "networking",
    caption: "Managed switch deployment",
    created_at: "2025-01-21",
  },
  {
    id: "g9",
    image_url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    alt: "Technician installing access control reader",
    category: "access-control",
    caption: "Card reader installation",
    created_at: "2025-01-22",
  },
  {
    id: "g10",
    image_url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&q=80",
    alt: "Fiber optic cables glowing",
    category: "cabling",
    caption: "Fiber optic run",
    created_at: "2025-01-23",
  },
  {
    id: "g11",
    image_url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    alt: "Retail store interior with cameras",
    category: "commercial",
    caption: "Retail surveillance system",
    created_at: "2025-01-24",
  },
  {
    id: "g12",
    image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    alt: "Modern home with smart security",
    category: "residential",
    caption: "Smart home integration",
    created_at: "2025-01-25",
  },
];

export const getGalleryImages = (): GalleryImage[] => GALLERY;
