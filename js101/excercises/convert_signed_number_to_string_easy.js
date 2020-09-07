/// Convert a Signed Number to a String!
// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer, and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Examples

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - 
// Output:
// - 
// Rules:
// -
// -
// -
// -
// -
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - 
// -
// -
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function integerToString(number) {
  const NUM_ARR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let digitsArr = [];
  let finalArr = [];
  //change num to arr of digits
  while (number > 0) {
    digitsArr.push(number % 10);
    number = Math.floor(number / 10);
  }

  //change num to string
  for (let index = 0; index < digitsArr.length; index++) {
    finalArr.unshift(NUM_ARR[digitsArr[index]])
  }
  return finalArr.join('');
}

console.log(integerToString(0));


function signedIntegerToString(number) {

  let zeroArr = ['0'];

  if (number > 0) {
    return `+${integerToString(number)}`;
  } else if (number < 0) {
    return `-${integerToString(number * -1)}`;
  } else {
    return zeroArr[number];
  }

}


//In sthis solution we firstly determin whether the input number is greater, smaller or equal 0. If the number is greater then 0 we we call integerToString function on the number and then simply concat '+' sign by using template literal and return. If the number is negative we  would firstly change it to positive numbeer by multiplying it  by -1 and them call integerToString function on it and concat with '-' sign and return. However if the number would be exactly zero We would use elemenet reference operator to access the first element of zeroArr and return it. 
