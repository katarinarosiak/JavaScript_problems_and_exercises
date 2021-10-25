// Rotating Matrices
// As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

// Copy Code
// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:

// Copy Code
// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

// Copy Code
// 3  4  1
// 9  7  5
// 6  2  8
// A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

// Copy Code
// 3  4  1
// 9  7  5
// its 90-degree rotation is:

// Copy Code
// 9  3
// 7  4
// 5  1
// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

// Examples:

// Copy Code
// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// const matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// const newMatrix1 = rotate90(matrix1);
// const newMatrix2 = rotate90(matrix2);
// const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// [
// [00, 01, 02],
// [10, 11, 12]
//   ]

// [
// [10, 00],
// [11, 01],
// [12, 02]
// ]

// - the length of first inner array => the length of outer array
// 00 => 01
// 01 => 11
// 02 => 21
// 10 => 00
// 11 => 10
// 12 => 20

// - create the structure first 
//   array(array[0].length).fill([])

// - ietearet through the outer array (i) 
//   - counter start from length of the array and --
//   - for each iterateion iterate though inner array: (y)
//     - get  
//      Arr[index][counter] = [i][y]

function rotate90(arr) {
  let generatedArr = Array.from({ length: arr[0].length }).map(al => []);
  let counter = arr.length - 1;

  arr.forEach((el, i) => {
    el.forEach((innerEl, y) => {
      generatedArr[y][counter] = innerEl;
    })
    counter--;
  })
  return generatedArr;
}








//Copy Code
const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];


const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]