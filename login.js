// gọi API lấy danh sách snar phẩm
function fetchProductList() {
  turnOnLoading();
  axios({
    url: "https://6531299a4d4c2e3f333c8539.mockapi.io/:phone",
    method: "GET",
  })
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
