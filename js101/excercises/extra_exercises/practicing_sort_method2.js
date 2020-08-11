// Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order(smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
//   Examples
// sortNumsAscending([1, 2, 10, 50, 5]) ➞[1, 2, 5, 10, 50]

// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞[-95, -24, 4, 29, 80, 85]

// sortNumsAscending(null) ➞[]

// sortNumsAscending([]) ➞[]
// Notes
// Test input can be positive or negative.


console.log(sortNumsAscending([1, 2, 10, 50, 5]))  //➞[1, 2, 5, 10, 50]

console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])) //➞[-95, -24, 4, 29, 80, 85]

console.log(sortNumsAscending(null)) //➞[]

console.log(sortNumsAscending([])) //➞[]

function sortNumsAscending(numbers) {
  if (numbers === null) {
    return [];
  } else {
    return numbers.sort((a, b) => a - b);
  }
}