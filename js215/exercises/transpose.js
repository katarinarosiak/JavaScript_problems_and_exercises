const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);


function transpose(matrix) {
  return matrix.map((innerArr, i) => innerArr.map(((el, y) => matrix[y][i])));
}


console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]




function transpose(matrix) {
  return matrix.map((innerArr, i) => innerArr.map(((el, y) => matrix[y][i])));
}


// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


// [[1,4,7], [2,5,8], [3,6,9]]

// [[00, 10, 20], 
//  [01, 11, 21],
//  [02, 12, 22]]


// loop (0-2, y++)
  
//   loop (0 - 2 i++)
//     [i][y]

