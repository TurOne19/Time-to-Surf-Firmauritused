const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  header.classList.toggle("menu-open", open);
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    header.classList.remove("menu-open");
  });
});

document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    document.querySelectorAll("[data-tab]").forEach((item) => item.classList.toggle("active", item === tab));
    document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === target));
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) faq.classList.remove("open");
    });
    item.classList.toggle("open");
  });
});

const galleryItems = [
  ...Array.from({ length: 64 }, (_, index) => ({
    type: "photo",
    category: index % 3 === 0 ? "birthday" : "corporate",
    src: `./assets/photos/gallery-${String(index + 1).padStart(2, "0")}.webp`,
    title: `Foto ${String(index + 1).padStart(2, "0")}`,
    hint: index % 3 === 0 ? "Sünnipäev / quest / SUP" : "Korporatiiv / SUP / BBQ"
  })),
  ...Array.from({ length: 4 }, (_, index) => ({
    type: "video",
    category: "video",
    src: `./assets/videos/video-${String(index + 1).padStart(2, "0")}.mp4`,
    title: `Video ${index + 1}`,
    hint: "Video slot"
  }))
];

let activeCollection = galleryItems;
let activeIndex = 0;

const galleryGrid = document.querySelector("[data-gallery-grid]");
const fullGallery = document.querySelector("[data-full-gallery]");
const openFullGallery = document.querySelector("[data-open-full-gallery]");
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxStage = document.querySelector("[data-lightbox-stage]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

function renderGallery() {
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <button class="gallery-item ${item.type}" type="button" data-gallery-open="${index}">
      <span>${item.title}</span>
    </button>
  `).join("");
}
renderGallery();

openFullGallery.addEventListener("click", () => {
  fullGallery.hidden = !fullGallery.hidden;
  openFullGallery.textContent = fullGallery.hidden ? "Ava kogu galerii" : "Peida kogu galerii";
});

function missingMedia(title, src, hint) {
  const div = document.createElement("div");
  div.className = "placeholder-card";
  div.innerHTML = `<p>${title}</p><h3>Media slot valmis</h3><p>${hint}</p><small>${src}</small>`;
  return div;
}

function openLightbox(index) {
  activeIndex = index;
  const item = activeCollection[activeIndex];
  lightboxStage.innerHTML = "";
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.playsInline = true;
    video.addEventListener("error", () => {
      lightboxStage.innerHTML = "";
      lightboxStage.appendChild(missingMedia(item.title, item.src, item.hint));
    }, { once: true });
    lightboxStage.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.hint;
    img.addEventListener("error", () => {
      lightboxStage.innerHTML = "";
      lightboxStage.appendChild(missingMedia(item.title, item.src, item.hint));
    }, { once: true });
    lightboxStage.appendChild(img);
  }
  lightboxCaption.textContent = `${item.title} - ${item.hint}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lightboxStage.innerHTML = "";
}

function moveLightbox(delta) {
  activeIndex = (activeIndex + delta + activeCollection.length) % activeCollection.length;
  openLightbox(activeIndex);
}

document.querySelectorAll("[data-lightbox='photo']").forEach((button) => {
  button.addEventListener("click", () => {
    activeCollection = galleryItems;
    openLightbox(Number(button.dataset.index));
  });
});

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-open]");
  if (!button) return;
  activeCollection = galleryItems;
  openLightbox(Number(button.dataset.galleryOpen));
});

document.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
document.querySelector("[data-lightbox-prev]").addEventListener("click", () => moveLightbox(-1));
document.querySelector("[data-lightbox-next]").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

const form = document.querySelector("[data-lead-form]");
const message = document.querySelector("[data-form-message]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Päring valmis. Ühenda see vorm backendiga või saada WhatsAppi/Telegrami.";
});
