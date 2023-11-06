// Lớp đối tượng Product
class Product {
  constructor(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = img;
    this.desc = desc;
    this.type = type;
  }
}

// Hàm hiển thị danh sách sản phẩm
function displayProducts(products) {
  const productList = document.querySelector(
    ".slider-product-one-content-items"
  );

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "slider-product-one-content-item";

    productDiv.innerHTML = `
            <div><img src="${product.img}" alt="${product.name}"></div>
            <!-- Hiển thị thông tin sản phẩm -->
            <h3>${product.name}</h3>
            <p>Giá: $${product.price}</p>
            <p>Màn hình: ${product.screen}</p>
            <p>Máy ảnh sau: ${product.backCamera}</p>
            <p>Máy ảnh trước: ${product.frontCamera}</p>
            <p>${product.desc}</p>
            <p>Loại: ${product.type}</p>
        `;

    productList.appendChild(productDiv);
  });
}

// Gọi API MockAPI để lấy danh sách sản phẩm
fetch("https://653122e04d4c2e3f333c71f9.mockapi.io/capstone2")
  .then((response) => response.json())
  .then((data) => {
    const products = data.map(
      (item) =>
        new Product(
          item.id,
          item.name,
          item.price,
          item.screen,
          item.backCamera,
          item.frontCamera,
          item.img,
          item.desc,
          item.type
        )
    );
    displayProducts(products);
  });
