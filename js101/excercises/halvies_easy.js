// Halvsies
// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// Examples:

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]



// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - array
// Output:
// - two array 
// Rules:
// - each arrays includes half of the input array
// - if odd put more el in first arr 
// - if input arr is empty return two empty arr 
// - if only one element add it to first arr and second will be empty 
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
// - determin whether arr length is odd or even 
// if odd take a length of the arr and devide by two then round down
// then slice the array in two parts 
//-- if even slice array in half 
// - create two arrays and assign the val of the first part one and val of the second part to the second array 
// - return two arrays 
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function halvsies(arr) {
  let firstArr;
  let secondArr;

  if (!(arr.length % 2)) {
    firstArr = arr.slice(0, (arr.length / 2));
    secondArr = arr.slice((arr.length / 2));

  } else if (arr.length % 2) {
    firstArr = arr.slice(0, Math.floor(arr.length / 2) + 1);
    secondArr = arr.slice(Math.floor(arr.length / 2) + 1);
  }

  return [firstArr, secondArr];
}
//In order to devide an array in half amd create two separate arrays from the input array, we have created a dunction caleed halvisies. This function takes one argument, which is an array that we want to devide. We then determin whether length of this array is odd or even. If it's even we take the array and using slice we devide it into half. We determin where the half is by taking the length of the input array and devide it by two. We then assign the sliced part of the array to firstArr variable. Then we slice the input array again and take the other part and assign it to secondArr variable. However if the input array length is odd we would slice the input array using similar method, however we would also use  Math.floor method in order to round the devided number in the slice method. We would also need to add one the the slice argument. Finally we would place the firstArr and secondArr inside an array and return.