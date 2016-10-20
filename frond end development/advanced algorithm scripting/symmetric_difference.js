function sym(args) {
    var args = Array.prototype.slice.call(arguments);

    function difference(arr1, arr2) {
        var output = [];
        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) == -1) {
                output.push(arr1[i]);
            }
        }

        for (var i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                output.push(arr2[i]);
            }
        }
        return output;
    }

    function compare(a, b) {
        return a - b;
    }

    function removeDoubles(val, index, self) {
        return index === self.indexOf(val);
    }

    args = args.reduce(difference);
    args = args.sort(compare);

    return args.filter(removeDoubles);
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
