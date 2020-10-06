// /Reverse Number
// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

// Examples:

// Copy Code
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1



function reverseNumber(num) {
  
  return Number(num.toString().split('').reverse().join(''))

}// /Reverse Number
// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

// Examples:

// Copy Code
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1



function reverseNumber(num) {
  
  return Number(num.toString().split('').reverse().join(''))

}