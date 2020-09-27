// /Multiplicative Average
// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

// Examples:

// Copy Code
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"





function multiplicativeAverage(arr) {

  let result = arr.reduce((acc, num) => acc * num);

  return (result / arr.length).toFixed(3);
}
