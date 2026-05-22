## Spot Arrow — Rebrand, Cleanup & Content Update

### 1. Permanent brand assets (src/assets — bundled)
- Copy uploaded logo → `src/assets/spot-arrow-logo.png` (ES6 import, permanent bundle).
- Copy uploaded president photo → `src/assets/vasant-patel.jpeg`.
- Use logo in **Navbar** (replacing the Radar icon mark) and **Footer**.
- Logo will be displayed on the dark background as-is (preserves transparency).

### 2. Gallery storage (database-ready, no placeholders)
- Empty out `src/data/gallery.ts` → `GALLERY: GalleryImage[] = []`.
- Update `GalleryImage` type to the requested DB shape:
  `{ id, title, category, image_url, alt_text, created_at }`.
- Extend `GalleryCategory` union: `cameras | networking | access-control | cabling | installations | equipment`.
- Add strong TODO(Lovable Cloud / Supabase Storage) comments documenting:
  - Bucket name suggestion (`gallery`), public URL pattern.
  - 1:1 mapping to a future `gallery_images` table.
- `gallery.tsx` will show a polished empty state ("Gallery coming soon — projects being added") until you upload images. Category filters render only when images exist.
- `GalleryCard.tsx` updated to use `image.title` and `image.alt_text`.

### 3. Global content swaps (no remnants)
| Old | New |
|---|---|
| (555) 000-0000 | **863 398 7761** (formatted: `863-398-7761`, tel:`+18633987761`) |
| hello@spotarrow.com | **vpatel7761@gmail.com** + **contact@spotarrowllc.com** |
| Local service area | **Orlando, FL** |
| "Request a Quote" / quote wording | "Call Now" / "Contact Us" / softer language |

Verification: after edits, grep the repo for `555`, `hello@spotarrow`, `Local service`, `Request a Quote`, `quote`, `testimonial`, `Testimonial` — fix any survivors.

### 4. Remove testimonials completely
- Delete `src/routes/testimonials.tsx`, `src/components/cards/TestimonialCard.tsx`, `src/data/testimonials.ts`.
- Remove `Testimonial` interface from `src/data/types.ts`.
- Remove `Testimonials` nav link from Navbar (desktop + mobile) and Footer.
- Remove the testimonials section from `index.tsx`.

### 5. Navigation
- Navbar NAV array: Home, About Us, Services, Gallery, Contact Us.
- Header CTA button → **"Call Now"** with `href="tel:+18633987761"` (using anchor, not Link).
- Mobile menu mirrors the same.

### 6. Home page (`index.tsx`)
- Hero CTAs: **Call Now** (tel) + **View Our Services** (Link).
- Keep company intro, punch band, focus areas, "Why Choose" cards.
- Replace bottom CTA band with a **Contact section** containing exactly:
  > "Call 863 398 7761 or email contact@spotarrowllc.com to learn more about security camera installation, remote monitoring, networking, access control, and structured cabling services in Orlando, FL."
  With two buttons: `tel:` and `mailto:contact@spotarrowllc.com`.
- Remove `og:description` quote wording; rewrite description.

### 7. About page
- Add **Leadership** section with a single professional card:
  - Circular/rounded photo (`src/assets/vasant-patel.jpeg`)
  - "Vasant Patel"
  - "President"
  - No invented bio.
- Bottom CTA → repurposed neutral "Contact Spot Arrow" band (not a quote band).

### 8. Services page
- Bottom CTA → neutral contact band.
- SEO meta: drop quote wording.

### 9. Contact page (`contact.tsx`)
- Replace `QuoteForm` with a new **`ContactForm`** (`src/components/forms/ContactForm.tsx`):
  - Fields: full_name, email, phone, property_kind (home/business radio), service_needed (select), city, message.
  - `service_needed` options (exactly as requested):
    Security camera installation · Remote monitoring setup · Camera maintenance and technical support · Network design and installation · Network optimization and security · Access control system installation · Structured cabling · Systems integration · Other.
  - Submit logs + success state. TODO marker for Supabase insert.
- Info block: Phone `863-398-7761`, both emails (each clickable), Service area `Orlando, FL`, Hours `Mon–Fri 8am–6pm` (placeholder noted in comment).
- Remove quote CTA at bottom.
- Update `LocalBusiness` JSON-LD: new phone, email (`contact@spotarrowllc.com`), `areaServed: "Orlando, FL"`.
- Delete `src/components/forms/QuoteForm.tsx`.

### 10. Shared component changes
- **`Navbar.tsx`**: import logo asset; render `<img>` mark; remove Testimonials; CTA = Call Now.
- **`Footer.tsx`**: logo image; updated nav links (no Testimonials); contact list shows new phone, both emails, Orlando, FL; tagline neutral.
- **`CTASection.tsx`**: rewrite to a neutral "Contact" band (title `"Let's talk about your property"`, subtitle softer language, two buttons: Call Now `tel:` + Email `mailto:`). No "quote" anywhere.

### 11. Type / data changes
- `src/data/types.ts`:
  - Remove `Testimonial`.
  - Update `GalleryImage`: rename `caption`→`title`, `alt`→`alt_text`. Extend `GalleryCategory`.
  - Simplify `ContactSubmission` to match new form fields (remove camera_count, needs_* flags, property_type).
- `src/data/companyLogo.ts`: set `image_url` to imported asset path string (stable, permanent). Keep accessor for future Supabase swap.

### 12. Root-level SEO
- `__root.tsx`: update site-wide description to remove quote wording, drop the stale R2 og:image (move og:image responsibility to leaf routes per rules), JSON-LD Organization gains `telephone`, `email`, `areaServed: "Orlando, FL"`.

### 13. Files
- **Create**: `src/components/forms/ContactForm.tsx`, `src/assets/spot-arrow-logo.png`, `src/assets/vasant-patel.jpeg`.
- **Edit**: `Navbar.tsx`, `Footer.tsx`, `CTASection.tsx`, `index.tsx`, `about.tsx`, `services.tsx`, `gallery.tsx`, `contact.tsx`, `__root.tsx`, `data/types.ts`, `data/gallery.ts`, `data/companyLogo.ts`, `cards/GalleryCard.tsx`.
- **Delete**: `routes/testimonials.tsx`, `data/testimonials.ts`, `cards/TestimonialCard.tsx`, `forms/QuoteForm.tsx`.

### 14. Final verification
- Repo-wide grep to confirm zero remaining matches for: `Request a Quote`, `Quote`, `quote`, `testimonial`, `555`, `hello@spotarrow`, `Local service`, `Caption`.
- Build & preview to confirm logo renders, gallery shows empty state, contact form works.
