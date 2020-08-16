// Transpose 3x3 Matrix
// A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

// To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6
// Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input: array of arrays
// - 
// Output: array of arrays (transposed)
// - 
// Rules:
// - function with one arg 
// - change that each rows will represent columns 
// - don't use external libraries
// -dont'modify original array, return new array
// -
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// => [1,2,3][4,5,6][7,8,9]
// o:
// => [1,4,7][2,5,8],[3,6,9]
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - iterate through the array elements 
// - push elements on first position to the new array 
// - iterate again 
// - push all second elements to the second innner array 
// -iterate again and push all the third elements to the third inner array
//-return new array

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function transpose(arrToTranspose) {
  let transposedArr = [[], [], []];

  arrToTranspose.forEach(outerArrEl => outerArrEl.forEach((innerArrEl, index) => transposedArr[index].push(innerArrEl)));

  return transposedArr;
}


//Description

//This function aims to take as an argument a two-dimensional array 
//"matrix", and return a new array with transposed version of this array.
//This means that each number that represented columns would in new array represent rows instead. In order to do that the function uses the input array that we assign 
// to arrToTranspose parameter and call forEach method on it.The forEach method
// assign each element of the outer array to parameter outerArrEl
// and calls forEach on it.The second forEach iteration method
// assigning each element of the inner array to innerArrEl parameter and invokes
// a callback that uses current index of each iteration to access
// empty transposedArr elements and push innerArrEl into it, thus filling
// each of empty arrays with values representing numbers of the input array.
// In this example the final return value is  "[ [ 1, 4, 3 ], [ 5, 7, 9 ], [ 8, 2, 6 ] ]", which is indeed a transposed array "[ [ 1, 5, 8 ], [ 4, 7, 2 ], [ 3, 9, 6 ] ]".  