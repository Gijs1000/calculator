function add(a, b) { //how well will these functions work with multiple values?
    return a + b; //add a check to see if value is a number
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, numberA, numberB) {
    if (operator === 'add') {
        return add(numberA, numberB);
    } else if (operator === 'subtract') {
        return subtract(numberA, numberB);
    } else if (operator === 'multiply') {
        return multiply(numberA, numberB)
    } else {
        return divide(numberA, numberB);
    }
}

function updateDisplay(value) {
    let displayedText = document.querySelector("#output");
    displayedText.textContent = value.toString();
}

let input = '';
const numberButtons = Array.from(document.getElementsByClassName('numberButton')); //adding event listeners to all number buttons
for (let i = 0; i < numberButtons.length; i++) {
    let button = numberButtons[i];
    button.addEventListener('click', () => input += button.textContent); //captures input and stores to input variable
}

let operator = '';
const operatorButtons = Array.from(document.getElementsByClassName('operatorButton')); //add event listeners to operator buttons
for (let i = 0; i < operatorButtons.length; i++) {
    let button = numberButtons[i];
    button.addEventListener('click', () => addOperator(button));
}

function addOperator(button) {
    if (operator) { //
        operator = '';
    }
    operator += button.id;
}



//when user presses an operator (except equals), input so far + the type of operator is stored
//when user presses equals sign (=), store second part of input and perform the operator on first input & second input (use operate function)