// Rotation Part 1
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.



// i: array of elements (different data type)   
// o: ner array wihh rotated elements 

// R:
// E:
//  - rotation: moving first el to the end [1,2,3] => [2,3,1]
//  - if i not array => undefined 
//  - if [] => []
//  - always an array as input , no more than one arg 
//  - Elements: 
//   - diffenret data types ( [a: 'A'], [1,,3], null, undefined, {1:1}, '', NaN, 1, 0, [], {}, -1, 0.4, -Infinity, function(){}, '1', {a:{a:{a:'a'}}}, [[[1,2], [1]], [2,3]])
// -  return new array 
// - [1,1,2,2] => [1,2,2,1]
// - 

//   Test Cases:

// // Happy Path:
// console.log(rorate([1,2,3,4])); // [2,3,4,1];
// console.log(rotate(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd', 'a'];

// //Edge Cases 

// //a new array
// let testArr = [1,2,3];
// console.log(rotate(testArr) === testArr); // false 

// //other data types as innput 
// console.log(rotate({1:'a'}) // undefined
// console.log(rotate(1)) // undefined 
// console.log(rotate(NaN)) // undefined
// console.log(rotate(undefined)) // undefined 

// //empty array 
// console.log(rotate([])); // []

// //differnet elements 
// console.log(rotate(1, ,3, null, undefined, {1:1}, '', NaN, 1, 0, [], {}, -1, 0.4, -Infinity, function(){}, '1', {a:{a:{a:'a'}}}, [[[1,2], [1]], [2,3]]])// [ <1 empty item>, 3, null, undefined, {1:1}, '', NaN, 1, 0, [], {}, -1, 0.4, -Infinity, function(){}, '1', {a:{a:{a:'a'}}}, [[[1,2], [1]], [2,3]], 1]
// // empty items 
// console.log(rotate([,3,4])); // [3,4, <1 empty item>]

// //obj data type 
// console.log(rotate([[1,2], 2, 3 ])); // [2,3, [1,2]];

// // null, undefined, NaN
// console.log(rotate([null,3,4])); // [3,4, null]
// console.log(rotate([NaN,3,4])); // [3,4, NaN]
// console.log(rotate([undefined ,3,4])); // [3,4, undefined]

// // emptiness
// console.log(rotate([{},3,4])); // [3,4, {}]
// console.log(rotate(['',3,4])); // [3,4, '']
// console.log(rotate([[],3,4])); // [3,4, []]

// // numbers 
// console.log(rotate(['1',3,4])); // [3,4, '1']
// console.log(rotate([-1,3,4])); // [3,4, -1]
// console.log(rotate([-Infinity,3,4])); // [3,4, -Infinity];

// //boolean 
// console.log(rotate([false,3,4])); //[3,4, false]

// // function 
// console.log(rotate([function foo(){},3,4])); // [3,4, function foo() {}]

// //the items that we shift are the same items
// let a = {1:1}
// let arr1 = [a,3,4]
// let arr2 = arr2.slice();
// let el = arr2[0]
// console.log(rotate(arr2)); // [3,4,a]
// console.log(rotate(arr2[2]) === el) // true 



// DS:
// [] => []

// A: 
// - make a copy of the input array 
// -  check if the element is an empty element
//   - element is empty:
//     - map thrpugh the array  (return 1 for each el) 
//     - compare the length of input array and return array 
// -  if yes:
//    - shft the first element
//   - change the length of the array 
// - shift the first element and save it to the variable 
// - push the elemnt to teh end of the array 
// - return the element 

