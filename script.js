let screen = document.querySelector('.calc-screen');
let numBtns = document.querySelectorAll('.num-btn');

// Operator Functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Operate Function
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    } else {

    }
}

function populateDisplay(e) {
    screen.textContent += e.target.id;
}


numBtns.forEach(btn => btn.addEventListener('click', populateDisplay))