function saveStorage(arrSanPham) {
  var sArrSanPham = JSON.stringify(arrSanPham);
  console.log(sArrSanPham);
  localStorage.setItem("arrSanPham", sArrSanPham);
}

function getStorage() {
  if (localStorage.getItem("arrSanPham")) {
    var stringArrSanPham = localStorage.getItem("arrSanPham");
    arrSanPham = JSON.parse(stringArrSanPham);
    console.log("arrNhanVien Local storage: ", arrSanPham);
  }
}

function getStorage() {
  if (localStorage.getItem("arrSanPham")) {
    var stringArrSanPham = localStorage.getItem("arrSanPham");
    arrSanPham = JSON.parse(stringArrSanPham);
    console.log("arrSanPham Local storage: ", arrSanPham);
  }
}

// Validation

function kiemTraRong(value, name) {
  if (value.trim() === "") {
    document.querySelector(
      `#error-required-${name}`
    ).innerHTML = `${name} không được bỏ trống !`;
    return false;
  }

  document.querySelector(`#error-required-${name}`).innerHTML = "";
  return true;
}

function kiemTraKyTu(value, name) {
  var regexLetter = /^[A-Z a-z]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(`#error-regex-${name}`).innerHTML = "";
    return true;
  }
  document.querySelector(
    `#error-regex-${name}`
  ).innerHTML = `${name} không hợp lệ !`;
  return false;
}
