//  ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""




// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input: string 
// - 
// Output: string with collapsed characters 
// - 
// Rules:
// -function that takes one arg - string 
// - if empty string return empty string
// -if one letter return one letter
// -collapse or duplicate characters into one character 
// -collapse only identical characters that are placed next to eachother
// - case sensitive?

// EXAMPLES/TEST CASES:
// i:
// =>("aabbccddeeeeeee")
// o:
// =>(abcde)

// i: (aabbaa) o: (aba)
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// - string 
// ALGORYTHM: 
// - loop through string
// -take a first character and save it in another string 
// -check if another character is same character 
// -if yes continue
// -if not save in the string 
// - continue until the end of the string 
// - return the new string

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function crunch(string) {
  let collapsedCharacters = '';
  
  for(let i = 0; i < string.length; i++) {
   if(string[i] !== collapsedCharacters[collapsedCharacters.length - 1]) {
    collapsedCharacters += string[i];
   };
  }  
  return collapsedCharacters;
}