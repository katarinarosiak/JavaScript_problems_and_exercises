// /Combine Two Lists
// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// Example:

// Copy Code
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


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
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 



function interleave(arr1, arr2) {
  let combinedArray = [];

  arr1.forEach((el, index) => {
    combinedArray.push(arr1[index]);
    combinedArray.push(arr2[index]);
  });
  return combinedArray;
}


//In this solution we start with declaring a function `interleave` that has two parameters: `arr1` and `arr2`. We then declare a variable `combineArray` and assigning an empty array to it. We then call `forEach` method on the `arr1` variable. that will call a callback function once for eacg element of this array. The callback will simply push the current element of the `arr1` and `arr2` that we will access by using element reference operator with the current index. FInally we will return the evaluated value of `combinedArray`, which will be a new array combining `arr1` and `arr2`.  
