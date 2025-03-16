document.addEventListener("DOMContentLoaded", function () {
  new Splide("#bannerL-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    lazyLoad: "sequential", // Kích hoạt lazy load
    arrows: true,
  }).mount();
});
