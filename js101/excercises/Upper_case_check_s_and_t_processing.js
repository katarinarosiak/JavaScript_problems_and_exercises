// Uppercase Check
// Write a function that takes a string argument, and returns 
//true if all of the alphabetic characters inside the string 
//are uppercase; false otherwise. Ignore characters that are 
//not alphabetic.

// Examples:

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - string
// Output:
// - sboolean tru if all character are upper case and false if not. 
// Rules:
// - ignore other charaters than letters 
// - empty string returns true 
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
// - take the string and iterate thrugh each character of it
// - filter alphabaetical characters to a new array 
//  - chceck if   and A >   Z <   
// - return true if all of the charaters pass this requirements 
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function isUppercase(string) {
  let newArr = string.split('');

  newArr = newArr.filter(el => "A" <= el.toUpperCase() && "Z");
  return newArr.every(el => el === el.toUpperCase())
};



//In order to examin if all the alphabateical charaters in the given
// string are  uppercased, I have created a function that firstly transfoerm 
// each letter from the given string to an array element by using split method
// AFterwards we have called a filter function on newArr and returned a new array 
// with each element that passed the requirements of being a alpahbetical charater
// and saved it in newArr variable. Then we have called newArr on every function
// that has used callback function in order to determin whenther every
// element of newArr is uppercased. If so every will return true, otherwise falsse. 