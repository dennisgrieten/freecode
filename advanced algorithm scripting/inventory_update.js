function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2.forEach(function (item, index) {
        for (var i = 0; i < arr1.length; i++) {
            console.log(item[1], arr1[i][1]);
            if (item[1] === arr1[i][1]) {
                item[0] += arr1[i][0];

            } else {
                arr1.push(item);
            }
        }
    });

    console.log("---------");
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
