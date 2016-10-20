function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var output = "";
    var str = str.replace(/[ _]/gi, "-");

    for (var i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            if (i != 0 & str[i - 1] != "-") {
                output = output.concat("-");
            }
        }
        output = output.concat(str[i].toLowerCase());
    }

    return output;
}

console.log(spinalCase('thisIsSpinalTap'));
