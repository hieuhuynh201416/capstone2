//***************Slide */
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
let index = 0;
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".slider-content-left-top").style.right =
    index * 100 + "%";
});
//***************Slide 1 */
const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li");

imgNumberLi.forEach(function (image, index) {
  image.addEventListener("click", function () {
    removeactive();
    document.querySelector(".slider-content-left-top").style.right =
      index * 100 + "%";
    image.classList.add("active");
  });
});
function removeactive() {
  let imgactive = document.querySelector(".active");
  imgactive.classList.remove("active");
}



let rawProducts = [];
let selectedProducts = []

var selectedProductJson = localStorage.getItem("DSSP_LOCAL");
if (selectedProductJson != null) {
  selectedProducts = []
 = JSON.parse(selectedProductJson);
}

//show number of products in cart
document.querySelector('.cart-count').innerHTML = selectedProducts.length;

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

  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "slider-product-one-content-item";

    productDiv.innerHTML = `
            <div><img src="${product.img}" alt="${product.name}"></div>
            <!-- Hiển thị thông tin sản phẩm -->
            <div class="product-name-container"  style="text-align: center"> <h3>${product.name
      }</h3></div>
            <div class="product-detail-container">
            <p style="color:red; font-size: 30px" > $${product.price}</p>
            <p><strong>Màn hình:</strong> ${product.screen}</p>
            <p><strong>Máy ảnh sau:</strong> ${product.backCamera} pixel</p>
            <p><strong>Máy ảnh trước:</strong> ${product.frontCamera} pixel</p>
            <p><strong>Mô tả:</strong>${product.desc}</p>
            <p><strong>Loại:</strong>
            <span id="loaiSp"> ${product.type ? "Samsung" : "iPhone"}</span>
            
            </p>

            <button
            onClick = {addToCart(${product.id})}
            class = "gioHang";
            id = "product-${product.id}"
            style=
              "background-color: #fed100;
              border: 1px solid #ffc107;
              border-radius: 10px;
              height:34px;
              margin: 10px 12px 12px 0;
              padding: 10px;"
            >
              <i class="fas fa-shopping-cart"></i> Thêm Giỏ Hàng 
            </button>
           
            </div>
        `;

    productList.appendChild(productDiv);
  });
}

//  Hàm hiển thị danh sách MODAL
function displayProductsInModal(products) {
  const productList = document.querySelector(
    ".selected-product-detail-container"
  );

  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "selected-product-detail-container";

    productDiv.innerHTML = `
    <div class="product-container" style="display:flex">
        <div class="product-image-container" style="width:40%">
            <img style="width:100%" src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-detail-container" style="width:60%">
            <h3 style="text-align: center">${product.name}</h3>
              <p><strong>Màn hình:</strong> ${product.screen}"</p>
              <p><strong>Máy ảnh sau:</strong> ${product.backCamera} pixel</p>
              <p><strong>Máy ảnh trước:</strong> ${product.frontCamera} pixel</p>
              <p><strong>Mô tả:</strong>${product.desc}</p>
              <p><strong>Loại:</strong>
                <span id="loaiSp"> ${product.type ? "Samsung" : "iPhone"}</span>
              </p>
          <div>
            <button onclick="decreaseQuantity() style="w-10 h10">-</button>
            <span id="quantity">1</span>
            <button onclick="increaseQuantity()">+</button>
          </div>
            <p><strong>Tổng tiền:</strong>
              <span id="totalPrice">$${product.price}</span>  
             </p>      
        </div>
   </div>
        `;
        productList.appendChild(productDiv);
  });
}
let totalPrice = this.price;
        let quantity = 1;
        // Giảm só lượng
        function decreaseQuantity() {
          if (quantity > 1) {
            quantity--;
          }
          updateTotalPrice();
        }
        // Tăng số lương
        function increaseQuantity() {
            quantity++;  
          updateTotalPrice();
        }
        // Update giá dựa theo số lượng
        function updateTotalPrice(){
          totalPrice = Number(this.price) * Number(quantity);
          document.getElementById("quantity").innerText = quantity;
          document.getElementById("totalPrice").innerText = totalPrice;
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
    rawProducts = products;
    displayProducts(products);
  });

// Danh sách sản phẩm
const products = [
  // Danh sách sản phẩm của bạn
];




// Hiển thị tất cả sản phẩm ban đầu
function showAllProducts() {
  displayProducts(rawProducts);
}

//******************* */ Lọc sản phẩm theo loại
function filterProducts(type) {
  const filteredProducts = rawProducts.filter((product) => {
    // return type === "Samsung" ? !product.type : product.type;
    if (type === "Samsung") {
      return product.type === true;
    } else {
      return product.type === false;
    }
  });
  displayProducts(filteredProducts);
}

// Bắt sự kiện click cho nút lọc Samsung
document.querySelector(".filterSamSung").addEventListener("click", () => {
  filterProducts("Samsung");
});

// Bắt sự kiện click cho nút lọc iPhone
document.querySelector(".filterIphone").addEventListener("click", () => {
  filterProducts("iPhone");
});

document.querySelector(".filterAll").addEventListener("click", () => {
  showAllProducts();
});



//add giỏ hàng
const addProductCart = [];

function addToCart(productId) {
  const selectedProduct = rawProducts.find((product) => Number(product.id) === productId);
  selectedProduct.quantity =  1;
  addProductCart.push(selectedProduct);
  var dataJson = JSON.stringify(addProductCart);

  localStorage.setItem("DSSP_LOCAL", dataJson);
}

displayProductsInModal(selectedProducts)


