// An Example Problem: Comparing Version Numbers

// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

// Copy Code
// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0
// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
// Here is an example of version number ordering:

// Copy Code
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
// Copy Code
// function compareVersions(version1, version2) {
//   // ...
// }




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//- two string in a format of versions 
//Output:
//- number (1, -1, 0)
// 
// Clarification of domain terms: 
// -
// - 
//RULES:
// Explicit:
// Legal version numbers: 
//1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0
//- compare first num to second num 
//-If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
//
// - if the given number contains other character ( not digit or .)
// return null
//
//-Implicit
//- What is the numbered system? 
//- The legal version  num has max 4 digits and 3 points
//- minimum one digit with no points 
//
// EDGE CASES:
//    INPUT:
// => input data type: (can input be different data type?)
// =>        special: (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'])
// => emptiness: (0, -1, null, undefined, {}, '', [] ... )
// => boundary conditions:
// => too many, too little arguments 
// => repetition / duplication 
// => if strings: 
//    - case sensitive.insensitive
//    - spaces, trailing spaces, new lines, etc.
//    - 
// => Failures / Bad input: 
//   - exceptions? 
//   - return special val (null/undefined/0)
// OUTPUT: 
// - same or new obj? 
// - 
//QUESTIONS: 
//-  How do we compare versions? 
//
//----------------------- TEST YOUR UNDERSTANDING  -----------------
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
// 0.1 < 1 => 
// 1 = 1.0 
// 1.18.2 < 13.37
// 1.18.2.0   13.37.0.0
// [1,18,2] [13, 37]

 //   [1,18,2,0] [1,18]


// ------------------------- EXAMPLES/TEST CASES: -------------------
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
// Happy Path
// console.log(compareVersions('0.1', '1')) // -1
// console.log(compareVersions('1', '0.1')) // 1
// console.log(compareVersions('13.37', '1.18.2')) //1
//  console.log(compareVersions('1.18.2', '13.37')) // -1
//  console.log(compareVersions('1.2', '1.2.0.0')) // 0
//  console.log(compareVersions('1.2', '1.2')) // 0
// console.log(compareVersions('1.2.0.0', '1.18.2')) //-1
// console.log(compareVersions('22.1.2.0', '20.10')) // 1
// console.log(compareVersions('22', '20.30.30.0')) // 1
// console.log(compareVersions('1,18,2,0', '1,18')) // 1

//
// Edge Cases: 
// console.log(compareVersions('1.2 ', '1.2')) //null
// console.log(compareVersions('1.2', '1.2a')) //null
// console.log(compareVersions('-1.2', '1.2')) // null
// console.log(compareVersions('1.2!', '1.2,')) // null
// 
// Failures / Bad input: 
// 
//
//  [1 2 0 0], [1 2 0 0]
//
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: strings => numbers => array => number 
// ------------------------  ALGORYTHM:  -----------------------------
//-  check if any of the strings contains other char than . or num 
//       
//- if yes return null 
//- else 
//- split the string on decimal point 
//- coece each string number to a number 
//- fill in the arrays that are length < 4 with 0 at the end 
//     -  itearee 4 - length times 
//     - append 0 on each ietartion        
//- iterate through the one array one number at a time
//  - on eahc iteration comapre two arrays starting from index 0 
//  - if first num > second number return 1
//    if second num > first return -1
//    if they are equal continue iteration 
//  - return 0 
//- ---------------------- TESTING ALGORYTHM WITH TEST CASES --------
//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// -------------------------------- CODE:  -----------------------------  

function hasOtherChar(str) {
  return (/^[0-9]+(\.[0-9]+)*$/g).test(str);
};



function compareVersions(version1, version2) {
  if (!hasOtherChar(version1) || !hasOtherChar(version2)) return null;
  
  version1 = generateArrWIthZeros(version1);
  version2 = generateArrWIthZeros(version2);
  
  for (let idx = 0; idx < version1.length; idx++) {
    if (version1[idx] > version2[idx]) {
      return 1
    } else if (version1[idx] < version2[idx]) {
      return -1;
    }
  };  
  
  return 0;
}


function generateArrWIthZeros(arr) {
  arr = arr.split('.').map(Number);
  for (let i = 0; i <= 4 - arr.length; i++) {
    arr.push(0);
  }
  return arr;
}


console.log(compareVersions('0.1', '1')) // -1
console.log(compareVersions('1', '0.1')) // 1
console.log(compareVersions('13.37', '1.18.2')) //1
console.log(compareVersions('1.18.2', '13.37')) // -1
console.log(compareVersions('1.2', '1.2.0.0')) // 0
console.log(compareVersions('1.2', '1.2')) // 0
console.log(compareVersions('1.2.0.0', '1.18.2')) //-1
console.log(compareVersions('22.1.2.0', '20.10')) // 1
console.log(compareVersions('22', '20.30.30.0')) // 1
console.log(compareVersions('1.18.2.0', '1.18')) // 1

//
// Edge Cases: 
console.log(compareVersions('1.2 ', '1.2')) //null
console.log(compareVersions('1.2', '1.2a')) //null
console.log(compareVersions('-1.2', '1.2')) // null
console.log(compareVersions('1.2!', '1.2,')) // null
console.log(compareVersions('1.2.', '1.2')) //null
console.log(compareVersions('1..2', '1.2')) //null
console.log(compareVersions('.2', '1.2')) //null


