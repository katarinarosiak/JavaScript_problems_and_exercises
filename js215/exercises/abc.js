// Problem Description
// A collection of spelling blocks has two letters per block, as shown in this list:

// Copy Code
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:

// Copy Code
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//- string 
//Output:
//-  boolean 
// 
// Clarification of domain terms: 
// -
// - 
//RULES:
// Explicit:
//- use each block only once 
//- each word can use only one letter from a block 
//- case insensitive 
//-
//-Implicit
//-
//-
// EDGE CASES:
//    INPUT:
// => input data type: (can input be different data type?)
// => boundary conditions:
// => too many, too little arguments or none 
// => repetition / duplication 
// => if ARRAYS:
//    - [], [1, 2, a: 'A'], [1,,3], [<3 empty values>], large arrays
// => if NUMBERS:
//     - 0, -0, Infinity, -Infinity, very large nums, NaN, +/-, .234, 
// => if STRINGS: 
//    - case sensitive.insensitive (special case UuU, AA)
//    - ' ', '  ', ' q', 'q ', tabs,  /n etc.
//    - '42', '@', 'dog\n'
// => SPECIAL VALUES AND EMPTINESS  
//    - undefined, NaN, null, function, /abc/
//    - {}, '', [], 0, [''],
// => BOOLEAN
//    -  true / false
//  
// => Failures / Bad input: 
//   - exceptions? 
//   - return special val (null/undefined/0)
// OUTPUT: 
// - same or new obj? 
// - 
//QUESTIONS: 
//- 
//
//----------------------- TEST YOUR UNDERSTANDING  -----------------
//   B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
//
// 'ABBA' 
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//
// Happy Path
// console.log(isBlockWord('ABBA') === false)
// console.log(isBlockWord('BGVL') === true)
// console.log(isBlockWord('bgvl') === true)
// 
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
// Edge Cases: 
//

// 
// Failures / Bad input: 
// 
//
//
//
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: string 
// array 
// ------------------------  ALGORYTHM:  -----------------------------
// - construct an array with pairs of letters 
//- string change it to upper case 
//- iterate through every character 
//    - filter out all elements that includes the current character
//- compare length of the returned array with the original char array
//    -  the length of original arr - word.length is the same as returned return true
//    - else return false 
//
//- ---------------------- TESTING ALGORYTHM WITH TEST CASES --------
//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// -------------------------------- CODE:  -----------------------------  

function isBlockWord(word) {
  let charPairs = ['B:O' ,  'X:K' ,  'D:Q'  , 'C:P'  , 'N:A', 'G:T'  , 'R:E'  , 'F:S'  , 'J:W' ,  'H:U' ,'V:I'  ,' L:Y'  , 'Z:M'];
    
    let filtered = charPairs.slice();
   for (let idx = 0; idx < word.length; idx++) {
    let letter = word[idx].toUpperCase();
    filtered = filtered.filter(pair => !pair.includes(letter)); 
   }
  
  
  return charPairs.length - word.length === filtered.length; 
}


console.log(isBlockWord('ABBA') === false)
console.log(isBlockWord('BGVL') === true)
console.log(isBlockWord('bgvl') === true)
// 
console.log(isBlockWord('BATCH') === true)
console.log(isBlockWord('BUTCH')  === false)
console.log(isBlockWord('jest') === true)