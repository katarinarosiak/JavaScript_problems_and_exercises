// /Double Char (Part 2)
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Examples:

// Copy Code
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


function doubleConsonants(string) {

  let doubleConstant = '';
  let vowels = 'aeiou';
  let consonants = 'bcdfghjklmnprstvxyz'

  for (let i = 0; i < string.length; i++) {

    if (!vowels.split('').includes(string[i].toLowerCase()) && consonants.split('').includes(string[i].toLowerCase())) {
      doubleConstant += string[i] + string[i];
    } else if ((!vowels.split('').includes(string[i].toLowerCase()) && !consonants.split('').includes(string[i].toLowerCase()))) {
      doubleConstant += string[i];
    }
  }
  return doubleConstant;
}

