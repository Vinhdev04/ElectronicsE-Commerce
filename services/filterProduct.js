//TODO: fILTER PRODUCT[TABLET] BY CATEGORY
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-tablet]");
  const products = document.querySelectorAll(".product-tablet");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-filter-tablet");

      products.forEach((product) => {
        const productCategory = product.getAttribute("data-category");

        if (
          selectedCategory === "all" ||
          productCategory === selectedCategory
        ) {
          product.closest(".col-md-4").style.display = "flex"; // Hiển thị sản phẩm
        } else {
          product.closest(".col-md-4").style.display = "none"; // Ẩn sản phẩm
        }
      });
    });
  });
});

//TODO: fILTER PRODUCT[SMART-PHONE] BY CATEGORY
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-smart]");
  const products = document.querySelectorAll(".product-smart");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-filter-smart");

      products.forEach((product) => {
        const productCategory = product.getAttribute("data-category");

        if (
          selectedCategory === "all" ||
          productCategory === selectedCategory
        ) {
          product.closest(".col-md-4").style.display = "flex"; // Hiển thị sản phẩm
        } else {
          product.closest(".col-md-4").style.display = "none"; // Ẩn sản phẩm
        }
      });
    });
  });
});

//TODO: fILTER PRODUCT[LAPTOP] BY CATEGORY
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-laptop]");
  const products = document.querySelectorAll(".product-laptop");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-filter-laptop");

      products.forEach((product) => {
        const productCategory = product.getAttribute("data-category");

        if (
          selectedCategory === "all" ||
          productCategory === selectedCategory
        ) {
          product.closest(".col-md-4").style.display = "flex"; // Hiển thị sản phẩm
        } else {
          product.closest(".col-md-4").style.display = "none"; // Ẩn sản phẩm
        }
      });
    });
  });
});

//TODO: fILTER PRODUCT[WATCH] BY CATEGORY
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-watch]");
  const products = document.querySelectorAll(".product-watch");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-filter-watch");

      products.forEach((product) => {
        const productCategory = product.getAttribute("data-category");

        if (
          selectedCategory === "all" ||
          productCategory === selectedCategory
        ) {
          product.closest(".col-md-4").style.display = "flex"; // Hiển thị sản phẩm
        } else {
          product.closest(".col-md-4").style.display = "none"; // Ẩn sản phẩm
        }
      });
    });
  });
});
