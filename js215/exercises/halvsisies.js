// Halvsies
// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// Examples:

// Copy Code
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


// [] => [[], []]

function halvsies(arr) {
  let middle = !(arr.length % 2) ? arr.length / 2 : Math.ceil(arr.length / 2);  
  return [arr.slice(0, middle), arr.slice(middle)]
};