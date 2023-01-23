const button = document.querySelector(".button-copy");
const coupon = document.querySelector(".coupon");

const copy = (e) => {
  e.preventDefault();
  console.log("oi");

  coupon.select();
  coupon.setSelectionRange(0, 99);
  document.execCommand("copy");

  button.textContent = "Copied";
  setTimeout(() => {
    button.textContent = "Copy";
  }, 3000);
  setInterval;
};

button.addEventListener("click", copy);
