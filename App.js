/* ==========================================================================
   Car Rental — app.js
   ========================================================================== */

/* ---------- Mobile menu ---------- */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_links");
const menuBtnIcon = hamburger.querySelector("i");

function setMenu(isOpen) {
  navMenu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
}

hamburger.addEventListener("click", () => {
  setMenu(!navMenu.classList.contains("active"));
});

// Close the menu after tapping a link
navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

/* ---------- Scroll animations (ScrollReveal) ---------- */

if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Hero
  ScrollReveal().reveal(".header_img img", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".header_badge", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header_content h1", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".header_content .text_description", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".header_form form", { ...scrollRevealOption, delay: 2000 });

  // About
  ScrollReveal().reveal(".about_card", { ...scrollRevealOption, interval: 500 });

  // Deals
  ScrollReveal().reveal(".deals_card", { ...scrollRevealOption, interval: 500 });

  // Why choose us
  ScrollReveal().reveal(".choose_image img", { ...scrollRevealOption, origin: "top" });
  ScrollReveal().reveal(".choose_card", { ...scrollRevealOption, interval: 300 });

  // Subscribe
  ScrollReveal().reveal(".subscribe_container", scrollRevealOption);
  ScrollReveal().reveal(".subscribe_image img", { ...scrollRevealOption, origin: "right" });

  // Testimonials
  ScrollReveal().reveal(".client_container", { ...scrollRevealOption, delay: 500 });

  // Footer
  ScrollReveal().reveal(".footer_header", scrollRevealOption);
  ScrollReveal().reveal(".footer_services", { ...scrollRevealOption, delay: 300 });
}

/* ---------- Testimonials slider (Swiper) ---------- */

if (typeof Swiper !== "undefined") {
  new Swiper(".client_swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1100: { slidesPerView: 3 },
    },
  });
}

/* ---------- Forms (demo only: no backend yet) ---------- */

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
  });
});
