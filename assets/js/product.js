// Lấy ID từ URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
console.log("ID sản phẩm:", productId);

if (!productId) {
  detailsProduct.innerHTML =
    "<p class='text-danger fw-bold'>Không tìm thấy sản phẩm!</p>";
  return;
}

try {
  // Gọi API lấy danh sách sản phẩm
  const response = await fetch("http://localhost:3000/watch");
  const data = await response.json();
  console.log("Dữ liệu API:", data);

  const product = data.find((p) => p.id === productId);
  if (!product) {
    detailsProduct.innerHTML =
      "<p class='text-danger'>Không tìm thấy sản phẩm!</p>";
    return;
  }

  // Cập nhật giao diện với dữ liệu sản phẩm
  document.querySelector(".detail__title").textContent = product.name;
  document.querySelector(".price--new").textContent = product.price + "₫";
  document.querySelector(".price--old").textContent = product.oldPrice + "₫";
  document.querySelector(".discount").textContent =
    "-" + product.discount + "%";

  // Cập nhật ảnh sản phẩm
  document.querySelector(".wrap__img").src = product.images[0];
  document.querySelector(".wrap__img").alt = product.name;
  document.querySelector(".detail__box--img").src = product.thumbnail;

  // Cập nhật thông tin màn hình
  document.querySelector(".detail__accordion--screen + span").textContent =
    product.display.technology;
  document.querySelector(".detail__accordion--full + span").textContent =
    product.display.resolution;
  document.querySelector(".detail__accordion--size + span").textContent =
    product.display.size;

  // Cập nhật thông tin thiết kế
  document.querySelector(".detail__accordion--material + span").textContent =
    product.design.material;
  document.querySelector(".detail__accordion--frame + span").textContent =
    product.design.frame;
  document.querySelector(".detail__accordion--width + span").textContent =
    product.design.bandWidth;
  document.querySelector(".detail__accordion--acreage + span").textContent =
    product.design.wristSize;
  document.querySelector(".detail__accordion--wire + span").textContent =
    product.design.replaceableBand;
  document.querySelector(".detail__accordion--parameter + span").textContent =
    product.design.dimensions;

  // Cập nhật tiện ích
  document.querySelector(".detail__accordion--body span").innerHTML =
    product.features.sports.map((sport) => `<p>${sport}</p>`).join("");
} catch (error) {
  console.error("Lỗi khi lấy dữ liệu:", error);
  detailsProduct.innerHTML =
    "<p class='text-danger'>Lỗi khi tải dữ liệu sản phẩm!</p>";
}
