// Delete Vowels
// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.


function removeVowels(arr) {
  return arr.map(str => str.replace(/[aoeui]/gi, ''));
}

// Examples:

// Copy Code
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]