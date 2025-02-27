const apiKey = "http://localhost:3000/Products";
const productList = document.querySelector(".product__list");

const getAPI = () => {
  // get data from API
  fetch(apiKey)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // display data
      let html = "";
      data.forEach((item) => {
        html += `
        <div class="container">
          <div class="product__list">
           <div class="item">
            <div class="img" >
            <img src=${item.Thumbnail} alt="" /></div>
           </div>
           <div class="title">
           ${item.Title}</div>
          </div>
          <div className="price">${item.Price}</div>
        </div>;
        `;
      });
      productList.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};
getAPI();
