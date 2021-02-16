const screen = document.querySelector('.calc-screen');
const numBtns = document.querySelectorAll('.num-btn');
const opBtns = document.querySelectorAll('.op-btn');
const equalsBtn = document.querySelector('.equals-btn');
const allClearBtn = document.querySelector('.clear-btn');
let btns = document.querySelectorAll('.btn');

let displayValue = '0';
let operandList = [];
let operatorList = [];

let firstOperand = null;
let operator = null;
let secondOperand = null;


// updates display
function updateDisplay() {
    
    if (displayValue.length > 16) {
        screen.innerText = displayValue.substring(0, 16);
    } else {
        screen.innerText = displayValue;
    }
}


btns.forEach(btn => btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('num-btn')) {            // number button
        const val = e.target.id;
        if (displayValue === '0' || operator !== null) {
            displayValue = val;
            updateDisplay();
        } else {
            displayValue += val;
            updateDisplay();
        }

    } else if (e.target.classList.contains('op-btn')) {      // operator button
        firstOperand = displayValue;
        operator = e.target.id;
        
    } else if (e.target.classList.contains('equals-btn')) {  // equals button
        secondOperand = displayValue;
        displayValue = operate(operator, firstOperand, secondOperand);
        updateDisplay();

    } else if (e.target.classList.contains('clear-btn')) {   // clear button
        firstOperand = null;
        operator = null;
        secondOperand = null;
        displayValue = '0';
        updateDisplay();

    } else if (e.target.classList.contains('decimal-btn')) { // decimal button
        displayValue = displayValue + e.target.id; // appends decimal to displayValue
        updateDisplay();

    } else if (e.target.classList.contains('percent-btn')) { // percent button
        displayValue = displayValue / 100;
        updateDisplay();

    } else if (e.target.classList.contains('plus-minus-btn')) {  // plus/minus button
        displayValue = displayValue * -1;
        updateDisplay();
    }
    
}))

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
            return null;
        } else {
            return num1 / num2;
        }
    } else {
        return null;
    }
}