// ------------------  UNDERSTAND THE PROBLEM:  -------------------
// 1. Input:
// 2. Output:
// 3. Clarification of domain terms: 
// 4. RULES:
//   - Explicit:
//   - Implicit
// 5. EDGE CASES:
// => input data type: (can input be different data type?)
// => boundary conditions:
// => too many, too little arguments or none 
// => repetition / duplication 
// => ------  if ARRAYS:
//    - [], [1, 2, a: 'A'], [1,,3], [<3 empty values>], large arrays
//    - order (desc, asc)?
//    - new array? 
// => -----  if Objects:
//    - new obj? 
//    - {}      
// =>          if NUMBERS:
//     - 0, -0, Infinity, -Infinity, very large nums, NaN, +/-, .234, 
//     - inclusive?
// => -------  if STRINGS: 
//    - case sensitive.insensitive (special case UuU, AA)
//    - ' ', '  ', ' q', 'q ', tabs,  /n etc.
//    - '42', '@', 'dog\n', y as vowel 
// => SPECIAL VALUES AND EMPTINESS  
//    - undefined, NaN, null, function, /abc/
//    - {}, '', [], 0, [''],
// => BOOLEAN
//    -  true / false
// => Failures / Bad input: 
//   - exceptions? 
//   - return special val (null/undefined/0)
// ------------------------- EXAMPLES/TEST CASES: -------------------
//  - Happy Path
//  - Edge Cases
// ----------------------- TEST YOUR UNDERSTANDING  -----------------
// --------------- DIFFERENT SOLUTIONS ------------------------------
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ------------------------  ALGORYTHM:  -----------------------------
// ---------------------- TESTING ALGORYTHM WITH TEST CASES ----------
// ---------------------  PSEUDOCODE:  -------------------------------
// ----------------------- CODE:  ------------------------------------  

//  if the input is not array return undefined 
//  if input is [] => []
// - make a copy of the input array 
// -  check if the element is an empty element
//   - element is empty:
//     - map thrpugh the array  (return 1 for each el) 
//     - compare the length of input array and return array
//     0 if the same return true else fals 
// -  if yes:
//    - shft the first element
//    - change the length of the array
// - else: 
//   - shift the first element and save it to the variable 
//   - push the elemnt to teh end of the array 
//   
// - return the element 


function rotate(arrToRotate) {

  if (!Array.isArray(arrToRotate)) return undefined; 
  if (arrToRotate.length === 0) return [];
  
  let arrCopy = arrToRotate.slice();
  
  if (isEmptyEl(arrCopy[0])) {    
      arrCopy.shift();
      arrCopy.length = arrCopy.length + 1;
  } else {
    let firstEl = arrCopy.shift();
    arrCopy.push(firstEl);
  }
  return arrCopy; 
}


function isEmptyEl(el) {
  let counter = 0;
  let arr = [el];
  arr.forEach(a => counter++);
  
  return arr.length !== counter;
}


function rotate(array) {
  if (!Array.isArray(array)) {
    return;
  }
  if (array.length === 0) {
    return [];
  }
  return array.slice(1).concat(array[0]);
}



// Happy Path:
console.log(rotate([1,2,3,4])); // [2,3,4,1];
console.log(rotate(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd', 'a'];

//Edge Cases 

//a new array
let testArr = [1,2,3];
console.log(rotate(testArr) === testArr); // false 

//other data types as innput 
console.log(rotate({1:'a'})) // undefined
console.log(rotate(1)) // undefined 
console.log(rotate(NaN)) // undefined
console.log(rotate(undefined)) // undefined 

//empty array 
console.log(rotate([])); // []

//differnet elements 
console.log(rotate([1, ,3, null, undefined, {1:1}, '', NaN, 1, 0, [], {}, -1, 0.4, -Infinity, function(){}, '1', {a:{a:{a:'a'}}}, [[[1,2], [1]], [2,3]]]))

[ <1 empty item>, 3, null, undefined, {1:1}, '', NaN, 1, 0, [], {}, -1, 0.4, -Infinity, function(){}, '1', {a:{a:{a:'a'}}}, [[[1,2], [1]], [2,3]], 1]


// empty items 
console.log(rotate([,3,4])); // [3,4, <1 empty item>]

//obj data type 
console.log(rotate([[1,2], 2, 3 ])); // [2,3, [1,2]];

// null, undefined, NaN
console.log(rotate([null,3,4])); // [3,4, null]
console.log(rotate([NaN,3,4])); // [3,4, NaN]
console.log(rotate([undefined ,3,4])); // [3,4, undefined]

// emptiness
console.log(rotate([{},3,4])); // [3,4, {}]
console.log(rotate(['',3,4])); // [3,4, '']
console.log(rotate([[],3,4])); // [3,4, []]

// numbers 
console.log(rotate(['1',3,4])); // [3,4, '1']
console.log(rotate([-1,3,4])); // [3,4, -1]
console.log(rotate([-Infinity,3,4])); // [3,4, -Infinity];

//boolean 
console.log(rotate([false,3,4])); //[3,4, false]

function 
console.log(rotate([function foo(){},3,4])); // [3,4, function foo() {}]