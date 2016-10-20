function dropElements(arr, func) {
  // Drop them elements.
  var length = arr.length;
  for (var i = 0; i < length; i++) {
      if (func(arr[0])) {
          return arr;
      }
      arr.shift();
  }
  return [];
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
