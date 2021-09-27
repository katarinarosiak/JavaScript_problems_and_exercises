// Sum of Digits
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// Examples:

// Copy Code
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45


function sum(int) {
  return int.toString().split('').reduce((acc, sum) => Number(acc) + Number(sum));
}
