/*
Create a function that takes a string and returns the first character that 
repeats. If there is no repeat of a character, return "-1".

Examples:
---------
firstRepeat("legolas") ➞ "l"
firstRepeat("Gandalf") ➞ "a"
firstRepeat("Balrog") ➞ "-1"
firstRepeat("Isildur") ➞ "-1"
*/

// i: string 
// o: string (letter that is a duplicate or -1 as strinf if there are no duplicates) 

// R: 
// - may not be string => return undefined 
// - empty string => return '-1' 
// - Case matters 
// - can contain other characters 
// - treat the sam e
// - always get an input 

//DS: string =>  []   =>   string 

//ALGO: 
// - check if arg is a string i not return undefined
// - if emoty string return '-1'
// - string split it into array of charcates 
// - find first chacrater that pass the condition:
//       - the current index is not the same as  indexOf that chaarcater in teh          array
//       - return the letter or if undefined return '-1' 


function firstRepeat(str) {
  if (typeof str !== 'string') return undefined;
  if (str.length === 0) return '-1'; 
  
  let splittedArr = str.split('')
      return splittedArr.find((char, idx) => idx !== splittedArr.indexOf(char)) || '-1';

}


//Happy Path 
console.log(firstRepeat("legolas") ===  "l");
console.log(firstRepeat("Gandalf") ===  "a");
console.log(firstRepeat("Balrog")  === "-1");
console.log(firstRepeat("Isildur")  === "-1");

//EDge cases
//if not string return undefined 
console.log(firstRepeat([])  === undefined);
console.log(firstRepeat(false)  === undefined);
console.log(firstRepeat({})  === undefined);
console.log(firstRepeat(1)  === undefined);
console.log(firstRepeat(NaN)  === undefined);
console.log(firstRepeat(undefined)  === undefined);
console.log(firstRepeat(null)  === undefined);

// empty string
console.log(firstRepeat('')  === '-1');

//case matters
console.log(firstRepeat("Ii")  === "-1");

//treat other characters as alpbaetical char 
console.log(firstRepeat("@@")  === "@");
console.log(firstRepeat("  ")  === " ");
console.log(firstRepeat("...")  === ".");



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








