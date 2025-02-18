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

//TODO: HANDLE SHOW LOGIN/SIGNUP
const isShowSignIn = document.getElementById("sign-in");
console.log(isShowSignIn);
const isShowSignUp = document.getElementById("sign-up");
console.log(isShowSignUp);
const btnCreateAccount = document.getElementById("btn-createAccount");
console.log(btnCreateAccount);
const btnSignUp = document.getElementById("btn-Signup");
console.log(btnSignUp);

//TODO: HANDLE EVENTS
btnCreateAccount.addEventListener("click", () => {
  isShowSignIn.style.display = "none";
  isShowSignUp.style.display = "block";
});

btnSignUp.addEventListener("click", () => {
  isShowSignIn.style.display = "block";
  isShowSignUp.style.display = "none";
});
