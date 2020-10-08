// /Capitalize Words
// Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// Examples:

// Copy Code
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

function wordCap(str) {

  let str1 = str.split(' ').map((el, index) => el[0].toUpperCase() + el.slice(1)
  )
  return str1.join(' ');

}