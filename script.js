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

const numberButtons = Array.from(document.getElementsByClassName('numberButton'));