// const addProductCart = [];
// let cartCount = 0;

// function addToCart(productId) {
//   const selectedProduct = rawProducts.find((product) => Number(product.id) === productId);
//   console.log(selectedProduct);
//   addProductCart.push(selectedProduct);
//   cartCount += 1;
//   console.log(addProductCart);

//   // Update the cart count in the button
//   const cartCountElement = document.querySelector('.cart-count');
//   if (cartCountElement) {
//     cartCountElement.innerText = cartCount;
//   }

//   // Show the modal with product information
//   showModal(selectedProduct);

//   // Optionally, you can update the modal content here
// }

// function showModal(product) {
//   // Write code to display the modal with product information
//   // You can use the previous modal code I provided or customize it as needed
//   // Update modal content with product information
//   document.getElementById('modalImg').src = product.img;
//   document.getElementById('modalProductName').innerText = product.name;
//   document.getElementById('modalPrice').innerText = `$${product.price}`;
//   document.getElementById('modalScreen').innerText = product.screen;
//   document.getElementById('modalBackCamera').innerText = product.backCamera;
//   document.getElementById('modalFrontCamera').innerText = product.frontCamera;
//   document.getElementById('modalDesc').innerText = product.desc;
//   document.getElementById('modalType').innerText = product.type ? 'Samsung' : 'iPhone';

//   // Display the modal
//   modal.style.display = 'block';
// }