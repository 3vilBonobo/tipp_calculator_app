let billInput = document.querySelector('#bill');
let buttonsInput = document.querySelectorAll('.btn');
let customInput = document.querySelector('.custom');
let peopleInput = document.querySelector('#people');
let total = document.querySelector('.total');
let tip = document.querySelector('.tip');
let resetBtn = document.querySelector('.reset');
let error = document.querySelector('.error');

billInput.addEventListener('input', calculate);
buttonsInput.forEach(getBtnInput);
customInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);
resetBtn.addEventListener('click', reset);

function getBtnInput(e) {
  e.addEventListener('click', () => {
    console.log(e.getAttribute('data-value'));
  });
}

function reset() {
  billInput.value = '';
  buttonsInput.value = '';
  customInput.value = '';
  peopleInput.value = '';
  total.innerText = '$0.00';
  tip.innerText = '$0.00';
}

function calculate() {
  total.innerText = `$${(billInput.value / peopleInput.value).toFixed(2)}`;
  tip.innerText = `$${(
    (billInput.value * customInput.value) /
    100 /
    peopleInput.value
  ).toFixed(2)}`;
}
