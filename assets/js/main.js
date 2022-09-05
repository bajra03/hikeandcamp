console.log("loaded");

const cbox = document.querySelector("#checkbox-toggle");
const menuSection = document.getElementById("menu-section");

cbox.addEventListener("click", function (e) {
  menuSection.classList.toggle("active");
  document.body.classList.toggle("active");
});

// ISOTOPE Filtering
const elm = document.querySelector(".hnc-products");
// Init Isotope
const iso = new Isotope(elm, {
  // options
  itemSelector: ".hnc-product",
  layoutMode: "fitRows",
  stagger: 8,
  transitionDuration: "0.6s",
  percentPosition: true,
  masonry: {
    columnWidth: ".grid-sizer",
  },
});

// bind filter button on click
var gridFilters = document.querySelectorAll(".hnc-product__btn-group button");
for (let i = 0; i < gridFilters.length; i++) {
  gridFilters[i].addEventListener("click", function () {
    // console.log(
    //   " " + this.parentElement.getAttribute("class") + " " + this.dataset.filter
    // );
    var filterValue = this.dataset.filter;
    // use filter if matches value
    iso.arrange({ filter: filterValue });
  });
}

// Add class active to filter button
let btnFiltersGroup = document.querySelector(".hnc-product__btn-filter-group");
let btnFilters = btnFiltersGroup.getElementsByClassName(
  "hnc-btn-product__filter"
);

for (let i = 0; i < btnFilters.length; i++) {
  btnFilters[i].addEventListener("click", function () {
    const currentBtn = document.getElementsByClassName("is-active");
    currentBtn[0].className = currentBtn[0].className.replace("is-active", " ");
    this.className += " is-active";
  });
}

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

const swiper = new Swiper(".swiper-container", swiperConfig);

// Footer
const date = new Date();
document.querySelector(".hnc-footer__year").innerHTML = date.getFullYear();
