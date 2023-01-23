const button = document.querySelector(".button-copy");
const coupon = document.querySelector(".coupon");

const copy = (e) => {
  e.preventDefault();
  console.log("oi");

  coupon.select();
  coupon.setSelectionRange(0, 99);
  document.execCommand("copy");
};

button.addEventListener("click", copy);
