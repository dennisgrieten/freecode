
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this
    var length = Object.keys(source).length;

    for (var key in collection) {
        var counter = 1;
        for (var skey in source) {
            if (collection[key].hasOwnProperty(skey)) {
                if (counter == length) {
                    if (collection[key][skey] == source[skey]) {
                        arr.push(collection[key]);
                    }
                }
            } else {
                break;
            }
            counter++;
        }
    }
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))
