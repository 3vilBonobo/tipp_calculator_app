let billInput = document.querySelector('#bill');
let buttonsInput = document.querySelectorAll('.btn');
let customInput = document.querySelector('.custom');
let peopleInput = document.querySelector('#people');
let total = document.querySelector('.total');
let tip = document.querySelector('.tip');
let resetBtn = document.querySelector('.reset');

billInput.addEventListener('input', calculate);
buttonsInput.forEach(getBtnInput);
customInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);
resetBtn.addEventListener('click', reset);

function getBtnInput() {}

function reset() {
  billInput.value = '';
  buttonsInput.value = '';
  customInput.value = '';
  peopleInput.value = '';
  total.innerText = '$0.00';
  tip.innerText = '$0.00';
}

function calculate() {
  total.innerText = `$${billInput.value / peopleInput.value}`;
  tip.innerText = `$${
    (billInput.value * customInput.value) / 100 / peopleInput.value
  }`;
}
