// Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// for (let i = 1; i <= 99; i+=2) {
//   console.log(i);
// }

// Even Numbers
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Array(99).fill(1).forEach((el, idx) => {

//   if (idx%2 === 0 && idx) console.log(idx);
// })

// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// Examples:

// function shortLongShort(str1, str2) {
//   return str1.length < str2.length ? str1+str2 : str2+str1;
// }



// // Copy Code
// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// Leap Years Part 1
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year or false if it is not a leap year.

// Examples:




// Copy Code
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true