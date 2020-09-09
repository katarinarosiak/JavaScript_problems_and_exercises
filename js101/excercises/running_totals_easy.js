/// Running Totals
// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

// Examples:

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - 
// Output:
// - 
// Rules:
// -  
// -  
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
// -
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 
// [2, 5, 13]
function runningTotal(array) {

  let total = [];
  if (!array.length) {
    return total;
  }
  total.push(array[0]);
  array.shift();

  array.forEach(el => total.push(el + total[total.length - 1]));
  return total;
}



//this solution creates a function that is called runningTotal which takes one argument which is an array. We initialize an empty array and assign it to tal variable. Then we check if an array is an ampty array and if so we return total array. In this case the return value of the function will be an empty array. In all the other cases we would simplu push the first element from the input array to total array and removed it from the array by using shft() method. We then call forEach method on array and for each element in this array we call a callback function that takes an element, add it to the last element of the total array and then simply push the evaluated value of this expression to total array. Finally we return total which at this point is an array with running sum of the numbers in array.   