const calculator = {
  bill: 0,
  tip: 0,
  people: 0,
  tipDisplay: 0,
  totalDisplay: 0,
};

function updateDisplay() {
  // select the element with class of `calculator-screen`
  const tipDisplay = document.querySelector('.tip');
  const totalDisplay = document.querySelector('.total');
  // update the value of the element with the contents of `displayValue`
  tipDisplay.value = calculator.tipDisplay;
  totalDisplay.value = calculator.totalDisplay;
}

updateDisplay();

const keys = document.querySelector('.btn-input-tip');
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  if (target.classList.contains('five')) {
    console.log('five', target.value);
  } else if (target.classList.contains('ten')) {
    console.log('ten', target.value);
  } else if (target.classList.contains('fifteen')) {
    console.log('fifteen', target.value);
  } else if (target.classList.contains('twenty-five')) {
    console.log('twenty-five', target.value);
  } else if (target.classList.contains('fifty')) {
    console.log('fifty', target.value);
  } else if (target.classList.contains('custom')) {
    console.log('custom', target.value);
  } else {
    console.log('digit', target.value);
  }
});
