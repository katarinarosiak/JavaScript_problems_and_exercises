// Double Char Part 1
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

// Copy Code
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater('') === "")

function repeater(str) {
  return str.replace(/(.)/g, '$1$1')
}