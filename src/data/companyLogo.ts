import type { CompanyLogo } from "./types";
import logoUrl from "@/assets/spot-arrow-logo.png";

// Permanent branding asset, bundled with the app.
// TODO(Lovable Cloud): if uploading versioned logos later, swap to
// supabase.from("company_logo").select().single() and use the public URL.
const LOGO: CompanyLogo = {
  id: "logo-1",
  image_url: logoUrl,
  alt: "Spot Arrow — Security, Networking & Access Control",
};

export const getCompanyLogo = (): CompanyLogo => LOGO;
