const imgNumber = document.querySelectorAll(".slider-content-left-top img")
let index = 0;
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
rightbtn.addEventListener("click",function(){
index = index +1;
if(index>imgNumber.length-1){
  index = 0
}
  document.querySelector(".slider-content-left-top").style.right = index *100 + "%"
})
leftbtn.addEventListener("click",function(){
  index = index -1;
if(index<=0){
  index = imgNumber.length -1
}
  document.querySelector(".slider-content-left-top").style.right = index *100 + "%"
})


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
            <div class="product-name-container"  style="text-align: center"> <h3>${product.name}</h3></div>
            <div class="product-detail-container">
            <p style="color:red; font-size: 30px" > $${product.price}</p>
            <p><strong>Màn hình:</strong> ${product.screen}</p>
            <p><strong>Máy ảnh sau:</strong> ${product.backCamera} pixel</p>
            <p><strong>Máy ảnh trước:</strong> ${product.frontCamera} pixel</p>
            <p><strong>Mô tả:</strong>${product.desc}</p>
            <p><strong>Loại:</strong> ${product.type ? 'Samsung' : 'iPhone'}</p></div>
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
