// var inputValue = document.getElementById("userInput");
// function writeNum(num) {
//     inputValue.value += num;
// }

// function clearInput() {
//     inputValue.value = "";
// }
// function deleteLastChar() {
//     inputValue.value = inputValue.value.slice(0, -1);
// }

// function square() {
//     var num = parseFloat(inputValue.value);
//     inputValue.value = num * num;
// }

// NEW CODE=====================================================================================


var inputValue = document.getElementById("userInput");
inputValue.value = "0"; // set default value to 0
var resetInput = false; // used to reset after result shown

function writeNum(num) {
    if (inputValue.value === "0" || resetInput) {
        inputValue.value = "";
        resetInput = false;
    }
    inputValue.value += num;
}

function clearInput() {
    inputValue.value = "0";
    resetInput = false;
}

function deleteLastChar() {
    inputValue.value = inputValue.value.slice(0, -1);
    if (inputValue.value === "") {
        inputValue.value = "0";
    }
}

function square() {
    var num = parseFloat(inputValue.value);
    if (isNaN(num)) {
        inputValue.value = "0";
    } else {
        inputValue.value = num * num;
    }
    resetInput = true;
}

function add() {
    inputValue.value += "+";
}

function subtract() {
    inputValue.value += "-";
}

function multiply() {
    inputValue.value += "x";
}

function divide() {
    inputValue.value += "/";
}

function remainer() {
    inputValue.value += "%";
}

function calculateResult() {
    var expr = inputValue.value;

    // Split into numbers and operators
    var numbers = [];
    var operators = [];
    var num = "";

    for (var i = 0; i < expr.length; i++) {
        var ch = expr[i];
        if (!isNaN(ch) || ch === ".") {
            num += ch;
        } else {
            numbers.push(parseFloat(num));
            operators.push(ch);
            num = "";
        }
    }
    numbers.push(parseFloat(num)); // last number

    // Simple left-to-right calculation
    var result = numbers[0];
    for (var i = 0; i < operators.length; i++) {
        var next = numbers[i + 1];
        var op = operators[i];

        if (op === "+") { result = result + next; }
        else if (op === "-") { result = result - next; }
        else if (op === "*" || op === "x") { result = result * next; }
        else if (op === "/") {
            if (next === 0) {
                inputValue.value = "Error";
                return;
            }
            result = result / next;
        } else if (op === "%") {
            result = result % next;
        }
    }

    inputValue.value = result;
    resetInput = true;
}
