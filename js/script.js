const label = document.querySelector('.js-label');
const checkbox = label.firstElementChild;
const toggleSpan = label.lastElementChild;
const prices = document.querySelectorAll('.js-price');

const monthlyPrices = [19.99, 24.99, 39.99];
const annualPrices = [199.99, 249.99, 399.99];

const amountAdder = (amountArr) =>
  prices.forEach((price, i) => {
    price.innerHTML = `<span class="box__amount-span">&dollar;</span>${amountArr[i]}`;
  });

const addPricesAnim = function () {
  prices.forEach((price, i) => {
    price.classList.add('price--is-visible');

    setTimeout(
      () => price.classList.remove('price--is-visible'),
      (i + 3) * 100
    );
  });
};

const togglePrices = function () {
  if (checkbox.checked) {
    amountAdder(annualPrices);
    toggleSpan.classList.add('input--is-checked');
  } else {
    amountAdder(monthlyPrices);
    toggleSpan.classList.remove('input--is-checked');
  }
};

label.addEventListener('click', () => {
  togglePrices();
  addPricesAnim();
});
window.addEventListener('load', () => (checkbox.checked = false));
