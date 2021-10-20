// Combine Arrays
// Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

// These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".


// i: three arrays
// o: one array (all input array combined into nested array) 

// R: 
// - arrays are combined based on indexes 
// - arr on idx 0 should only contain el on idx 0 
// - suplement missing items with *
// - arrays can contain different data types 
// - the arrays can be empty
// - never more than 3
  
//   [[0, 1, 2], [0, 1, 2], [0, 1, 2]] 
  
      // 00, 11 22  00  11 22  00 11 22

//  [[0, 0, 0], [1 ,1 ,1], [2, ,2 ,2]]
// iy  iy  iy    iy iy iy    iy iy iy
// [[00, 01, 02], [10,11,12], [20,21,22]]

// [[1, 2, 3], [], []]

// [1, *, *], [2, 2, *], [3, *, *]
// if input arrays are all empty return [[], [], []]
// - declara an array with right structure [[], [], []]
// - when all arrays are not the same length:
// - fill them up with *:
//    - [1,2].concat(['*', '*', '*']).slice(0,3);
// - place given arrays into another array:
// - itearet through give array 
//   - on each iteration  
//     - take an element from each array on [i][y]
//     - push those lements to an array on index i


function combineArrays(...arrays) {
  let finalArr = [[], [], []];
  if (arrays.every(arr => !arr.length)) return finalArr; 
  let withStars =  arrays.map(innerArr => (innerArr.concat(['*', '*', '*']).slice(0,3)));
  
  withStars.forEach((innerArr, i) => innerArr.forEach((el, y) => {
      finalArr[y].push(el)

  }))
  return finalArr;
};  



//refactored:

function combineArrays(...arrays) {
  let finalArr = [[], [], []];
  if (arrays.every(arr => !arr.length)) return finalArr; 
  
  arrays.forEach((innerArr, i) => innerArr.forEach((el, y) => {
    finalArr[y].push(el === undefined ? '*' : el);

  }))
  return finalArr;
};  



// // //Happy Path 
// console.log(combineArrays([0, 1, 2], [0, 1, 2], [0, 1, 2])); // [[0, 0, 0], [1 ,1 ,1], [2, ,2 ,2]]  
// console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [[1, 4, 7], [2, 5,  8], [3, 6, 9]]
// console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"])); // [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

// // //differnet data types in arrats 
// console.log(combineArrays([false, "false", [[], []]], ["true", true, "bool"], ["null", "undefined", NaN])); // [[false, "true", "null"], ["false", true, "undefined"], [[[], []], "bool", NaN]]

// console.log(combineArrays([false, {1:1}, undefined], ["true", true, [1,2,3]], ["null", "undefined", null])); // [[false, "true", "null"], [{1:1}, true, "undefined"], [undefined, [1,2,3], null]]

// //missing elements
// console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"])); // [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// console.log(combineArrays([1], [2], [3]) );// [[1, 2, 3], ['*', '*', '*'], ['*', '*', '*']];


// // //empty array as input 
// console.log(combineArrays([], [], [])); // [[], [], []];