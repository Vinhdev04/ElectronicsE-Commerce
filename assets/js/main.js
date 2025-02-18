import {
  btnCreateAccount,
  btnSignUp,
  isShowSignIn,
  isShowSignUp,
  signUp,
} from "./variable.js";

const swiper = new Swiper(".card-swiper", {
  loop: true, // Enable loop if needed
  slidesPerView: "auto", // Adjust to show multiple slides at once
  spaceBetween: 10, // Space between slides
  // autoplay
  autoplay: {
    delay: 3000,
  },

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

const swiperBanner = new Swiper(".banner-swiper", {
  loop: true, // Enable loop if needed
  slidesPerView: "auto", // Adjust to show multiple slides at once
  spaceBetween: 10, // Space between slides
  // autoplay
  autoplay: {
    delay: 3000,
  },

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
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

//TODO: HANDLE EVENTS
btnCreateAccount.addEventListener("click", () => {
  isShowSignIn.style.display = "none";
  isShowSignUp.style.display = "block";
});

btnSignUp.addEventListener("click", () => {
  isShowSignIn.style.display = "block";
  isShowSignUp.style.display = "none";
});

signUp.addEventListener("click", () => {
  isShowSignUp.style.display = "block";
  isShowSignIn.style.display = "none";
});
