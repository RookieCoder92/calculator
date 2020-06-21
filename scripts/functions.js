function renderDisplay() {
    if (result) {
        calcDisplay.textContent = result;
    } else if (!operator) {
        calcDisplay.textContent = num1;
    } else if (num1 && operator) {
        calcDisplay.textContent = `${num1}${operator}${num2}`;
    }
}

function clearDisplay() {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    calcDisplay.textContent = "";
}

function backspace() {
    let substr1;
    let substr2;
    if (!operator) {
        substr1 = num1.substr(0, num1.length - 1);
        num1 = substr1;
        renderDisplay();
    } else {
        substr2 = num2.substr(0, num2.length - 1);
        num2 = substr2;
        renderDisplay();
    }
}

function operatorIsAdd() {
    if (!num1) {
        return;
    } else {
        operator = "+";
        renderDisplay();
    }
    
}

function operatorIsMinus() {
    if (!num1) {
        return;
    } else {
        operator = "-";
        renderDisplay();
    }
}

function operatorIsMultiply() {
    if (!num1) {
        return;
    } else {
        operator = "x";
        renderDisplay();
    }
}

function operatorIsDivide() {
    if (!num1) {
        return;
    } else {
        operator = "/";
        renderDisplay();
    }
}

function operate() {
    if (num1 && num2 && operator) {
        if (operator === "+") {
            result = (Number(num1) + Number(num2)).toFixed(2);
            renderDisplay();
        } else if (operator === "-") {
            result = (Number(num1) - Number(num2)).toFixed(2);
            renderDisplay();
        } else if (operator === "x") {
            result = (Number(num1) * Number(num2)).toFixed(2);
            renderDisplay();
        } else if (operator === "/") {
            result = (Number(num1) / Number(num2)).toFixed(2);
            renderDisplay();
        }
        num1 = result;
        num2 = "";
        result = "";
        operator = "";
    } else {
        return;
    }
}
// comment
