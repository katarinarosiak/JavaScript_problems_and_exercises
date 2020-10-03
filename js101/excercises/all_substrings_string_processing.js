/// All Substrings
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

// Example:

// Copy Code
console.log(substrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substrings(string) {
  let arr = [];

  //abc => a, ab, abc, 
  for (let i = 0; i < string.length; i++) {
    for (let y = i + 1; y < string.length + 1; y++) {
      arr.push(string.slice(i, y))
    }

  }
  return arr;
}
