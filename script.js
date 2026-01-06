let firstOperand = null;
let operator = null;
let shouldClearDisplay = false;

const resultDisplay = document.getElementById('result');

function appendNumber(number) {
  if (shouldClearDisplay) {
    resultDisplay.value = '';
    shouldClearDisplay = false;
  }
  resultDisplay.value += number;
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(resultDisplay.value);
  operator = op;
  shouldClearDisplay = true;
}

function clearDisplay() {
  resultDisplay.value = '';
  firstOperand = null;
  operator = null;
}

function calculate() {
  if (operator === null) {
    return;
  }

  const secondOperand = parseFloat(resultDisplay.value);
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
  }

  resultDisplay.value = result;
  operator = null;
  shouldClearDisplay = true;
}
