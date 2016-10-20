function myReplace(str, before, after) {
    if (before[0] == before[0].toUpperCase()) {
        after = after.replace(after[0], after[0].toUpperCase());
    }
    
    return str.replace(new RegExp(before, 'g'), after);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
