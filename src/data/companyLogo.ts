import type { CompanyLogo } from "./types";

// TODO(Lovable Cloud): replace with supabase.from("company_logo").select().single()
// When the real logo is uploaded, set image_url to the Supabase Storage URL.
const LOGO: CompanyLogo = {
  id: "logo-1",
  image_url: null, // null → renders text/icon mark; upload later via DB
  alt: "Spot Arrow",
};

export const getCompanyLogo = (): CompanyLogo => LOGO;
