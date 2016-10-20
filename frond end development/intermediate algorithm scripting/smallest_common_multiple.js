//noprotect
function smallestCommons(arr) {
    var big, small, common = 0;

    if (arr[0] > arr[1]) {
        big = arr[0];
        small = arr[1];
    } else {
        small = arr[0];
        big = arr[1];
    }

    while (true) {
        common += big;
        if (common % small === 0 & isDivisable(common, big, small)) {
            return common;
        }
    }
}

function isDivisable(n, big, i) {
    for (i; i < big; i++) {
        if (n % i !== 0) {
            return false;
        }
    }

    return true;
}

console.log(smallestCommons([23,18]));
