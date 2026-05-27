# Spot Arrow — Static HTML/CSS/JS Site

This folder is a standalone plain-HTML version of the Spot Arrow website. It does
**not** use React, TanStack, TypeScript, or any build step — open the `.html`
files directly in a browser or serve the folder with any static web server.

## Files

```
static-site/
├── index.html       Home page
├── about.html       About / Leadership
├── services.html    Services + Products
├── gallery.html     Gallery (empty state until images added)
├── contact.html     Contact form + info
├── styles.css       All styling (dark premium theme)
├── script.js        Mobile nav, gallery render, contact form
└── assets/
    ├── spot-arrow-logo.png   Permanent brand logo
    ├── vasant-patel.jpeg     President photo (About page)
    └── gallery/              Drop real project photos here
```

## Run locally

```bash
# any static server works, e.g.
cd static-site && python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding gallery images later

1. Drop your photos into `assets/gallery/` (e.g. `g-001.jpg`).
2. In `script.js`, push entries onto the `galleryImages` array:

```js
{
  id: "g-001",
  title: "Commercial entrance camera install",
  category: "cameras", // cameras | networking | access-control | cabling | installations | equipment
  image_url: "assets/gallery/g-001.jpg",
  alt_text: "Two AI-capable cameras mounted above a glass entrance",
  created_at: "2026-01-15T00:00:00Z"
}
```

The empty state hides automatically once the array has entries.

## Connecting a backend later

- **Contact form** — see the `TODO(backend)` in `script.js` inside
  `wireContactForm()`. Replace the mock submit with a POST to your backend
  (Supabase, Formspree, Resend, your own API, etc.).
- **Gallery** — replace the static `galleryImages` array with a `fetch()` to
  your DB or CMS (same shape).

## Brand & contact (single source of truth)

- Phone: **863-398-7761** (`tel:+18633987761`)
- Emails: **contact@spotarrowllc.com**, **vpatel7761@gmail.com**
- Service area: **Orlando, FL**
- Hours: Mon–Fri 8am–6pm
