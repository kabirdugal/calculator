const screen = document.querySelector('.calc-screen');
let btns = document.querySelectorAll('.btn');

let displayValue = '0'
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// updates display
function updateDisplay() {
    if (displayValue.length > 13) {
        screen.innerText = displayValue.substring(0, 13);
    } else {
        screen.innerText = displayValue;
    }
}
updateDisplay();


btns.forEach(btn => btn.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('num-btn')) { // number button
        inputOperand(e.target.id);
        updateDisplay();

    } else if (e.target.classList.contains('op-btn')) {      // operator button
        console.log(displayValue, firstOperand, secondOperand, currentOperator);
        inputOperator(e.target.id);
        updateDisplay();
        
    } else if (e.target.classList.contains('equals-btn')) {  // equals button
        console.log(displayValue, firstOperand, secondOperand, currentOperator);
        inputEquals();
        updateDisplay();

    } else if (e.target.classList.contains('clear-btn')) {   // clear button
        clearDisplay();
        updateDisplay();

    } else if (e.target.classList.contains('decimal-btn')) { // decimal button
        inputDecimal(e.target.id); // appends decimal to displayValue
        updateDisplay();

    } else if (e.target.classList.contains('percent-btn')) { // percent button
        inputPercent();
        updateDisplay();

    } else if (e.target.classList.contains('plus-minus-btn')) {  // plus/minus button
        inputSignSwitch();
        updateDisplay();
    }
    
}))


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

function clearDisplay() {
    firstOperand = null;
    currentOperator = null;
    secondOperand = null;
    displayValue = '0';
}

function inputDecimal(dec) {
    if (displayValue.includes(dec)) {
        return;
    } else {
        String(displayValue = displayValue + dec);
    }
}

function inputPercent() {
    displayValue = String(displayValue / 100);
}

function inputSignSwitch() {
    displayValue = String(displayValue * -1);
}

// operate function
function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return 'lol';
        } else {
            return num1 / num2;
        }
    } else {
        return null;
    }
}

