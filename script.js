const button = document.querySelector(".button-copy");
const coupon = document.querySelector(".coupon");

const copy = (e) => {
  e.preventDefault();
  console.log("oi");

  navigator.clipboard.writeText(coupon.value);

  button.textContent = "Copied";
  setTimeout(() => {
    button.textContent = "Copy";
  }, 3000);
  setInterval;
};

button.addEventListener("click", copy);
