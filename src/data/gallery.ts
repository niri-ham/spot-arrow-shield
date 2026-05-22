import type { GalleryImage } from "./types";

// ============================================================================
// Spot Arrow — Gallery image registry (database-ready)
// ----------------------------------------------------------------------------
// TODO(Lovable Cloud / Supabase Storage):
//   1. Create a public storage bucket: `gallery`
//   2. Upload each image and copy its public URL.
//   3. Create a `gallery_images` table with columns:
//        id (uuid, pk), title (text), category (text),
//        image_url (text), alt_text (text),
//        created_at (timestamptz, default now())
//   4. Replace getGalleryImages() with:
//        const { data } = await supabase
//          .from("gallery_images")
//          .select("*")
//          .order("created_at", { ascending: false });
//        return data ?? [];
//
// Until then, this array stays empty so the Gallery page renders a clean
// empty state — NO placeholder or stock images per project policy.
// ============================================================================

const GALLERY: GalleryImage[] = [];

export const getGalleryImages = (): GalleryImage[] => GALLERY;
