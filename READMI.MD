# **ELECTRONICSE - ECOMMERCE**

**Author: @Vinhdev04**

# 1. Cấu trúc tổ chức website:

- **assets**/ # Chứa các tài nguyên tĩnh (CSS, hình ảnh, JavaScript)<br>
  **├── css/** # Chứa các tệp CSS <br>
  **├── images/** # Chứa hình ảnh<br>
  **├── js/** # Chứa các tệp JavaScript<br>

- **database/** # Chứa dữ liệu JSON và các tệp liên quan đến backend giả lập <br>
  **├── db.json** # File dữ liệu JSON <br>
  **├── package.json** # Cấu hình Node.js <br>
  **├── package-lock.json** # Khoá phiên bản package <br>

- **pages/** # Chứa các trang HTML của website <br>
  **├── contact.html** # Trang liên hệ<br>
  **├── devices.html** # Trang danh sách thiết bị<br>
  **├── laptop.html** # Trang chi tiết laptop<br>
  **├── login.html** # Trang đăng nhập<br>
  **├── signUp.html** # Trang đăng ký<br>
  **├── smart.html** # Trang thiết bị thông minh<br>
  **├── tablet.html** # Trang máy tính bảng<br>
  **├── watch.html** # Trang đồng hồ<br>

- _partials/_ # Chứa các thành phần HTML tái sử dụng <br>
  _├── footer.html_ # Phần chân trang <br>
  _├── navbar.html_ # Thanh điều hướng <br>
  _├── subnav.html_ # Thanh điều hướng phụ <br>

- **public/** # Chứa tài nguyên công khai <br>
- **services/** # Chứa các dịch vụ hoặc API xử lý <br>
- **Test/** # Chứa các tệp thử nghiệm <br>

- **index.html** # Trang chính của website <br>
- **README.md** # Mô tả dự án <br>

# 2.Cách Sử Dụng

- Clone repository về máy:

-> **git clone <https://github.com/Vinhdev04/ElectronicsE-Commerce.git>**

- Mở file index.html trên trình duyệt để xem giao diện.

- Nếu có sử dụng Node.js, chạy lệnh:

-> npm install để cài đặt các package cần thiết.

# 3. Công Nghệ Sử Dụng

- **HTML5**
- **CSS3**
- **JavaScript**
- **Postman**
- **JSON SERVER**
  -> https://www.npmjs.com/package/json-server
- **SWIPER JS**
  -> https://swiperjs.com/get-started
- **JQUERY**
  -> https://jquery.com/
- **BOOTSTRAP**
  -> https://getbootstrap.com/
- **Sweetalert2**
  -> https://sweetalert2.github.io/
- **EmailJS**
  -> https://www.emailjs.com/
- **Splide JS**
  -> https://splidejs.com/
- **LayzySizes**
  -> https://www.npmjs.com/package/lazysizes/v/1.0.0

# 3. Chức năng chính:

- **Filter products**
- **Validate data**
- **Buy a product from website**
- **Handle [add,remove,delete] products for Account[admine]**
- **Sign In/ Sign Up**
- **Admin page**
- **Chat box**
- **Payment**
- **Pagination product pages**

# 4. Dùng URL Parameter để truyền dữ liệu sản phẩm

- **Lấy ID từ URL (id=1, id=2...)**
- **Tìm sản phẩm theo ID trong danh sách**
- **Hiển thị thông tin sản phẩm tương ứng**
- **Lấy ID từ URL:**
- **const params = new URLSearchParams(window.location.search);**
- **const productId = parseInt(params.get("id"));**
