const button = document.querySelector(".button-copy");
const coupon = document.querySelector(".coupon");

const copy = (e) => {
  e.preventDefault();
  console.log("oi");

  coupon.select();
  coupon.setSelectionRange(0, 99);

  navigator.clipboard.writeText(coupon.value).then(() => {
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 3000);
    setInterval;
  });
};

button.addEventListener("click", copy);
