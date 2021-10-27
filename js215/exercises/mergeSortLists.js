// Merge Sorted Lists
// Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// Examples:

// Copy Code
// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]


//on element much greater than the other 
// [1,1, 2, 3, 3],
// [1,2,5]


// i: two sorted arrays
// o: new array (contains all elemnets from both sorted) (asc)


// R: 
// - non mutiating 
// - no sorting reulte array (no sort())


// [1,1, 2, 3, 3],
// [1,2,5]
// [1, 1, 1, 2, 2 , 3, 3] 


// [1, 1, 3], [2, 2]


// - if any of the arrays is empty return []
// - 

// - A
// - check if any of the arrays are empty if so return the other array 

// - declarare a variable in assignan empty array to it
//   - itereate as many times as arr1.length + arr2. length  
// - iterate through the longest array 
//   - take elemnts on te current index:
//   - check if any is undefined 
//     - if so push the other to empty array 
//     - else:
//       - check which one is less or equal then push that to the emoty array 
//       - tincrement the idx for the array from which the elements was pushed. 
// - return the empty array 

function merge(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length;

  if (!len1) return arr2;
  if (!len2) return arr1;

  let sortedArr = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  for (let idx = 0; idx < len1 + len2; idx++) {
    if (arr1[arr1Idx] === undefined) {
      sortedArr.push(arr2[arr2Idx]);
      arr2Idx++;
    } else if (arr2[arr2Idx] === undefined) {
      sortedArr.push(arr1[arr1Idx]);
      arr1Idx++;
    }

    if (arr1[arr1Idx] <= arr2[arr2Idx]) {
      sortedArr.push(arr1[arr1Idx]);
      arr1Idx++;
    } else if (arr1[arr1Idx] >= arr2[arr2Idx]) {
      sortedArr.push(arr2[arr2Idx]);
      arr2Idx++;
    }
  }
  return sortedArr;
};

console.log(merge([1, 5, 9], [1]));

// Copy Code
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]


//on element much greater than the other 
// [1,1, 2, 3, 3],
// [1,2,5]