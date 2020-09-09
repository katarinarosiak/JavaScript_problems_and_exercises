// What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - num
// Output:
// - string
// Rules:
// - century in a year that begins with 01 
// - 2000 - 20th , 2001 21st 
// - according to the last letter add nd, th, st, or th abbreviation 
//   -return 
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
// - take a year and determin a century 
//-  if < 100 => 1st
// - 101 - 100 => 2nd 
//
//

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function century(year) {
  return chooseAbbrev(Math.ceil(year / 100));
}



function chooseAbbrev(century) {
  let dictionary = {
    1: 'st',
    2: 'nd',
    3: 'rd',
  }
  // century = String(century);

  if (century < 10 || century > 20) {
    century = String(century);
    return century + dictionary[century[century.length - 1]];
  } else {
    return century + 'th';
  }
}