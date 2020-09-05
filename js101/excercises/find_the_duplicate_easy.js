// Find the Duplicate
// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

// Examples:

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18, 9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70,
  85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56,
  7, 34, 57, 74, 45, 11, 88, 67, 5, 58]));    // 73




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


function findDup(arr) {
  let numArr = [];
  let answer;
  numArr.push(arr[0]);

  arr.forEach(num => {
    if (!numArr.includes(num)) {
      numArr.push(num);

    } else {
      answer = num;
    }
  });
  return answer;
}


// In order to find which number in the array is a duplicate, we have created a findDup function that takes one argument which is an array. We have initialized numArr and answer variables. AFterwards we have pushed the first element of the inpit array into numArray. We then called forEach method on arr array, that invoke a callback function once for each element of the array. The callback function check if the array element is not included in NumArr and if it's not then the callback will push the current element to numArr. Otheerwise it will assign num to answer variable. Thus the answer variable will be the only number that is a duplicate and therefore it will be the final value that findDup function will return.  