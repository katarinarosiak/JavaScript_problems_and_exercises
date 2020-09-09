/// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


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

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function isPalindromicNumber(number) {
  return (String(number) === String(number).split('').reverse().join(''))

}

// This solution is quite straightforward. We simply take the input number and coerce it to a String. We then compare it with number coerced to string that is then ttransfomerd to array, reversed and finally joined into a string. If this expression evalueates to true this is what eventually will be returned. Else if the expression evaluates to false, false will be the returned value.



