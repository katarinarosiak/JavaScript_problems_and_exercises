// Transpose MxN
// In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

// Examples:

// Copy Code
console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


// [[1, 2, 3, 4, 5], 
//  [4, 3, 2, 1, 0],
//  [3, 7, 8, 6, 2]]);
//[[1, 4, 3],
// [2, 3, 7],
// [3, 2, 8],
// [4, 1, 6],
// [5, 0, 2]]

let arr1 = [['00', '01', '02'],
['10', '11', '12', '13', '14'],
['20', '21', '22', '23']]

// [[00, 10, 20]
//  [01, 11, 21]
//  [02, 12, 22]
//  [03, 13, 23]
//  [04, 14, 24]
// ]

function transpose(arr1) {
  let transposedArr = [];
  let longestLength = Math.max(...arr1.map(innerArr => innerArr.length))

  for (let i = 0; i < longestLength; i++) {
    let arr = [];
    for (let y = 0; y < arr1.length; y++) {
      arr.push(arr1[y][i]);
    }
    transposedArr.push(arr);
  }
  return transposedArr;
};

console.log(transpose(arr1));