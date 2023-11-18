function renderProductList(productArr) {
  var contentHTML = "";
  for (var i = 0; i < productArr.length; i++) {
    var product = productArr[i];
    var trString = `
      <tr>
                  <td>${product.name}</td>
                  <td>${product.price}</td>
                  <td>${product.blackCamera}</td>
                  <td>${product.frontCamera}</td>
                  <td>${product.img}</td>
                   <td>${product.desc}</td>
                  <td>${product.type}</td>
                  <td>
  
                          <button onclick=editProduct(${product.name}) class="btn btn-warning">Edit</button>
                          <button
                          onclick=deleteProduct(${product.name})
                          class="btn btn-danger">Delete</button>
  
                  </td>
      </tr>
      `;
    contentHTML += trString;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}

function turnOnLoading() {
  document.getElementById("spinner").style.display = "block";
}
function turnOffLoading() {
  document.getElementById("spinner").style.display = "none";
}

function getDataForm() {
  var ten = document.getElementById("TenSP").value;
  var gia = document.getElementById("GiaSP").value;
  var hinhAnh = document.getElementById("HinhSP").value;
  var moTa = document.getElementById("MoTaSP").value;
  return {
    name: ten,
    price: gia,
    img: hinhAnh,
    desc: moTa,
  };
}
