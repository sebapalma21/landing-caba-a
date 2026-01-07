// Ajusta estos datos y listo.
const CONFIG = {
  whatsappNumber: "+57XXXXXXXXXX", // <- cambia por tu número real, ej: "+573001112233"
  whatsappMessage:
    "Hola! Quiero consultar disponibilidad en Cabañas Dalas. Fechas: __/__/__ a __/__/__. Personas: __. ¿Está disponible?",
};

function buildWhatsAppLink() {
  const num = CONFIG.whatsappNumber.replace(/\D/g, "");
  const msg = encodeURIComponent(CONFIG.whatsappMessage);
  return `https://wa.me/${num}?text=${msg}`;
}

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// WhatsApp button
const wa = document.querySelector("#whatsappLink");
if (wa) wa.href = buildWhatsAppLink();

// Footer year
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

// Lightbox (gallery)
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const closeBtn = document.querySelector(".lightbox-close");

function openLightbox(src, alt = "Vista ampliada") {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.showModal();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.close();
}

document.querySelectorAll(".gallery-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-src");
    const img = btn.querySelector("img");
    openLightbox(src, img?.alt || "Foto");
  });
});

if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    // click fuera de la imagen para cerrar
    const rect = lightbox.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInDialog) closeLightbox();
  });
}

// Success message (Netlify form redirect adds ?enviado=1)
const params = new URLSearchParams(window.location.search);
const ok = params.get("enviado") === "1";
const msg = document.querySelector("#formSuccess");
if (ok && msg) msg.hidden = false;
