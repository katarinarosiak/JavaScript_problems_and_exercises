// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// Examples:

// Copy Code
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640

// n= 3

// Math.pow(1 + 2 + 3) - (pow(1) + pow(2) + pow(3))

// i: integer 

// r: 0 => 0 
// if other datat types but number retunr undefined 

// DS: number => array =>  number 

//A: 
// - check if any other data type => undefined 
// - check if 0 or negative or float => return 0 

// - create a sequence of positive integers starting 1 of n length
//    - create loop start from 1 until n inclusively  increment by 1 
//    - push index to an array 
//      - return the array 
// - reduce get a sum of all those numbers 
// - reduce get a square of all those numbers 
// - substratc 1 from the other 
// - return the result 

// function sumSquareDifference(n) {
//    if (typeof n !== 'number' || Number.isNaN(n)) return undefined; 
//    if (n <= 0 || !Number.isInteger(n)) return 0; 

//   let sequence = createSequence(n);
  
//   let sum = sequence.reduce((acc, sum) => acc+sum);
//   let squares = sequence.reduce((acc, num) => acc + Math.pow(num, 2));

//   return Math.pow(sum, 2) - squares;
// }

// function createSequence(n) {
//  let arr = [];
  
//   for (let i = 1; i <= n; i++ ) {
//     arr.push(i);
//   }
//   return arr; 
// }

function sumSquareDifference(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return undefined; 
  if (n <= 0 || !Number.isInteger(n)) return 0; 
  
  let squareSum = 0;
  let sumSquares = 0;
  for (let i = 1; i <= n; i++) {
    squareSum += i;
    sumSquares += i**2
  }

return squareSum**2 - sumSquares

}

//Happy Path 
console.log(sumSquareDifference(3) ===  22 ); // --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)  === 2640); 

//Edge Case: 
// if 0
console.log(sumSquareDifference(0) === 0); 

//if other data type:
console.log(sumSquareDifference({1:1}) === undefined ); 
console.log(sumSquareDifference([1,2,3]) === undefined ); 
console.log(sumSquareDifference(NaN) === undefined ); 
console.log(sumSquareDifference(null) === undefined ); 
console.log(sumSquareDifference(undefined) === undefined ); 
console.log(sumSquareDifference('string') === undefined ); 

//if float or negative return 0
console.log(sumSquareDifference(-1) === 0 ); 
console.log(sumSquareDifference(1.1) === 0 ); 



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
//    - [], [1, 2, a: 'A'], [1,,3], [<3 empty values>], large arrays, [[], [[],[]]]
//    - order (desc, asc)?
//    - new array? 
// => -----  if Objects:
//    - new obj?
//    - {a:{a:{}}} 
//    - {}      
// =>          if NUMBERS:
//     - 0, -0, Infinity, -Infinity, very large nums, NaN, +/-, .234, 
//     - inclusive?
//     - dropping leading zero
//     - round/ceil/floor
// => -------  if STRINGS: 
//    - case sensitive.insensitive (special case UuU, AA)
//    - ' ', '  ', ' q', 'q ', tabs,  /n etc.
//    - '42', '@', 'dog\n', y as vowel 
//    - eight => weight regext part of the word? 
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








