const products = [
  { id: 1, name: "Samsung", price: 100 },
  { id: 2, name: "Iphone X", price: 150 },
  { id: 3, name: "Samsung Galaxy", price: 200 },
  { id: 4, name: "Iphone 14 promax", price: 120 },
  // ...Thêm sản phẩm khác
];

function sortProductsByPriceDescending() {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Xóa danh sách hiện tại

  // Sắp xếp mảng sản phẩm theo giá giảm dần
  const sortedProducts = products.slice().sort((a, b) => b.price - a.price);

  sortedProducts.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(listItem);
  });
}

// Gọi hàm sắp xếp khi trang được tải
sortProductsByPriceDescending();
