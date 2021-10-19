// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// - if the given num is a double num 
// - return it 
// - otherwise: 
// - return the provided num multiplied by two 

// - if even
// - split in half check if both sides are the same
// - if yes return 
// - else multiply by 2 and return 


function twice(num) {
  return isRightSideDig(num) ? num : num*2; 
};

function isRightSideDig(num) {
  let numStr = num.toString()
  return numStr.slice(0, numStr.length/2) === numStr.slice(numStr.length/2);
}


// Examples:

// Copy Code
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676