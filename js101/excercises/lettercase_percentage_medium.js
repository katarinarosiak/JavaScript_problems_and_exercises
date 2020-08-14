// Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// i: string with at least one char 
// O: object 
// rules: 
// - in string will have at leats one char 
// - always a string not another values
// - object containing a thre properties 
// - function taking one arg.
// - if a space then neighter 
// - % are float 

// data: 
// - string
// - object
// - number 

// a:
// - counting how many letters are uuper, lowercase and neither 
//  - create a string with lowercase letter 
//  - I would compare it to the imput to check if the lower case string contains the letter of an imput 
//  - if yes increment a counter 
//  - count the same upper case
//  - neither string length - upper case - lower case => neither 
// - count the % 
// - save the result in the object
// - return the object 

function letterPercentages(string) {
  let characters = {

  };

  let lowercaseNum = 0;
  let uppercaseNum = 0;
  let neighterNum = 0;


  let upperCaseAlphabeth = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let lowerCaseAlphabeth = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



  for (let i = 0; i < string.length; i++) {
    if (upperCaseAlphabeth.includes(string[i])) {
      uppercaseNum++
    } else if (lowerCaseAlphabeth.includes(string[i])) {
      lowercaseNum++;
    } else {
      neighterNum++;
    }
  }

  characters.lowercase = parseFloat((lowercaseNum / string.length) * 100);
  characters.uppercase = parseFloat((uppercaseNum / string.length) * 100);
  characters.neighter = parseFloat((neighterNum / string.length) * 100));



  return characters;

} 
