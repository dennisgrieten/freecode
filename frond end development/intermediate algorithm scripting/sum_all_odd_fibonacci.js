function sumFibs(num) {
    var a = 0;
    var b = 1;
    var c = 0;
    var output = 0;

    while (1) {
        c = a;
        a += b;
        b = c;
        console.log(a);

        if (a & 1) {
            if (a > num) {break;}
            output += a;
        }
    }

    return output;
}

console.log(sumFibs(400));
