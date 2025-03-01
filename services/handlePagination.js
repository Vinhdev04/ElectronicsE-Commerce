// document.addEventListener("DOMContentLoaded", function () {
//   const itemsPerPage = 4; // Số sản phẩm hiển thị mỗi trang
//   const products = document.querySelectorAll("#smartWatch .col-md-4"); // Danh sách sản phẩm
//   const pagination = document.querySelector(".pagination"); // Phần pagination
//   let currentPage = 1;
//   let totalPages = Math.ceil(products.length / itemsPerPage);

//   function showPage(page) {
//     products.forEach((item, index) => {
//       item.style.display =
//         index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
//           ? "block"
//           : "none";
//     });

//     // Cập nhật trạng thái nút Prev / Next
//     document.querySelector(".prev").disabled = page === 1;
//     document.querySelector(".next").disabled = page === totalPages;
//   }

//   function updatePagination() {
//     pagination.innerHTML = `
//       <li class="page-item">
//         <button class="page-link prev" ${
//           currentPage === 1 ? "disabled" : ""
//         }><</button>
//       </li>
//     `;

//     for (let i = 1; i <= totalPages; i++) {
//       pagination.innerHTML += `
//         <li class="page-item ${i === currentPage ? "active" : ""}">
//           <button class="page-link">${i}</button>
//         </li>
//       `;
//     }

//     pagination.innerHTML += `
//       <li class="page-item">
//         <button class="page-link next" ${
//           currentPage === totalPages ? "disabled" : ""
//         }>></button>
//       </li>
//     `;

//     // Gắn sự kiện click cho các nút
//     document.querySelectorAll(".page-link").forEach((btn) => {
//       btn.addEventListener("click", function () {
//         if (this.classList.contains("prev")) currentPage--;
//         else if (this.classList.contains("next")) currentPage++;
//         else currentPage = parseInt(this.innerText);

//         showPage(currentPage);
//         updatePagination();
//       });
//     });
//   }

//   if (totalPages > 1) {
//     showPage(currentPage);
//     updatePagination();
//   } else {
//     pagination.style.display = "none"; // Ẩn pagination nếu chỉ có 1 trang
//   }
// });
