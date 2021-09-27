// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:

// Copy Code
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// - find all combinations
// - count product 
// - sort asc

function multiplyAllPairs(arr1, arr2) {
  return arr1.map(num1 => arr2.map(num2 => num1 * num2)).flat().sort((a, b) => a - b)
};