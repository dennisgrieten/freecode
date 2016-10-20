function fearNotLetter(str) {
    var output = undefined;

    for (var i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - 1 != str.charCodeAt(i - 1)) {
            output = String.fromCharCode((str.charCodeAt(i) + str.charCodeAt(i - 1)) / 2);
            break;
        }
    }

    return output;
}

console.log(fearNotLetter("abce"));
