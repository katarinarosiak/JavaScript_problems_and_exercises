// /What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:



// Copy Code
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

// 1st     10th   20th  101st
// 2nd     11th   21st  102nd
// 3rd     12th   22nd
// 4th     13th   23rd
// 5th     14th   24th
// 6th     ..     ..
// 7th
// 8th
// 9th


function century(year) {
  let cent = Math.ceil(year / 100);


  return findEnd(cent);
}


function findEnd(num) {
  let abr = 'th';

  if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
    abr = 'th'
  } else {
    if (num % 10 === 1) abr = 'st';
    if (num % 10 === 2) abr = 'nd';
    if (num % 10 === 3) abr = 'rd';
  }
  return num + abr;
}


// function findAbr(num) {
//     let abr = '';  
//   if (num >= 4 && num <= 19) abr = th;


//   return abr; 
// }