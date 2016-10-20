function translatePigLatin(str) {
    var vowels = /[aeiou]/;
    var tail = "";

    for (var i = 0; i < str.length; i++) {
        if (vowels.test(str[0])) {
            if (i === 0) {
                tail = tail.concat("way");
            } else {
                tail = tail.concat("ay");
            }
            break;
        } else {
            tail = tail.concat(str[0]);
            str = str.substr(1);
        }
    }

  return str.concat(tail);
}

console.log(translatePigLatin("spons"));
