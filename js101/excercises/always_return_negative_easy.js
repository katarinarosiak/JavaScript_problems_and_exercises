// /Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:

// Copy Code
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0



function negative(num) {

  if (num >= 0) {
    return num * -1;
  } else {
    return num;
  }
}


