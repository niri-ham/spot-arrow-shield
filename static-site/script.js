/* Spot Arrow — plain JS for nav, gallery rendering, contact form */

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.querySelector(".nav-mobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      mobile.classList.toggle("open");
    });
  }

  // Active nav link highlighting
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .nav-mobile a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render gallery if container present
  renderGallery();

  // Wire contact form
  wireContactForm();
});

/* ============================================================
   GALLERY DATA
   Future-ready shape — keep this array empty until real images
   are uploaded to /assets/gallery/.
   Categories: cameras | networking | access-control | cabling |
               installations | equipment
   TODO(backend): Replace this static array with a fetch() to
   your DB/CMS (e.g. Supabase: select * from gallery_images).
   ============================================================ */
const galleryImages = [
  // Example shape (do not uncomment — gallery should stay empty
  // until real project photos are added):
  // {
  //   id: "g-001",
  //   title: "Commercial entrance camera install",
  //   category: "cameras",
  //   image_url: "/assets/gallery/g-001.jpg",
  //   alt_text: "Two AI-capable cameras mounted above a glass entrance",
  //   created_at: "2026-01-15T00:00:00Z"
  // }
];

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const empty = document.getElementById("gallery-empty");
  if (!grid || !empty) return;

  if (!galleryImages.length) {
    grid.style.display = "none";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  grid.style.display = "grid";
  grid.innerHTML = galleryImages
    .map(
      (img) => `
      <figure class="gallery-item">
        <img src="${img.image_url}" alt="${escapeHtml(img.alt_text)}" loading="lazy" />
        <figcaption class="meta">
          <strong>${escapeHtml(img.title)}</strong>
          <div class="muted" style="font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;margin-top:.25rem">${escapeHtml(
            img.category
          )}</div>
        </figcaption>
      </figure>`
    )
    .join("");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ============================================================
   CONTACT FORM
   Shows a success message on submit.
   TODO(backend): Replace the mock submit handler below with a
   POST to your backend / database (e.g. Supabase insert, or an
   email service like Resend / Formspree). Validate server-side.
   ============================================================ */
function wireContactForm() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("[ContactForm] submission (mock)", data);

    // TODO(backend): send `data` to your server here.
    form.style.display = "none";
    success.classList.add("show");
    window.scrollTo({ top: success.offsetTop - 100, behavior: "smooth" });
  });
}
