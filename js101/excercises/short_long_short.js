
// Short Long Short
// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// Examples:

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// input: two strings with different lengths
// output: omne string that is a concatenation of double shorter string and a longer string

// rules; write a function that takes two arguments
// -  the strings will have different lengths
// - assume that input will be a string
// - if epmty two empty strings return empty string
// - if one of the strng is empty then return only one string 
// - short string + long string + short string 

// MM. Taking two, different lenghths strings and comparing theyir lenghths to each other. Then take a longer one and concatinate it with shorter and then copy the sorter one an d concatinate it with the other strings strings. 

// Algorithm:
// - compare lenghth of two strings and determine the shorter one 
// - the one that is shorter conacat with the longer and then copied shorter one conact with the rest of the string
//if any of the strings are empty 

// retrun the result 


function shortLongShort(firstString, secondString) {
  let result = "";
  if (firstString.length < secondString.length) {
    result = firstString + secondString + firstString;
  } else if (firstString.length > secondString.length) {
    result = secondString + firstString + secondString;
  } else if (firstString === "" || secondString === "") {
    result = firstString + secondString;
  }
  return result;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"