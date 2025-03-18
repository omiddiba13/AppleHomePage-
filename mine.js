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
    320: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 30,
    },
  },
  on: {
    init: function () {
      this.slides.forEach((slide) => {
        slide.style.transformOrigin = "center center";
      });
    },
  },
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const body = document.body;

// Toggle Menu
menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  body.style.overflow = isOpen ? "hidden" : "auto";
});

// Close Menu
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

function closeMenu() {
  menuBtn.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "auto";
}

// Get all items inside li elements
const navItems = navLinks.querySelectorAll("li a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});
