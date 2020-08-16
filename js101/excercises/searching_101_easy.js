// Searching 101
// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

//   Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25, 15, 20, 17, 23.

// -----

//   Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25, 15, 20, 17, 23.

let readline = require('readline-sync');



console.log("Enter the 1st number");
let firstNum = readline.question();

console.log("Enter the 2nd number");
let secNum = readline.question();

console.log("Enter the 3rd number");
let thirdNum = readline.question();

console.log("Enter the 4th number");
let fourthNum = readline.question();

console.log("Enter the 5th number");
let fifthNum = readline.question();

console.log("Enter the 6th number");
let sixthNum = readline.question();

let allNum = [];
allNum[0] = firstNum;
allNum[1] = secNum;
allNum[2] = thirdNum;
allNum[3] = fourthNum;
allNum[4] = fifthNum;

if (allNum.includes(sixthNum)) {
  console.log(`The number ${sixthNum} appears in ${allNum}`);
} else {
  console.log(`The number ${sixthNum} doesn't appear in ${allNum}`);
}

