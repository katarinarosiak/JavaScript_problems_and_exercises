// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
console.log(getLength([1, [2, 3]])); // ➞ 3

console.log(getLength([1, [2, [3, 4]]])); //➞ 4

console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // // ➞ 6

console.log(getLength([1, [2], 1, [2], 1])); // ➞ 5
// Notes
// An empty array should return 0.


// i: nested array 
// o: number of no nested elemnts 

// R: - [] => 0
// - we cound all number of elemnts even if nested 
// - 
  
// D: array 

// A: 
// - create a loop 
// - on each iteration flatten the array 
// - save the length of the array to a variable
// - if the length is the same return the length



function getLength(nestedArr) {
  let Arrlength = nestedArr.length;
  let flattened = nestedArr
  while(true) {
    flattened = flattened.flat();
    if (Arrlength === flattened.length) {
      return Arrlength;
    }
     Arrlength = flattened.length;
  }
}
