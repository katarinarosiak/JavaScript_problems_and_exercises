// Problem Description
// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//- number in a string format 
//Output:
//- boolean true if valid / false if not valid 
// 
// Clarification of domain terms: 
// -
// - 
//RULES:
// Explicit:
//- ignore all no-digit characters 
//- counting from right to left 
//- double the number of every second digit  starting from second, 
//- any digit that becomes 10 or more, substract 9 from the result 
// - sum 
// - if the total chesum end on 0 its valid
// - if the total chesum don't end up with 0 not valid 
// - only strings, with a number > 0 
//-Implicit
//-
//- The formula  n = 999999
//  9, (9 X 2) - 9, 9, (9 X 2) - 9, 9, (9 X 2) - 9
// 999999 = 54 
//
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
// 2323 2005 7766 3554 
// [4,3,4,3,4,0,0,5,5,7,3,6,6,5,1,4]
// [
//   [4,5, 5, 3, 6, 6, 7, 7, 5, 0, 0, 2, 3, 2, 3, 2]
// [
//    4,10, 5, 6, 6, 3, 7,  5, 5, 0, 0, 4, 3,  4, 3, 4]
// ------------------------- EXAMPLES/TEST CASES: -------------------
//
// Happy Path
// console.log(luhnFormula('1111')) === true)
// console.log(luhnFormula('8763') === false)
// console.log(luhnFormula('999999') === true)
// console.log(luhnFormula('99^9.9a9*9-- ! =') === true)
// console.log(luhnFormula("2323 2005 7766 3554") === true);
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
//DATA STRUCTURES: string => array => number =>  boolean 
// ------------------------  ALGORYTHM:  -----------------------------
//- Replace all the non numeric character with ''
//- split the string into array str 
//- coerce each str to a number 
//- reverse
//- map every number on even index and multiply by 2
//- summ all the digits 
//- check if the number ends with 0 (num % 10 === 0) 
//-  if yes return true 
//- else return false 
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
function luhnFormula(numberToCheck) {
  numberToCheck = numberToCheck.replace(/\D/g, '');
  numberToCheck = numberToCheck.split('').reverse().map(Number);

  return numberToCheck.map(calculate).reduce((acc, sum) => acc+sum) % 10 === 0;


};

function calculate(num, idx) {
  if (idx % 2) {
    let product = num*2;
    return product >= 10 ? product-9 : product; 
  } else {
    return num;
  }
};




// Happy Path
console.log(luhnFormula('1111')  === false)
console.log(luhnFormula('8763')  === true)
console.log(luhnFormula('2222')  === false)
console.log(luhnFormula('22^2.2a*-- ! =') === false)
console.log(luhnFormula('999999') === false)
console.log(luhnFormula("2323 2005 7766 3554"))=== true);