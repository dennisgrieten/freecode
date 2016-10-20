function steamrollArray(arr) {
  // I'm a steamroller, baby
  var output = [];
  steamroll(arr, output);
  return output;
}

function steamroll(arr, output) {
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            steamroll(arr[i], output);
        } else {
            output.push(arr[i]);
        }
    }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
