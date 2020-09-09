/// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - string
// Output:
// - boolean 
// Rules:
// - palindorme readds same backwards as forward 
// - the case matters 
// - all characters matters 
// - if odd middle letter is counted in 
// -
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i: {abccba}
// =>
// o:
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// check if odd / even 
// - even : take an input and slice it in half
// - odd slice it without middle character 
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



function isPalindrome(string) {
  let arr = string.split('');

  return (String(arr) === String(arr.reverse()));
}

//in this solution we simply take input string and explicitly coerce it to an array. We then return the evaluated value of an expression which use strick comparison operator to cmpare value of array coerced to string with value of arr, reversed with use of reverse() method and coerced to string. 