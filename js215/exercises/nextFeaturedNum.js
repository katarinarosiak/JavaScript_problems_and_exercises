// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// i: number (integer, positive) 

// o: integer (next featured number greater than the input int) 


// Requirejments: 
// - Feature Number:
// - odd
// - multiple of 7 
// - all digits has to occure exaclty once 

// - issue an error if there is not featured number 
// - greatest featured number is 
// - 9876543201
// - if not found issue: "There is no possible number that fulfills those requirements."
// - it can be one digit number 

//MM: 
//DS: number => string => array => number
//1 => 3, 5, 7 
//A: 
// - if the number is equal or greater to 9876543201 return error message 
// - if the input number is odd than + 2 and assign it as an index 
// - if it's even add 1 and assign it as index 
// - iterate starting from the input number increment index by 1 
// - end on 9876543200
//   - on each iterateion: (increment by 2) 
//   - take a index and check if it's a featured number 
//   - if it is return the index 
//   - if it's not continue 

// - check if fetured number: 
// - check if it's evenly divisible by 7 
// - check if the digits are not the same 
// - if so return true 
// - else return false 

// return the error message 

//find the next 
function oddMultipleOf7 (num) {
  let nextMultiple = num+1;
  while (true) {
    if (!(nextMultiple % 7) && (nextMultiple % 2)) return nextMultiple; 
    nextMultiple++;
  }
}

function noDuplicateDigits(num) {
  let splittedArr = num.toString().split('');
  return  !(splittedArr.find((el, idx) => idx !== splittedArr.indexOf(el)));  
}


function featured(num) {
  let highestFeaturedNum = 9876543201; 
    
  for (let i = oddMultipleOf7(num); i <= highestFeaturedNum; i+=14) {
    if (noDuplicateDigits(i)) return i; 
  }
  return "There is no possible number that fulfills those requirements.";
}




//Happy Path 
// Copy Code
console.log(featured(12));           // 21
 console.log(featured(20));           // 21 
console.log(featured(21));           // 35
 console.log(featured(997));          // 1029
 console.log(featured(1029));         // 1043
 console.log(featured(999999));       // 1023547
 console.log(featured(999999987));    // 1023456987
 console.log(featured(9876543186));   // 9876543201
 console.log(featured(9876543200));   // 9876543201


//Edge Cases: 
// input greater or even to to the largest featured number: 
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements.

//0, the first positive featured number 
console.log(featured(0));           // 7











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








