import type { Testimonial } from "./types";

// TODO(Lovable Cloud): replace with supabase.from("testimonials").select()
const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Michael R.",
    role: "Business Owner",
    location: "Commercial Client",
    quote:
      "Spot Arrow helped us upgrade our camera system and set up remote viewing for our business. The installation was clean, fast, and easy to use.",
    rating: 5,
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    created_at: "2025-02-01",
  },
  {
    id: "t2",
    name: "Priya S.",
    role: "Homeowner",
    location: "Residential Client",
    quote:
      "We needed cameras and better Wi-Fi for our property. Spot Arrow gave us a customized setup and explained everything clearly.",
    rating: 5,
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    created_at: "2025-02-05",
  },
  {
    id: "t3",
    name: "David L.",
    role: "Property Manager",
    location: "Commercial Client",
    quote:
      "Professional service from start to finish. The system works great, and I feel much more secure knowing I can monitor everything from my phone.",
    rating: 5,
    photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    created_at: "2025-02-10",
  },
];

export const getTestimonials = (): Testimonial[] => TESTIMONIALS;
