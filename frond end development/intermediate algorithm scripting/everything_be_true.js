function truthCheck(collection, pre) {
    // Is everyone being true?
    var negatives = [undefined, 0, "", null, NaN];

    for (var key in collection) {
        if (collection[key].hasOwnProperty(pre)) {
            if ((collection[key][pre] || 0) === 0) {
                console.log(collection[key][pre] || 0);
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
