// Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// Examples:

// Copy Code
// // simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// ABCDEFGHIJKLMNOPQRSTUVWXYZ


// Happy Path
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

//Wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

//all letters 
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"

// punctuations stays the same 
// console.log(caesarEncrypt('abcd, 123', 2)); //'cdef, 123'
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

//punctuations: 
//caesarEncrypt('AaBb', 2); //'CcDd'

//empty string as input:
// caesarEncrypt('', 2);  // ''

//wrapping up several times 
//caesarEncrypt('abc', 100);  // 



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//- string (text), number (key) representing how many positions to switch 
//Output:
//- 
// 
// Clarification of domain terms: 
// - Ceasar sipher - encyrption - in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet.
// - 
//RULES:
// Explicit:
//- n = 2 => a=> c
//- shift valu === key
//- only encyrpt letters, all other char left 
//- case matters 
// - if n > tex.length => wrap from the beginning 
//-Implicit
//- if n == 0 return text unchanged 
//- length of alphabet = 24 
// - switch to the right 
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
// 
//
//
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//
// Happy Path
// console.log()
// console.log()
// console.log()
//
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
//DATA STRUCTURES: strings => array = > string 
//  number
//  string 
// ------------------------  ALGORYTHM:  -----------------------------
//- split the string into arr of characters 
//- map each character and check if it is an alphabetic character 
//- if it is transform it depending on the value of key variable  
//- return the tarnsformed value 
//- join the array into string and return 
//-
//- 2. calcuate the new position of an alphabetic character based on key var and number of letters in the alphabets
//-  declarace const = 26 
//   - declare aphabeth string 
//   - current alpbahet character 
//   - get it's position + keyVar 
//     if the result > 26 - position 
//       wrap it:
//        - 
//    - else return the result 
//- ---------------------- TESTING ALGORYTHM WITH TEST CASES --------
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' l= y k= 42 p=25,  25+ 3=28 > 26: wrap()
//    po + key - 26
//    25+3+ 28-26= 2
//    from beggining = 2 
//      wrap()
//    position = position > alphaLen ? wrap(position - alphalen) : position
//    return position
//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// -------------------------------- CODE:  -----------------------------  

function caesarEncrypt(text, numberKey) {
  const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphaLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
  
  if (text.length ===0) return '';
  
  
  return text.split('').map(char => {
    if (alphaUpper.includes(char)) {
      return alphaUpper[calculateNewPosition(numberKey, char)-1];
    } else if (alphaLower.includes(char)){
      return alphaLower[calculateNewPosition(numberKey, char)-1];
    } else {
      return char;
    }
  }).join('');
};


function wrap (position, alphaLen) {
  return position > alphaLen ? wrap(position - alphaLen, alphaLen) : position; 
};


function calculateNewPosition(numberKey, currLett) {
  const alphaLen = 26;
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let position = alpha.indexOf(currLett.toUpperCase()) +1;
  let newPosition = position + numberKey;  
  return  newPosition > alphaLen ? wrap(newPosition, alphaLen) : newPosition
};


// Happy Path
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

//Wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

//all letters 
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");

// punctuations stays the same 
console.log(caesarEncrypt('abcd, 123', 2)); //'cdef, 123'
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) ===
 "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

//punctuations: 
console.log(caesarEncrypt('AaBb', 2)); //'CcDd'

//empty string as input:
console.log(caesarEncrypt('', 2));  // ''

//wrapping up several times 
console.log(caesarEncrypt('abc', 100));  // 


