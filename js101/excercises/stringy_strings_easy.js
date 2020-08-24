Stringy Strings
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'.The length of the string should match the given integer.

  Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// /Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// Examples:

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


function stringy(int) {
  let string = "";

  for (let i = 0; i < int; i++) {
    if (string[string.length - 1] === '0' || !string.length) {
      string += "1";
    } else {
      string += "0";
    }
  }
  return string;
}

