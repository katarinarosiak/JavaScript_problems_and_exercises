// /Double Char (Part 1)
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

// Copy Code
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


function repeater(string) {
  let doubbleString = "";

  for (let i = 0; i < string.length; i++) {
    doubbleString += string[i] + string[i];
  }


  return doubbleString;
}