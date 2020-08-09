

// Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

// i: string, but have to handle edge cases
// O; string, which is the middle word
// rules: function that takes one arg
// - the function retrieves middle word 
// - if there is no middle word it will return "there is no middle word"
// - 

// test edge cases: 

console.log(penultimate());   //please provide a string with at least two words 
console.log(penultimate('')); //please provide a string with at least two words
console.log(penultimate(' ')); //please provide a string with at least two words
console.log(penultimate('hello')); //please provide a string with at least two words
console.log(penultimate('hello hello')); //there is no middle word. 
console.log(penultimate(1234)); //please provide a string with at least two words
console.log(penultimate(true)); //please provide a string with at least two words
console.log(penultimate(NaN));  //please provide a string with at least two words
console.log(penultimate(undefined));  //please provide a string with at least two words
console.log(penultimate(null)); //please provide a string with at least two words
console.log(penultimate(0)); //please provide a string with at least two words
console.log(penultimate("abd abc dd"));
console.log(penultimate("take a given string with more than"));
/// a: 
// take a given string with more than one word anc=d check if it is a string. 
// if no return "please provide a string.."
// if yes
// - split the sentence into array of words
// - count the length of the array 
// - if the length is even return " the string doesnt have middle word"
// if the length is odd: 
// divid it by 2 and round it down 
// return array word with index of division 

function penultimate(sentence) {
  let splittedArr = [];
  let index = 0;
  if (sentence !== String(sentence)) {
    return "please provide a string with at least two words"
  } else {
    splittedArr = sentence.split(' ');
    if (splittedArr.includes('') || splittedArr.length < 2) {
      return "please provide a string with at least two words"
    } else {
      if (splittedArr.length % 2 === 0) {
        return "The string doesn't have a middle word";
      } else {
        index = Math.floor(splittedArr.length / 2);
        return splittedArr[index];
      }
    }
  }
}
