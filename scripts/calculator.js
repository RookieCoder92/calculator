// declare global variables
let num1;
let num2;
let operator;

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
    console.log("0 was clicked!");
});

oneButton.addEventListener("click", function () {
    console.log("1 was clicked!");
});

twoButton.addEventListener("click", function () {
    console.log("2 was clicked!");
});

threeButton.addEventListener("click", function () {
    console.log("3 was clicked!");
});

fourButton.addEventListener("click", function () {
    console.log("4 was clicked!");
});

fiveButton.addEventListener("click", function () {
    console.log("5 was clicked!");
});

sixButton.addEventListener("click", function () {
    console.log("6 was clicked!");
});

sevenButton.addEventListener("click", function () {
    console.log("7 was clicked!");
});

eightButton.addEventListener("click", function () {
    console.log("8 was clicked!");
});

nineButton.addEventListener("click", function () {
    console.log("9 was clicked!");
});


// add event listeners to miscellanious buttons
clearButton.addEventListener("click", function () {
    console.log("C was clicked!");
});
backButton.addEventListener("click", function () {
    console.log("< was clicked!");
});

decimalButton.addEventListener("click", function () {
    console.log(". was clicked!");
});


// add event listeners to operators
addButton.addEventListener("click", function () {
    console.log("+ was clicked!");
});

minusButton.addEventListener("click", function () {
    console.log("- was clicked!");
});

divideButton.addEventListener("click", function () {
    console.log("/ was clicked!");
});

multiplyButton.addEventListener("click", function () {
    console.log("* was clicked!");
});


// add event listener to final operator
equalsButton.addEventListener("click", function () {
    console.log("= was clicked!");
});