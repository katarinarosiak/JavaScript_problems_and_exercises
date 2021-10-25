// Get the Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

// Copy Code
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


function centerOf(str) {
  let start = 0;
  let strLen = str.length;

  if (!(strLen % 2)) {
    start = (strLen / 2) - 1;
    return str[start] + str[start + 2]
  }
  start = Math.floor(strLen / 2);
  return str[start];
}