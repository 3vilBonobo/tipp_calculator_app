let billInput = document.querySelector('#bill');
let buttonsInput = document.querySelectorAll('.btn');
let customInput = document.querySelector('.custom');
let peopleInput = document.querySelector('#people');
let total = 0;
let tip = 0;
let resetBtn = document.querySelector('.reset');

billInput.addEventListener('input', getBillInput);
buttonsInput.forEach(getBtnInput);
customInput.addEventListener('input', getCustomInput);
peopleInput.addEventListener('input', getPeopleInput);
resetBtn.addEventListener('click', reset);

function getBillInput() {
  bill = billInput.value;

  console.log(`The bill is ${bill}`);
}

function getBtnInput() {}

function getCustomInput() {
  custom = customInput.value;
  console.log(`The tip is ${custom}`);
}

function getPeopleInput() {
  people = peopleInput.value;
  console.log(`There are ${people} people`);
}

function reset() {}
