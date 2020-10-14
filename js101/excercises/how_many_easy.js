// /How Many?
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Example:

// Copy Code
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2


function countOccurrences(arr) {
  let obj = {};

  for (let index = 0; index < arr.length; index++) {
    obj[arr[index]] = obj[arr[index]] || 0;
    obj[arr[index]]++;
  }
  console.log(`car => ${obj['car']}`);
  console.log(`truck => ${obj['truck']}`);
  console.log(`SUV => ${obj['SUV']}`);
  console.log(`motorcycle => ${obj['motorcycle']}`);
}