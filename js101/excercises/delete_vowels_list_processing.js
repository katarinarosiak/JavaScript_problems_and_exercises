// /Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

// Examples:

// Copy Code
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
//removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


function removeVowels(arr) {
  let newArr = '';
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', "O", 'U'];

  return arr.map(el => el.split('').filter(el => !vowels.includes(el)).join(''));

}