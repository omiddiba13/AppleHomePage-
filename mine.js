// ===============================
// Swiper Configuration
// ===============================
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { spaceBetween: 15 },
    768: { spaceBetween: 20 },
    1024: { spaceBetween: 30 },
  },
  on: {
    init: function () {
      this.slides.forEach((slide) => {
        slide.style.transformOrigin = "center center";
      });
    },
  },
});

// ===============================
// Navigation Menu
// ===============================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const body = document.body;

function closeMenu() {
  menuBtn.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "auto";
}

// Event Listeners for Menu
menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  body.style.overflow = isOpen ? "hidden" : "auto";
});

overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

// Close menu when nav items are clicked
const navItems = navLinks.querySelectorAll("li a");
navItems.forEach((item) => item.addEventListener("click", closeMenu));

// ===============================
// Footer Accordion
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const footerCols = document.querySelectorAll(".footer-col");

  function handleAccordion(e) {
    if (window.innerWidth > 768) return;

    const currentCol = e.currentTarget.parentElement;
    const isActive = currentCol.classList.contains("active");

    // Close all other columns
    footerCols.forEach((col) => {
      if (col !== currentCol) {
        col.classList.remove("active");
        col.querySelector("ul").style.maxHeight = "0";
      }
    });

    // Toggle current column
    if (!isActive) {
      currentCol.classList.add("active");
      currentCol.querySelector("ul").style.maxHeight = "1000px";
    } else {
      currentCol.classList.remove("active");
      currentCol.querySelector("ul").style.maxHeight = "0";
    }
  }

  // Add click event to footer headings
  footerCols.forEach((col) => {
    const heading = col.querySelector("h3");
    heading.addEventListener("click", handleAccordion);
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    footerCols.forEach((col) => {
      const ul = col.querySelector("ul");
      if (window.innerWidth > 768) {
        col.classList.remove("active");
        ul.style.maxHeight = "1000px";
      } else {
        if (!col.classList.contains("active")) {
          ul.style.maxHeight = "0";
        }
      }
    });
  });

  // Improve touch experience
  if ("ontouchstart" in window) {
    footerCols.forEach((col) => {
      col.querySelector("h3").style.cursor = "pointer";
    });
  }
});
