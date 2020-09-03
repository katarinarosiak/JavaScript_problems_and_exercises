// /Sum Of Digits
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// Examples:

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45



// CODE: 

function sum(int) {
  let allNum = String(int).split('');
  return allNum.reduce((total, currNum) => Number(total) + Number(currNum));
}

// This solution declares a function that takes one argument, which is an integer.We are then calling a String method on the integer and explicitly coerce it into a string.Afterwords we are calling a split method that splits the string creatting a new array with all the numbers as a separate elements.We then call the array all Num on reduce that call callback function which takes two arguments, a toal and currentNum.Each element of allNum is assigned to currNum parameter.We then perform addition of currNum and 'total', which the callback function uses as a accumulator to store the current sum while iterating through array.With each iteration we are firstly explicitly coercing each element to a number using Number method and then sum ot with the 'total' accululator.The return value of the callback, wchih is a sum of all elements of allNum is then returned and thus becomes the final return value of sum function. 