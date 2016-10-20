function convertHTML(str) {
    // &colon;&rpar;
    var elements = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    for (var i = 0; i < str.length; i++) {
        if (elements.hasOwnProperty(str[i])) {
            str = str.replace(str[i], elements[str[i]]);
        }
    }
    
    return str;
}

console.log(convertHTML("Dolce & Gabbana"));
