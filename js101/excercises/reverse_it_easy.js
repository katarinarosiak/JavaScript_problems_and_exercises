// /Reverse It (Part 2)
// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

// Examples:

// Copy Code
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"



function reverseWords(str) {

  let splittedArr = str.split(' ');

  let final = splittedArr.map(el => el.length >= 5 ? el.split('').reverse().join('') : el);

  return final;
}