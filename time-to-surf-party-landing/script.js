const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  header.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
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
    document.querySelectorAll("[data-tab]").forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === target);
    });
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
    title: `Foto slot ${String(index + 1).padStart(2, "0")}`,
    hint: index % 3 === 0 ? "День рождения / quest / SUP" : "Корпоратив / SUP / BBQ / tiimipäev"
  })),
  ...Array.from({ length: 4 }, (_, index) => ({
    type: "video",
    category: "video",
    src: `./assets/videos/video-${String(index + 1).padStart(2, "0")}.mp4`,
    title: `Video slot ${index + 1}`,
    hint: "MP4/WebM video, controls in lightbox"
  }))
];

const galleryGrid = document.querySelector("[data-gallery-grid]");
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxStage = document.querySelector("[data-lightbox-stage]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
let activeIndex = 0;
let activeCollection = galleryItems;

function renderGallery(filter = "all") {
  activeCollection = galleryItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "video") return item.type === "video";
    return item.category === filter;
  });

  galleryGrid.innerHTML = activeCollection.map((item, index) => `
    <button class="gallery-item ${item.type}" type="button" data-gallery-open="${index}" data-kind="${item.type}">
      <span>${item.title}</span>
    </button>
  `).join("");
}

function openLightbox(index) {
  activeIndex = index;
  const item = activeCollection[activeIndex];
  const element = item.type === "video"
    ? `<video src="${item.src}" controls playsinline></video>`
    : `<img src="${item.src}" alt="${item.hint}" onerror="this.replaceWith(createMissingMedia('${item.title}', '${item.src}', '${item.hint}'))">`;

  lightboxStage.innerHTML = element;
  if (item.type === "video") {
    lightboxStage.querySelector("video").addEventListener("error", () => {
      lightboxStage.innerHTML = "";
      lightboxStage.appendChild(createMissingMedia(item.title, item.src, item.hint));
    }, { once: true });
  }
  lightboxCaption.textContent = `${item.title} - ${item.hint} - ${item.src}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

window.createMissingMedia = (title, src, hint) => {
  const div = document.createElement("div");
  div.className = "placeholder-card";
  div.innerHTML = `<p class="eyebrow">${title}</p><h3>Media slot is ready</h3><p>${hint}</p><small>${src}</small>`;
  return div;
};

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lightboxStage.innerHTML = "";
}

function moveLightbox(direction) {
  activeIndex = (activeIndex + direction + activeCollection.length) % activeCollection.length;
  openLightbox(activeIndex);
}

renderGallery();

document.querySelectorAll("[data-filter]").forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderGallery(filterButton.dataset.filter);
  });
});

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-open]");
  if (!button) return;
  openLightbox(Number(button.dataset.galleryOpen));
});

document.querySelectorAll("[data-lightbox='photo']").forEach((button) => {
  button.addEventListener("click", () => {
    activeCollection = galleryItems;
    openLightbox(Number(button.dataset.index));
  });
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
  const data = new FormData(form);
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const people = Number(data.get("people") || 0);

  message.classList.remove("error");
  if (!email && !phone) {
    message.textContent = "Укажите email или телефон, чтобы мы могли ответить.";
    message.classList.add("error");
    return;
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Введите корректный email.";
    message.classList.add("error");
    return;
  }
  if (people && people < 2) {
    message.textContent = "Укажите примерное количество участников.";
    message.classList.add("error");
    return;
  }

  message.textContent = "Saadame päringut...";
  form.querySelector("button[type='submit']").disabled = true;
  setTimeout(() => {
    message.textContent = "Спасибо. Запрос получен. Мы свяжемся с вами, чтобы уточнить детали и подготовить предложение.";
    form.querySelector("button[type='submit']").disabled = false;
    form.reset();
  }, 650);
});
