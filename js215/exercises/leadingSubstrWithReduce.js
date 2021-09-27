// Leading Substrings
// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

// Examples:

// Copy Code
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(str) {
  let arrOfChar = str.split('');
  return arrOfChar.reduce((preVal, currVal, idx) => {
    preVal.push(arrOfChar.slice(0, idx + 1).join(''))
    return preVal
  }, [])
};