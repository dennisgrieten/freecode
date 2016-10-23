function permAlone(str) {
    str = str.split("");
    var permArr = [];
    var usedChars = [];

    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    }

    function countNonConsecutive(str) {
        var regex = /([a-z])[1]/g;
        var count = 0;

        for (var i = 0; i < str.length; i++) {
            console.log(str[i].join(""));
            if (regex.test(str[i].join(""))) {
                count++;
            }
        }

        return count;
    }

    return countNonConsecutive(permute(str));
}


console.log(permAlone('aab'));
