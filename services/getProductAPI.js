// getProductAPI.js
const getProductAPI = async () => {
  try {
    const response = await fetch("http://localhost:3000/Products"); // Đợi kết quả từ fetch
    const data = await response.json(); // Đợi kết quả từ response.json()
    return data.Products; // Trả về danh sách sản phẩm từ trường "Products"
  } catch (error) {
    console.error("Error fetching products:", error); // Xử lý lỗi nếu có
  }
};

export default getProductAPI;
