function pairElement(str) {
    pairs = {
        A: "T",
        T: "A",
        G: "C",
        C: "G"
    };

    output = [];

    for (var i = 0; i < str.length; i++) {
        var pair = new Array(str[i]);
        pair.push(pairs[str[i]]);
        output.push(pair);
    }

    return output;
}

console.log(pairElement("GCG"));
