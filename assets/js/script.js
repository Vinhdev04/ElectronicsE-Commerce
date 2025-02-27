//TODO: LOAD CODE[SUB-MENU] FROME FILE "navbar.html" to "index.html"
//TODO: LOAD CODE[FOOTER] FROME FILE "footer.html" to "index.html"
//TODO: LOAD CODE[NAVBAR] FROME FILE "navbar.html" to "index.html"
function loadHTML(elementId, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => alert("Lỗi trong quá trình tải và đọc dữ liệu! ", error));
}

// Load header and footer
window.onload = function () {
  loadHTML("subNav", "/partials/subnav.html");
  loadHTML("footer", "/partials/footer.html");
  loadHTML("navbar", "/partials/navbar.html");
};
