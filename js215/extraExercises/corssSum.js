// Given a matrix, find the cross (row and column) with the largest sum of elements. Return the sum.

// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
 
// largest cross is the last column, [3,6,9], with the last row, [7,8,9]. 

// Sum of elements is 3 + 6 + 7 + 8 + 9 = 33

// therefore largestCrossSum(matrix) = 33

// NOTE: the shared element of the column and row should only be counted once.

// The matrix may not be square. All elements will be positive integers.


// i : nested array 
// o: number (sum of cross) 



// - shared el of the column and rows should be counted once 
// - All elements will be positive integers.
// - no diagonals 
// - may not be square 
// - all elemnet + int 

// - largest cross: sum of the integers from crossing rows and columns  

//                                         3         6          6
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  arr[][], arr[][], arr[][],    
//                                    arr[][], arr[][], arr[][] 
// - how do I get columns 
// arr[0][1], ar[0][2] arr[0][3]
// arr[1][1]  arr[1][2] arr[1][3]
// arr[2][1]...

// - how do I find out where do cross 
// - arr[2][2]

// i: [[1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]] 

// o: column: 
// [1,4,7] [2,5,8], [3,6,9]

// a: 
// - iterate throigh each outer array 
//   - grab elemnet on idx = 0 from eahc array
//   - grab idx = 1 from eahc array 
//   - grab idx = 2 from each array 

let arr = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]; 

// [1,2,3] => [0,4,7], [0,5,8], [0,6,9]
// [4,5,6] => [1,_,7], [2,_,8], [3,_,9]
// [7,8,9] => [1,4,_], [2,5,_], [3,6,_]
  
  
function getColumns(matrix, idxToRemove) {
  let transposedMatrix = [];
  
  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let counter = 0; counter < matrix[0].length; counter++) {
      if (idxToRemove === counter) {
        arr.push(0)
      } else {
        arr.push(matrix[counter][i]);
      }
    }
    transposedMatrix.push(arr);
  }
  return transposedMatrix; 
}

function sumIt (arr) {

  let transposedArr = [];
  
  for (let i = 0; i < 3; i++) {
    transposedArr.push(getColumns(arr, i));
  }
  
  return transposedArr;
}


function finalFunction(matrix) {
  let conactArr = [];
  let nestedArr = sumIt(matrix);
  
  nestedArr.forEach((outerArr, idx) => {
    outerArr.forEach(nestedArr => {
      conactArr.push(matrix[idx].concat(nestedArr).reduce((acc, sum) => acc + sum));
    })
  });
  

  return Math.max(...conactArr);
};



console.log(finalFunction(arr));


// [
//   [ [ 0, 4, 7 ], [ 0, 5, 8 ], [ 0, 6, 9 ] ],
//   [ [ 1, 0, 7 ], [ 2, 0, 8 ], [ 3, 0, 9 ] ],
//   [ [ 1, 4, 0 ], [ 2, 5, 0 ], [ 3, 6, 0 ] ]
// ]

// var matrix4 = [[1, 1, 1, 4, 1, 1, 1],
//                [3, 3, 3, 3, 3, 3, 3],
//                [1, 1, 1, 4, 1, 1, 1]]; //29

function transposeMatrix(matrix) {
  return matrix[0].map((_,ind2) => {
    let temp = [];
    matrix.map((_,ind) => temp.push(matrix[ind][ind2]));
    return temp;
  })
}