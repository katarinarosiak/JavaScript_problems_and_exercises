///The End Is Near But Not Here
// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// i: Stringo: 
// o: string taht is the word to the left of the last word 
// rules: input always string
// - input always at least two words
// - function that takes one arg = a string
// - retruns the word on the left of the last word in the sentence 
// - word are not blank characters
// - word can be any character separated by space
// - word can have anything from 1 chracter up

// a:
// take the given string and coerce it to array of words 
// return the second last word 

function penultimate(string) {
  let splittedArr = string.split(" ");
  return splittedArr[splittedArr.length - 2];
}
