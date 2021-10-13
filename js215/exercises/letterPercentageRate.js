// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

// Copy Code
// letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// i: str 
// r : obj with properties )lowercase: , uppercase, neither:

// R; 
// - always 1 char 
// - perc 2 decimals point (40.00)
// - anything that is not a letter is neither 


// D: string => obj 

// A: 
// - get all lowercase char 
// - get all upper case char 
// - get number of remaining characters by length - (upper+lower)
// - calculate % num/len* 100
// - add decimal 

function letterPercentages(str) {
  let strLen = str.length;

  let lowercase = (str.match(/[a-z]/g) || []).length;  
  let uppercase = (str.match(/[A-Z]/g) || []).length;
  let neither = strLen - (lowercase + uppercase)
  
  return {
    lowercase : countPercentage(lowercase, strLen),
    uppercase : countPercentage(uppercase, strLen),
    neither : countPercentage(neither, strLen)
  }
};

function countPercentage(num, strLen) {
  return ((num / strLen) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123')); 

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }




