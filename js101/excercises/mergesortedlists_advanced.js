// Merge Sorted Lists 
Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

  // You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

  // Your solution should not mutate the input arrays.

  // Examples:

  console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - two arrays
// Output:
// -  new araay
// Rules:
// - 
// - 
// - 
// - 
// -
// - 
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i: [1], [1,2]
// =>
// o: [1, 2]
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - take first el from arr1 and take 1st ell from arr 2
// - compare and push smaller to newArr
// - add index of the this arr
//continue until lenghth of new Arr is equal lenghth of arr1 plus arr2 
//if any of the arr are empty just return the other one 
// Checklist:
// - () ;
// - names
// -logic 
//return
// -

// PSEUDOCODE:
// CODE: 


function merge(arr1, arr2) {
  let newArr = [];
  let index1 = 0;
  let index2 = 0;

  if (!arr1[0]) {
    return arr2;
  } else if (!arr2[0]) {
    return arr1;
  }

  while (newArr.length < arr1.length + arr2.length) {
    if (!arr1[index1]) {
      newArr.push(arr2[index2]);

    } else if (!arr2[index2]) {
      newArr.push(arr1[index1]);

    } else if (!arr1[index1] && !arr2[index2]) {
      return newArr;
    }

    if (arr1[index1] <= arr2[index2]) {
      newArr.push(arr1[index1]);
      index1++;
    } else {
      newArr.push(arr2[index2]);
      index2++;
    }
  }
  if (!newArr[newArr.lenghth - 1]) {
    newArr.pop();
  }

  return newArr;
}


//