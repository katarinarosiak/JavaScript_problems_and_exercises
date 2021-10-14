// Unlucky Days
// Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

// Copy Code
// fridayThe13ths(1986);      // 1


// i: yaar 
// o: number represneting number of friday 13th in that year 

// R: 
// - the year  > 1752
// - it may be any year after that even future 
// - at least 4 digits 

// DS: number => Date object => array with months, new array  => string 
// A: 
// - itearet through tarting from 0 to 11
//  - day = 13, year = year 
// - for eahc month produce a Date object of 13th 
//  - ceorce it to a string and check if it includes 'Fri'
//  - if yes push to and array 
// - count length of that array 
// - and return the length 

function fridayThe13ths(year) {
  let date = new Date(year, 0, 13);
  let counter = 0;
  for (let month = 0; month <= 11; month++) {
    date.setMonth(month);
    if (date.getDay() === 5) counter++;
  }
  return counter; 
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);
