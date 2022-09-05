console.log("loaded");

const cbox = document.querySelector("#checkbox-toggle");
const menuSection = document.getElementById("menu-section");

cbox.addEventListener("click", function (e) {
  menuSection.classList.toggle("active");
  document.body.classList.toggle("active");
});

// Swiper Slider
const swiperConfig = {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 481px
    481: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const swiperPost = new Swiper(".hnc-post__slider", swiperConfig);

// Footer
const date = new Date();
document.querySelector(".hnc-footer__year").innerHTML = date.getFullYear();
