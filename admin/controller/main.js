// 1. gọi api lấy danh sách sp
axios({
    url: "https://633ec05b0dbc3309f3bc5455.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
      renderProductList(res.data);
  var idEdit = null;
  // 1. gọi api lấy danh sách sp từ server
  function fetchProductList() {
    turnOnLoading();
    axios({
      url: "https://633ec05b0dbc3309f3bc5455.mockapi.io/product",
      method: "GET",
    })
    .catch(function (err) {
      console.log(" - err", err);
    });
      .then(function (res) {
        renderProductList(res.data);
        turnOffLoading();
      })
      .catch(function (err) {
        turnOffLoading();
        console.log(" - err", err);
      });
  }
  
  fetchProductList();

  //   2. xoá 1 sp trên server

function deleteProduct(id) {
    turnOnLoading();
    axios({ 
        url: `https://633ec05b0dbc3309f3bc5455.mockapi.io/product/${id}`,
      method: "DELETE",
    })
      .then(function (res) {
        // gọi lại api lấy ds sp mới nhất từ server sau khi xoá thành công
        fetchProductList();
      })
      .catch(function (err) {
        turnOffLoading();
      });
  }
  
  function createProduct() {
    console.log("yess");
  
    var product = getDataForm();
    axios({
      url: "https://633ec05b0dbc3309f3bc5455.mockapi.io/product",
      method: "POST",
      data: product,
    })
      .then(function (res) {
        fetchProductList();
       
        $("#myModal").modal("hide");
      })
      .catch(function (err) {});
  }
 
   axios({
    url: `https://633ec05b0dbc3309f3bc5455.mockapi.io/product/${idEdit}`,
    method: "PUT",
    data: product,
  })
    .then(function (res) {
     
      fetchProductList();
      $("#myModal").modal("hide");

      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
