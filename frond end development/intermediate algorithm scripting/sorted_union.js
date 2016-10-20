function uniteUnique(arr) {
    var args = Array.prototype.slice.call(arguments);
    var arr = args.shift();

    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            if (arr.indexOf(args[i][j]) == -1){
                arr.push(args[i][j]);
            }
        }
    }
    return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
