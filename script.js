const screen = document.querySelector('.calc-screen');
const btns = document.querySelectorAll('.btn');

let displayValue = '0'
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// updates display
function updateDisplay() {
    if (displayValue.length > 16) {
        screen.innerText = displayValue.substring(0, 16);
    } else {
        screen.innerText = displayValue;
    }
}
updateDisplay();

// number button functionality
function inputOperand(operand) {
    if(currentOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

// operator button functionality
function inputOperator(op) {
    if (firstOperand === null) {
        firstOperand = displayValue;
        currentOperator = op;
    } else {
        secondOperand = displayValue;
        result = operate(currentOperator, firstOperand, secondOperand);
        displayValue = result;
        firstOperand = result;
        currentOperator = op;
    }

}

// equals button functionality
function inputEquals() {
    if (firstOperand === null) {
        displayValue = displayValue;
    } else  {
        secondOperand = displayValue;
        result = operate(currentOperator, firstOperand, secondOperand);
        if (result === 'lol') {
            displayValue = 'ERROR'
        } else {
            displayValue = result;
            firstOperand = null;
            secondOperand = null;
            firstOperator = null;
        }
        
    }
}

// all clear functionality, resets all variables
function clearDisplay() {
    firstOperand = null;
    currentOperator = null;
    secondOperand = null;
    displayValue = '0';
}

// decimal functionality
function inputDecimal(dec) {
    if (displayValue.includes(dec)) {
        return;
    } else {
        String(displayValue = displayValue + dec);
    }
}

// percent functionality
function inputPercent() {
    displayValue = String(displayValue / 100);
}

// flips sign of value
function inputSignSwitch() {
    displayValue = String(displayValue * -1);
}

// operate function
function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === '+') {
        return String(num1 + num2);
    } else if (operator === '-') {
        return String(num1 - num2);
    } else if (operator === '*') {
        return String(num1 * num2);
    } else if (operator === '/') {
        if (num2 === 0) {
            return 'lol';
        } else {
            return String(num1 / num2);
        }
    } else {
        return null;
    }
}

// Adds functionality to each calc button
btns.forEach(btn => btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('num-btn')) { // number button
        inputOperand(e.target.id);
        updateDisplay();

    } else if (e.target.classList.contains('op-btn')) { // operator button
        inputOperator(e.target.id);
        updateDisplay();
        
    } else if (e.target.classList.contains('equals-btn')) { // equals button
        inputEquals();
        updateDisplay();

    } else if (e.target.classList.contains('clear-btn')) { // clear button
        clearDisplay();
        updateDisplay();

    } else if (e.target.classList.contains('decimal-btn')) { // decimal button
        inputDecimal(e.target.id); 
        updateDisplay();

    } else if (e.target.classList.contains('percent-btn')) { // percent button
        inputPercent();
        updateDisplay();

    } else if (e.target.classList.contains('plus-minus-btn')) { // plus/minus button
        inputSignSwitch();
        updateDisplay();
    }
    
}))

// Key Listeners
document.addEventListener('keydown', function (e) {
    if (e.key === '0') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '1') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '2') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '3') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '4') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '5') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '6') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '7') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '8') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === '9') {
        inputOperand(e.key);
        updateDisplay();
    }
    if (e.key === 'c') {
        clearDisplay();
        updateDisplay();
    }
    if (e.key === '.') {
        inputDecimal(e.key); 
        updateDisplay();
    }
    if (e.key === '+') {
        inputOperator(e.key);
        updateDisplay();
    }
    if (e.key === '-') {
        inputOperator(e.key);
        updateDisplay();
    }
    if (e.key === '*') {
        inputOperator(e.key);
        updateDisplay();
    }
    if (e.key === '/') {
        inputOperator(e.key);
        updateDisplay();
    }
    if (e.key === 'Enter') {
        inputEquals();
        updateDisplay();
    }
  });