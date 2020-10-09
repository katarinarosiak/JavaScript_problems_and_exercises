// /Unlucky Days
// Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

// Copy Code
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - int - year 
// Output:
// - number of fridays 13th 
// Rules:
// - year > 1752
// - same in the future 
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
// -  save a today date im a var 
// -  take a given year 
// -  iterate through all 13th of this and if it's Frdiay add to counter 
//     - print date 
//     - check if it's Friday 
// - return counter 
// -

// Checklist:
// - () ;
// - names
// -logic
// - return  !!!!!!!!!!

// PSEUDOCODE:
// CODE: 




function fridayThe13ths(year) {
  let counter = 0;

  for (let index = 0; index < 12; index++) {

    let currentDate = new Date(year, index, 13);

    if (currentDate.toString().slice(0, 3) === 'Fri') {
      counter++;
    }
  }
  return counter;
}

