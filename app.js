let billInput = document.querySelector('.bill');
let buttonsInput = document.querySelectorAll('.btn');
let customInput = document.querySelector('.custom');
let peopleInput = document.querySelector('.people');
let total = 0;
let tip = 0;
let resetBtn = document.querySelector('.reset');

billInput.addEventListener('input', getBillInput);
buttonsInput.forEach(getBtnInput);
customInput.addEventListener('input', getCustomInput);
peopleInput.addEventListener('input', getPeopleInput);
resetBtn.addEventListener('click', reset);

function getBillInput() {}

function getBtnInput() {}

function getCustomInput() {}

function getPeopleInput() {}

function reset() {}

//Total tip = (bill * tip )/100

//tipPerPerson = totalTip/people

//Total/person = bill / person
