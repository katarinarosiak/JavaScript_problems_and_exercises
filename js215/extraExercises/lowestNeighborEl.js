// Find the Lowest Neighbor of a 2D Array Element
// Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

//  arr,  x,  y
// arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
// x will hold the row coordinate, while y will hold the column coordinate.
// You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.


// i: three parameters, arr(2d, int, symetrical), x int(row coordinates), y int(col coord)
// o: int (lowest neigbour) 

// R: 
// - arr => 
//   - 2D , integers, always symetrical in size 
//   - if arr 2/2 return the lowest el 
//   - 
// - coordinates:
//   - x - row
//   - y - col
//   arr[x][y]
// - Elements: 
//   - check horizontal, vertical, diagonal neigbour el
//   neibour touching 
// - if no neigbour return el on x, y 

// arr[1][1] : neibours: arr[00 01 02 , 10 (11) 12, 20 21 23 

// - how do we chekc if the elements are neigbours? 
//   abs x - elx <=1     abs  y - ely  <= 1

// - check if neigbours:
//   filer neigbour el (if difference betwee el idx x , y and searhced el idx, is not more than 1 
// - choose the lowest 


function lowestElement(arr, x, y)  {
  let filteredArr = arr.flatMap((innerArr, neighbX) => {
    return innerArr.filter((neigbEl, neighbY) => { 
          return isNeighbur(neighbX, neighbY, x, y) && arr[x][y] > neigbEl  
          })
    });

  return filteredArr.length === 0 ? arr[x][y] : Math.min(...filteredArr)
}

function isNeighbur(neighbX, neighbY, elX, elY) {
  return (Math.abs(neighbX - elX) <= 1) && (Math.abs(neighbY - elY) <= 1)
};


// Examples
console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1)) // 1


// [
//   [1, 2, 3]
//   [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
//   [7, 8, 9]
// ]
console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0)); // ➞ -1


// console.log(lowestElement([
//   [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
//   [0, -1, -3]
//   [-5, -9, 54]
// ], 0,0)); 


console.log(lowestElement([[50, 60, 10], [52, 69, 420], [9000, 3, 16]], 0, 0), 50)