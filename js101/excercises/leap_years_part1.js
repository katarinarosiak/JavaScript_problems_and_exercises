// // Leap Years (Part 1)
// // In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// // Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.



// input: integere greater than 0
// output: boolean 
// rules: 
// - input will be an integer
// - input will always be greater than 0
// - create a function that takes one argument
// - the leap year is:
//   - devisable by 4
//   - it cannot be devoiseblae by 100 unless at the same time is devisble by 400
// - every year that is evenly devisable by 4 is a leap year unless is also deviseble by 100
// - if the year is devisebla by 100 is not a leap year unles is deviseblae by 400 


// q: what if the input is empty?
// - what if the input is not integer?

// D: integers 

// Algorithm:
// 1. take the input and determine wheret it is devisable by 4 
// 2. if it's not then return false
// 2. if yes, then I would check if it is devisable by 100 and by 400 
// 4. if yes, then retunr true
// 5. if not return false

//PSEUDO CODE 
// function {
// IF year divisible by 4
// RETURN false
// ELSE IF year divisible by 100 and year divisible by 400 
// RETURN true
// ELSE IF year divisible by 100 and not divisible by 400
// RETURN false
// ELSE IF year not divisible by 100 and not divisible by 400
// RETURN true;

// code:



function isLeapYear(year) {
  if (year % 4) {
    return false;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 === 0 && !(year % 400 === 0)) {
    return false;
  } else if (!(year % 100 === 0) && !(year % 400 === 0)) {
    return true;
  }
}




console.log(isLeapYear(5));      // false
console.log(isLeapYear(400));       // true
console.log(isLeapYear(100));       // false
console.log(isLeapYear(20));       // true
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true 
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true