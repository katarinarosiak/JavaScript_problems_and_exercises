// /Letter Swap
// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// Examples:

// Copy Code
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
console.log(swap('Aa'));

// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - 
// Output:
// - 
// Rules:
// -
// -
// -
// -
// -
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - 
// -
// -
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE:

function swap(string) {
  let swappedWords = string.split(' ');

  if (string.length <= 1) {
    return string;
  }



  for (let index = 0; index < swappedWords.length; index++) {
    swappedWords[index] = swappedWords[index][swappedWords[index].length - 1] + swappedWords[index].slice(1, swappedWords[index].length - 1) + swappedWords[index].slice(0, 1)
  }

  return swappedWords.join(' ');
}


//In this solition we are starting with using spli() method in order to coerce the string into an array of words. Then we deal with the edge case first and create an if statement with a condition that if the input string's length is lower or equal than 1, we would just return the input string, since we don't have to perform any action on it. Otherwise we would iterate thoight the array `swappedWords` that we have initialised on the line.... For each word in the array we would concatinate the last letter with middle part get by using `slice` method, with the first letter of the word. We would then assign this new string to `swappedWords` variable. FInally we would return the array using `join()` method in order to coerce it to string. 