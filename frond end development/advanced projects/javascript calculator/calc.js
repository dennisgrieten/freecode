addEventListener("load", init, false);

var total;
var current = 0;

function display(value) {
    document.getElementById('calculator-screen').innerHTML = value;
}

function enterValue(value) {
    alert(current);
    if (current === 0) {
        current = value;
    } else {
        current = current * 10 + value;
    }

    display(current);
}
