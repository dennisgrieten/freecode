function addTogether(x) {
    if ((arguments.length == 1) & Number.isInteger(x)) {
        return function (y) {
            if (Number.isInteger(y)) {
                return x + y;
            }
            return undefined;
        };
    } else if (arguments.length == 2) {
        if (Number.isInteger(x) & Number.isInteger(arguments[1])) {
            return x + arguments[1];
        }
        return undefined;
    }
}

console.log(addTogether(2)(3));
