// Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.


// reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]
// reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
// reorderDigits([63251, 78221], "asc") ➞ [12356, 12278]
// reorderDigits([63251, 78221], "desc") ➞ [65321, 87221]


// i: array, string (asc, desc) 
// o: array where each element is sorted either asc desc

// Rules: 
// - string number => treat as normal number 
// - any other that are not number ignore 

// - other data types => undefined
// - [] => []
// - [1] => [1]

// numbers: 
// - positve integer
// - 0123 => 23

// string: 
// "asc", 'desc'  default 'asc' 

// arguments: 
// - always get first argm 
// - can mutate the array 

// DS => array , number => string => numbers ,    string 

// ALgo: 
// - if array is empty return [] 
// - if there is no string as sec argument , create a default 'asc' 
// - map the  array of elemtns  
//   - if the elemen is a number or is a numerical string:
//      
//     - coerce it to string 
//     - split it into array of characters
//     - ceorce eahc el to number 
//     - sort either desc or asc order depending the second arg 
//     - join the array and coerce to a number 
//     - return the elemnt 
//   - return the new array 
  

function reorderDigits(arrOfDIgits, sortingOrder = 'asc') {
  if (arrOfDIgits.length === 0) return [];
  if (!Array.isArray(arrOfDIgits)) return undefined; 
  
  return arrOfDIgits.map((el) => reorder(el, sortingOrder));
}

function reorder(el, sortingOrder) {
 
  if (!Number.isNaN(el) && typeof el === 'number' || isNumericStr(el) ) {
    let arrOfNumbers = el.toString().split('').map(Number);
  
    if (sortingOrder === 'asc') {
      return +arrOfNumbers.sort((a,b) => a-b).join('')
    } else {
      return +arrOfNumbers.sort((a,b) => b-a).join('')
    }
    
    
    return arrOfNumbers;
  } else {
    return el;
  }
}

function isNumericStr(el) {
 let rgx = /\D/g
  if (typeof el === 'string') {
    return !(el.match(rgx));
  } else {
    return false; 
  }
}




//Test Cases
//Happy Path:

console.log(reorderDigits([515, 341, 98, 44, 211], "asc")) //➞ [155, 134, 89, 44, 112]
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"))//➞ [551, 431, 98, 44, 211]
console.log(reorderDigits([63251, 78221], "asc")) //➞ [12356, 12278]
console.log(reorderDigits([63251, 78221], "desc")) // [65321, 87221]

//string num as normal num 
console.log(reorderDigits(['515', 341, 98, 44, 211], "asc")) // [155, 134, 89, 44, 112]

//ignore not numbers 
console.log(reorderDigits(['hello', 341, 98, 44, 211], "asc")) // ['hello', 134, 89, 44, 112]

//NaN
console.log(reorderDigits([132, 21, NaN, 374, 542], "asc"))// [123, 12, NaN, 347, 245]

//different data types 
console.log(reorderDigits([132, [], true, {}, 542], "asc")) //[123, [], true, {}, 245]

//other data types
console.log(reorderDigits('hello', 'asc')) // undefined 
console.log(reorderDigits({}, 'asc')) // undefined 

//empty array 
console.log(reorderDigits([], 'asc')) // []

//one el
console.log(reorderDigits([1], 'asc')) // [1]

//zero is dropped 
console.log(reorderDigits([63251, 1230], "asc")) //➞ [65321, 123]

//default argument 
console.log(reorderDigits([515, 341, 98, 44, 211]))// ➞ [155, 134, 89, 44, 112]


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

