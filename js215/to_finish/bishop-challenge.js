// Bishop Challenge 

// Your chess teacher wants to know if a bishop can reach a certain spot on the board in the given amount of moves.

// Given a starting square start, ending square end and the maximum number of moves allowed n. Return true if the ending square can be reached from the starting square within the given amount of moves. Keep in mind the chessboard goes from a1 to h8 (8x8).

// Examples
// bishop("a1", "b4", 2) ➞ true

// bishop("a1", "b5", 5) ➞ false

// bishop("f1", "f1", 0) ➞ true
// bishop("a1", "b2", 0) ➞ false
// bishop("a1", "e5", 1) -> true
// bishop("a1", "c1", 1) -> false
// bishop('a2', 'a1', 4) -> false
//  bishop('b2', 'f4',2) -> true
// bishop('b2', 'f4',3) -> true
// bishop('b2', 'f4',1) -> false
// bishop("f1", "f1", 2) => true 
// bishop('b3', 'f5',1) -> false
// bishop('b3', 'c4',1) -> true

// Notes
// Chessboard is always empty (only the bishop is there).
// Bishop can move in any direction diagonally.
// If the starting and ending square are the same, return true (even if the move is 0).
// Square names will always be lowercase and valid.

// i: start square (str), endsquare (str), max moves (num)
// o: boolean true if it can reach the spot false otherwise, 
  
//   rules:
// bishop: diagonal 
// bishops start point: 
// chessboard size: a1-h8

// implicit rules: 
// - if start point is on white square and the end point is on black square return false
// - if the moves are greater or equal 2 and is on the same color return true 
// - if the start and end are the same return true 
// - if the move is 1: 
// -     if the end move is on diagonal return true else false

// diagonal? a1 b2 c3 d4 ..    
// h1 f2 e3 d4 c5 ...
  
// - different letter 
// - different number 

// d5 = > c3
// - all diagonal between d5
// - if 5 > 3 
// diagonal down
// else diagonal up: d5 c4 b3

//   a b c d e f g h
// 1 S
// 2   X 
// 3 X   .X
// 4   E   X
// 5       . X
// 6           X
// 7             X
// 8 
// [a1 c1 e1 h1, 

 



// Data types: 
// - str, numbers 
// - arrays balcks and white squares 

// Algo: 
// - generate arrays stroing black and white squares 
//     on every iteration letter 
//    generate number from start to fisninh
//    concat to letter and push to arr
//    switch start 1 || 2 
//    return array 
// - if the moves are equal return true 
// - if the start and end are on differnet colors return false 
// - if the the moves are >= 2 return true 
// - if the moves are 0 and the start end end is not teh same return false 

// - generate all diagonal moves between start num and until end num (inclusievley)
//   
// - if the last generated square is not === end square return false 


// Produce a cheesboard black squares:
//  a1 c1 e1 g1
//  b2 d2 f2 h2
//  a3 ... 
//  - 

function bishop(startSqr, endSqr, moves) {
  let blackSquares = generateSquares('b');
  let whiteSquares = generateSquares('w');
  
  if (startSqr === endSqr) return true;
  if (blackSquares.includes(startSqr) && whiteSquares.includes(endSqr) ||
     blackSquares.includes(endSqr) && whiteSquares.includes(startSqr)) {
      return false; 
    }
  if (moves >= 2) return true;
  if (moves === 0) return false;
  
  if (generateDiagonal(startSqr).includes(endSqr)) return true;
  return false;
}

function generateSquares(color) {
  let startNum = (color === 'b') ? 1 : 2; 
   return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].flatMap(lett => {
    let squares = [];
      for (let i = startNum; i <= 8; i+= 2 ) {
        squares.push(lett+i);
      }
      startNum = (startNum === 1) ? 2 : 1; 
      return squares;
   })
}

function generateDiagonal(startSqr) {
  
}


// Examples
console.log(bishop("a1", "b4", 2) === true);

console.log(bishop("a1", "b5", 5) === false);
console.log(bishop("f1", "f1", 0) === true);
console.log(bishop("a1", "b2", 0) === false);
// bishop("a1", "e5", 1) -> true
// bishop("a1", "c1", 1) -> false
console.log(bishop('a2', 'a1', 4) ===  false);
 console.log(bishop('b2', 'f4',2)  === true);
console.log(bishop('b2', 'f4',3)  === true);
// bishop('b2', 'f4',1) -> false
console.log(bishop("f1", "f1", 2) ===  true );
// bishop('b3', 'f5',1) -> false
// bishop('b3', 'c4',1) -> true
