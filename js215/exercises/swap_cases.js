
// Swap Case
// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// Examples:
function swapCase(str) {
  return str.replace(/[a-z]/gi, replacer);
};

function replacer(letter) {
  return String.fromCharCode(letter.charCodeAt() ^ 32)
};

// Copy Code
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"


