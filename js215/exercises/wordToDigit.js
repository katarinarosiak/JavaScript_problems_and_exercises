// Word to Digit
// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Example:

// Copy Code
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// i: string (sentence) 
// o: string (each word number => digit) 


// R: 
// - positive integers
// - string can have both number word and all other characters 
// - it can have 4,5,6,
// - case insensitive 
// - spaces between word numbers? fivefive ??
// - '' => ''
// - 

//DS=> str => str 

//ALGO:
// if str is empty return emty string 
// - declare a replacer function 
// - take a word and return a corresponding number to that word 
// - replace each occurence of a word number with what replacer returns
// return the new string 


function wordToDigit(str) {
  let rgx = /\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi
  
  return str.replace(rgx, replacer);

};

function replacer(numWord) {
  let wordArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  return wordArr.indexOf(numWord.toLowerCase());
};


  
//Happy Path:
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('one two three hello') === '1 2 3 hello');

//another word containing not counted  
console.log(wordToDigit('weight Hello') === 'weight Hello');

//case insesitive 
console.log(wordToDigit('One Two tHrEe Hello') === '1 2 3 Hello');

//leading spaces 
console.log(wordToDigit(' one two hello   ') === ' 1 2 hello   ');

// empty string
console.log(wordToDigit("") === "");

//one space 
console.log(wordToDigit(' ') === ' ');

// no word numbers
console.log(wordToDigit('!@#$%^&*() BSJJjjsqq[]') === '!@#$%^&*() BSJJjjsqq[]');

//numers
console.log(wordToDigit('1234 one two') === '1234 1 2');

