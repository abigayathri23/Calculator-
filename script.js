let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('display').value = currentNumber;
}

function chooseOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') computeResult();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  document.getElementById('display').value = '0';
}

function computeResult() {
  let computation;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentNumber = computation.toString();
  operator = null;
  previousNumber = '';
  document.getElementById('display').value = currentNumber;
}
