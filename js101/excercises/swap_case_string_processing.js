// /Swap Case
// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// Examples:

// Copy Code
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


function swapCase(str) {

  return str.split('').map(el => {
    if (el.toUpperCase() === el) {
      return el.toLowerCase();
    } else {
      return el.toUpperCase();
    }
  }).join('');

}