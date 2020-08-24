// Fibonacci Number Location By Length
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Examples:

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion

// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - number
// Output:
// - number 
// Rules:
// - Fibonnaci num always starts with 1 , 1
// - every next num is a sum of thwo previous 
// - function with one arg with num of digits
// - returns first index of first num with as many digits as in the arg
// -first F. number has index of 1 
//- arg always integer >= 2
// Questions: 
// -



// {\displaystyle 0,\;1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144,\;\ldots }{\displaystyle 0,\;1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144,\;\ldots }[

// EXAMPLES/TEST CASES:
// i: 3
// =>
// o: 12
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - take the input number of digits
// - create a fibonacci num until the digit num 
//    - starts from an [1,1] and add those num 
//    - save sum and push it to the end of the array
//    - take last two num and add and push the sum to the end of the array
//    - continue until the last number has the same amount of digits as // //       input
//         - determin how many digits has fibonacci num currently
//         -    
// - count index 
// - return index 
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function findFibonacciIndexByLength(digit) {
  let FibonacciNum = generateFibonacciUntil(digit);
  return FibonacciNum.length - 1;
}

//helper function
function generateFibonacciUntil(num) {
  let fibonacciNum = [0, 1];
  let index = 0;

  while (howManyDigits(fibonacciNum[fibonacciNum.length - 1]) < num) {
    fibonacciNum.push(fibonacciNum[index] + fibonacciNum[index + 1]);
    index++;
  }
  return fibonacciNum;
}

//helper function
function howManyDigits(number) {
  let string = String(number);
  return string.length;
}


