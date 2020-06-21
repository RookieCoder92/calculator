// declare global variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

// calculator display
const calcDisplay = document.querySelector(".calculator-display-p");

// save buttons to variables
const clearButton = document.querySelector(".clear-button");
const backButton = document.querySelector(".back-button");
const multiplyButton = document.querySelector(".multiply-button");
const sevenButton = document.querySelector(".seven-button");
const eightButton = document.querySelector(".eight-button");
const nineButton = document.querySelector(".nine-button");
const divideButton = document.querySelector(".divide-button");
const fourButton = document.querySelector(".four-button");
const fiveButton = document.querySelector(".five-button");
const sixButton = document.querySelector(".six-button");
const minusButton = document.querySelector(".minus-button");
const oneButton = document.querySelector(".one-button");
const twoButton = document.querySelector(".two-button");
const threeButton = document.querySelector(".three-button");
const addButton = document.querySelector(".add-button");
const zeroButton = document.querySelector(".zero-button");
const decimalButton = document.querySelector(".decimal-button");
const equalsButton = document.querySelector(".equals-button");

// add event listeners to all numbers
zeroButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "0"
    } else {
        num2 += "0"
    }
    renderDisplay();
});

oneButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "1"
    } else {
        num2 += "1"
    }
    renderDisplay();
});

twoButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "2"
    } else {
        num2 += "2"
    }
    renderDisplay();
});

threeButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "3"
    } else {
        num2 += "3"
    }
    renderDisplay();
});

fourButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "4"
    } else {
        num2 += "4"
    }
    renderDisplay();
});

fiveButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "5"
    } else {
        num2 += "5"
    }
    renderDisplay();
});

sixButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "6"
    } else {
        num2 += "6"
    }
    renderDisplay();
});

sevenButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "7"
    } else {
        num2 += "7"
    }
    renderDisplay();
});

eightButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "8"
    } else {
        num2 += "8"
    }
    renderDisplay();
});

nineButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "9"
    } else {
        num2 += "9"
    }
    renderDisplay();
});


// add event listeners to miscellanious buttons
clearButton.addEventListener("click", clearDisplay);

backButton.addEventListener("click", backspace);

decimalButton.addEventListener("click", function () {
    if (!operator) {
        num1 += "."
    } else {
        num2 += "."
    }
    renderDisplay();
});


// add event listeners to operators
addButton.addEventListener("click", operatorIsAdd);

minusButton.addEventListener("click", operatorIsMinus);

divideButton.addEventListener("click", operatorIsDivide);

multiplyButton.addEventListener("click", operatorIsMultiply);


// add event listener to final operator
equalsButton.addEventListener("click", operate);