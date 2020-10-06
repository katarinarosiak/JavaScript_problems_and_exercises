// /Get The Middle Character
// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

// Copy Code
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


function centerOf(str) {
  let chunk;
  if (str.length % 2) {
    chunk = str.slice(0, (str.length + 1) / 2)
    return chunk[chunk.length - 1];
  } else {
    chunk = str.slice(0, (str.length + 2) / 2);
    return chunk.slice(-2);
  }

}