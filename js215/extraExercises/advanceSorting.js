// Advanced Array Sort

// Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.
// Examples

// Notes

// The subarrays should be returned in the order of each element's first appearance in the given array.

// Understand The Problem
// Input: array 
//        - array of numbers and/or strings

// Output: array of subarrays
//        - in the subarrays there are items from the input array
// Rules: - same elements from the input array -> should be in the same subarray
//        - The subarrays should be returned in the order 
//        of each element's first appearance in the given array.


// [[5, 5, 5],['b'], ['a'], [3] ]

// [5, "b", "a", 3, "B", 5, 5, 'B']

// - create emty arr - final arr
// - iterate trough the array 
// - for each iteration check if the finalArr is empty 
//   - if yes: push the current value as an subarr
//   - if not:
//     - check if the current value exist in any o the subArr
//     - if yes: 
//       - push the value to that subArr
//     - if not: 
//       - push the value as a subArray;

function advancedSort(arr) {
  let finalArr = [];
  if (arr.length === 0) return [];

  arr.forEach(el => {
    if (finalArr.length === 0) {
      finalArr.push([el]);
    } else {
      let elIdx = existInSubArr(finalArr, el);
      if (elIdx === undefined) {
        finalArr.push([el])
      } else {
        finalArr[elIdx].push(el);
      }
    }
  })
  return finalArr;
}


function existInSubArr(arr, el) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx].includes(el)) {
      return idx;
    };
  }
}


console.log(advancedSort(["a", "b", "a", NaN, undefined, null, false, false, NaN]));

console.log(advancedSort([])); // []

console.log(advancedSort(["a", "b", "a"])); // [["a", "a"], ["b"]]
console.log(advancedSort([3, 1, 1])); // [[3], [1, 1]]
console.log(advancedSort(["a", 1, "a"])); // [["a", "a"], [1]]
console.log(advancedSort([5, "b", "a", 3, "B"])); // [[5], ["b"], ["a"], [3], ["B"]]
console.log(advancedSort([5, "b", "a", 3, "B", 5, 5, 'B'])); // [[5. 5], ["b"], ["a"], [3], ["B"]]
