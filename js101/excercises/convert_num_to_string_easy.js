// /Convert a Number to a String!
// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// Examples:

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"


/// create a dictionary 
// disect the number into digits 
// put all the digits in an array
// loop through array 
// take first number look in the dictionary and fins a corresponding string number 
// return string number 
// join all the numbers together 
// return the string


function integerToString(number) {

  let digitArr = numToDigits(number);
  let strArr = digitToStringArr(digitArr);
  return strArr.join('');
}


function numToDigits(number) {
  let digits = [];
  let num = number;

  if (!num) {
    return [num];
  }

  while (num > 0) {
    digits.unshift(num % 10)
    num = Math.floor(num / 10);
  }
  return digits;
}



function digitToStringArr(arr) {
  let dictionary = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0
  };


  let arrayWithStrings = [];


  for (let index = 0; index < arr.length; index++) {
    for (let key in dictionary) {
      if (dictionary[key] === arr[index]) {
        arrayWithStrings.push(getKeyByValue(dictionary, dictionary[key]));
      }
    }
  }
  return arrayWithStrings;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


//This solution firstly takes a number and then transform it to an array of digits by using % operator on the number and then dividing the number by 10 for as long as the number is less then 1. SO created array of digit we then explicitly coerce to strings by using an object as a dictionary. We find the value that is equal to the digit and then return the key that is a string. We then push this key to the array of strings. Finally we join all the string difits into one string and return this string. 