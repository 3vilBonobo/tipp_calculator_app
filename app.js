let billInput = document.querySelector('#bill');
let buttonsInput = document.querySelectorAll('.btn');
let customInput = document.querySelector('.custom');
let peopleInput = document.querySelector('#people');
let total = document.querySelector('.total');
let tip = document.querySelector('.tip');
let resetBtn = document.querySelector('.reset');
let error = document.querySelector('.error');
let tipInput;

billInput.addEventListener('input', checkValues);
buttonsInput.forEach(getBtnInput);
customInput.addEventListener('input', updateTipValueCustom);
peopleInput.addEventListener('input', checkValues);
resetBtn.addEventListener('click', reset);
function getBtnInput(e) {
  e.addEventListener('click', updateTipValueBtn);
}

function updateTipValueCustom() {
  tipInput = customInput.value;
  checkValues();
}
function updateTipValueBtn() {
  tipInput = this.getAttribute('data-value');
  checkValues();
}

function checkValues() {
  if (peopleInput.value == 0) {
    error.style.visibility = 'visible';
  } else {
    error.style.visibility = 'hidden';
    calculate();
  }
}

function calculate() {
  total.innerText = `$${(billInput.value / peopleInput.value).toFixed(2)}`;
  tip.innerText = `$${(
    (billInput.value * tipInput) /
    100 /
    peopleInput.value
  ).toFixed(2)}`;
}

function reset() {
  billInput.value = '';
  buttonsInput.value = '';
  customInput.value = '';
  peopleInput.value = '';
  error.style.visibility = 'hidden';
  total.innerText = '$0.00';
  tip.innerText = '$0.00';
}
window.onload = reset;
