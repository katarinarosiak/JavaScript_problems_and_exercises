// /Palindromic Substrings
// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

// Examples:

//Copy Code
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - string
// Output:
// - array of substrings  
// Rules:
// - substring sorted by order of appearence 
// - palindrome reads the same backwards and forwars 
// - duplicates included multiple times 
// - case sensitive 
// - single char are not palindromes 
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
// - ietarte through string 
//  extract all the substrings that are longer than 1 letter 
//    - double iterate through string 
//    -  cut the substrin starting form first letter 
//    - increment the second index by one 
// - iterate through array of strinsg and determin if they are palidnormes if yes push to another array 
// - return the arr of palindormic subbsrings
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 



function palindromes(string) {
  let palindormicSubstrings = [];

  let substrings = findSubstrings(string);


  palindormicSubstrings = substrings.filter(isPalindrome);

  return palindormicSubstrings;
}


function findSubstrings(string) {
  let arr = [];

  for (let index = 0; index < string.length; index++) {
    for (let index2 = index + 2; index2 < string.length + 1; index2++) {
      arr.push(string.slice(index, index2));
    }
  }
  return arr;
}


function isPalindrome(subString) {

  return subString.split('').reverse().join('') === subString;

}


