// Combining Arrays
// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// Example:

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - two arrays
// Output:
// - an array 
// Rules:
// - output is an union of two arrays
// - no duplicates 
// - ascending order ?
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
// - create a new arr from first arr 
// -  push all el from the sec arr if not there yet
// - sort the array in ascending order 
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function union(arr1, arr2) {
  let newArr = arr1.slice('');

  for (let index = 0; index < arr2.length; index++) {
    if (!newArr.includes(arr2[index])) {
      newArr.push(arr2[index]);
    }
  }


  return newArr.sort((a, b) => a - b);
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]



// in Order to create an union of two arrays we declare a function and name it union, that will take two arguments. We create a shallow copy o the forst array and assign it to newArr variable.  After that we iterate through the second arr arr2. Using element reference operator we decide the current element of the array and check whether newArr already includes that element. If not then we push this element to newArr. FInally we sort arrat in asending order and return sorted newArr. 