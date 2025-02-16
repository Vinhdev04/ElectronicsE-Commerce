const swiper = new Swiper(".card-swiper", {
  loop: true, // Enable loop if needed
  slidesPerView: "auto", // Adjust to show multiple slides at once
  spaceBetween: 10, // Space between slides

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    dynamicBullets: true,
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
