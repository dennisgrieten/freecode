var time = 1500;
var length = time;
var intervalId = undefined;
display.value = time;

function display() {
    document.getElementById("time").innerHTML = time;
}

function adjustTime(t) {
    if (intervalId !== undefined) {
        return;
    }

    if (time <= 0 && t < 0) {
        return;
    }

    time = time - time % 60;
    time += t * 60;
    display();
    length = time;
}

function timer() {
    if (time <= 0) {
        clearInterval(intervalId);
        intervalId = undefined;
        document.getElementById("button-toggle").innerHTML = "Start";
        return;
    }

    time--;
    display();
}

function toggle() {
    var button = document.getElementById("button-toggle");

    if (button.innerHTML === "Start") {
        if (time === 0) {
            return;
        }

        button.innerHTML = "Stop";
        intervalId = setInterval(function() {
            timer()
        }, 1000);
    } else {
        clearInterval(intervalId);
        button.innerHTML = "Start";
        intervalId = undefined;
    }
}

function reset() {
    time = length;
    display();
}
