var entries = [];
var currentNumber = "";
var operand = "";

function enterValue(val) {
    var display = document.getElementById("display");

    switch (val) {
        case "=":
            if (entries.length === 1) {
                break;
            }
            if (currentNumber) {
                entries.push(currentNumber);
            }
            display.value = eval(entries.join(''));
            entries = [];
            entries.push(display.value);
            currentNumber = "";
            operand = "";
            break;

        case "ac":
            display.value = "0";
            currentNumber = "";
            operand = "";
            entries = [];
            break;

        case "ce":
            if (!currentNumber) {
                entries = [];
                break;
            }
            currentNumber = "";
            display.value = "0";
            break;

        case ".":
            if (current.includes(".")) {
                break;
            }

        case "+":
        case "-":
        case "*":
        case "/":
            if (currentNumber) {
                entries.push(currentNumber);
                currentNumber = "";
            }
            operand = val;
            display.value = operand;
            break;

        default:
            if (operand) {
                entries.push(operand);
                operand = "";
            }
            if (entries.length === 1) {
                break;
            }
            currentNumber += val;
            display.value = currentNumber;
    }
}
