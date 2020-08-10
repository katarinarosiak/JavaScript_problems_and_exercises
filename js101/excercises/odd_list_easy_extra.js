/// Odd Lists
// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Further Exploration
Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.

Try to solve this exercise in a different way.

  // Examples:

  console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []





function oddities(arr) {
  let result = [];
  while (arr.length > 0) {
    arr.shift();
    if (arr.length > 0) {
      result.push(arr[0]);
      arr.shift();
    }
  }
  return result;
}