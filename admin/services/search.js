const products = [
    { id: 1, name: "Samsung", price: 100 },
    { id: 2, name: "Iphone X", price: 150 },
    { id: 3, name: "Samsung Galaxy", price: 200 },
    { id: 4, name: "Iphone 14 promax", price: 120 },
  
];

function searchProduct() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; 


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    if (filteredProducts.length === 0) {
        searchResults.innerHTML = '<p>No matching products found.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price}`;
        searchResults.appendChild(listItem);
    });
}