window.addEventListener("load", setQuote);

var previous = [];
var quotes = [
    ["If not now, when?", "Zen koan"],
    ["Trying to get rid of your ego is like trying to get rid of your shadow.", "Sri Ramana Maharshi"],
    ["When I look inside and see that I'm nothing, that's wisdom. When I look outside and see that I'm everything, that's love. And between these two, my life turns.","Sri Nisargadatta Maharaj"],
    ["Life has no opposite. The opposite of death is birth. Life is eternal.", "Eckhart Tolle"],
    ["No man ever steps in the same river twice.", "Heraclitus"],
    ["Everything flows (Panta Rhei).", "Heraclitus"],
    ["I fell into this trance called me", "Adyashanti"],
    ["Realization is truly more a state of remembrence more than it is a state of attainment.", "Adyashanti"],
];

function getQuote() {
    while (1) {
        var random = Math.floor(Math.random() * (quotes.length));
        if (previous.indexOf(random) == -1) {
            if (previous.length == (quotes.length / 2)) {
                previous.shift();
            }
            previous.push(random);
            return quotes[random];
        }
    }
}

function setQuote() {
    var quote = getQuote();
    document.getElementById("quote-div").innerHTML = (
        "<p id=\"quote-text\">\"" + quote[0] + "\"</p>" +
        "<p id=\"quote-author\">- " + quote[1] + "</p>"
    );
}

function tweetQuote() {
    var quote = quotes[previous.slice(-1)[0]];
    window.open("https://twitter.com/intent/tweet?text=" + "\"" + quote[0] + "\" -" + quote[1], "_blank");
}
