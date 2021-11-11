/* 

You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

 */

// countAdjacentPairs('') //,0, 'An empty string should return 0.')
// countAdjacentPairs('orange Orange kiwi pineapple apple') //1, "Case should be ignored. 
// countAdjacentPairs('orange Orange kiwi pineapple apple') //1")
// countAdjacentPairs('banana banana banana') //1, "Once a word has been paired, it is ignored.
// countAdjacentPairs('banana banana banana') //1
// countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!') //, 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
// countAdjacentPairs('pineapple apple') //, 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")


// i: string 
// O: number (count of the times there is a section that repaets a word twice) 

// R:
// 0 empty string => 
// - always strings
// - words separetd by a single space 
// - there may be punctuations 
// - pie !== pie!
// - letters and pucntuations 
// - case insensitive Orange orange 
// - '11 11'  : 1 
// - if we have three the same words it counted as one section 
// - the words needs to be next to each other 


//DS: string => array of strings => number 


//Test Cases 

// //Happy Path: 
// console.log(countAdjacentPairs(' ') === 0); 
// console.log(countAdjacentPairs('abcd abcd bdhbc') === 1); 

// //Edge Cases:
// //EMpty string:
// console.log(countAdjacentPairs('') === 0);


// //punctuaction
// console.log(countAdjacentPairs('abcd abcd!') === 0); 
// console.log(countAdjacentPairs('abcd, abcd,') === 1);

// //case insensitive
// console.log(countAdjacentPairs('Abcd abcd') === 1);

// //three words in a row counts as one section
// console.log(countAdjacentPairs('abcd abcd abcd') === 1);

// //stringified numbers
// console.log(countAdjacentPairs('123 123') === 1);

// //other characters
// console.log(countAdjacentPairs('@#$ @#$') === 1); 

// //order 
// console.log(countAdjacentPairs('abcd dcba') === 0);

// //next to each other
// console.log(countAdjacentPairs('abc bb abc') === 0); 

// //the words needs to be separated by a space
// console.log(countAdjacentPairs('pineapple apple')) //, 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")


//A: 
// - if it's empty space return 0; 

// - split the string into array of words 
// - iterate through the array of words
//   - on each iteration: 
//     - make slice: 
//        startSlice 0  (i don't increment when two words are the same )
//        endSlice 2 ( increment on every iteration )
//    -  take to lowerCase compare first and last word from teh slice are the same 
//       and if so 
//           - increment the end slice 
//           - compare
//      - if not the same:
//          - increment start slice a( the length of the slice) nd end slice incremnt by 2
//          - take the salice and push to an array 
//      return the length of the array (that I pushed the slicec to ) 

// s 0  
// e 3

// counter 1
//          abcd abcd abcd dhc hcbhd abcd  


function countAdjacentPairs(str) {
  let arr = [];

  if (str.length === 0) return 0;

  let splittedArr = str.split(' ');

  let startSlice = 0;
  let endSlice = 2;
  for (let i = 0; i < splittedArr.length; i++) {
    let sliceOfStr = splittedArr.slice(startSlice, endSlice);
    if (isTheSame(sliceOfStr)) {
      endSlice += 1;
    } else {
      startSlice += sliceOfStr.length;
      endSlice += 2;
      arr.push(sliceOfStr);
    }
  }
  return arr;
}

function isTheSame(slice) {
  return slice[0].toLowerCase() === slice[slice.length - 1].toLowerCase();
}


console.log(countAdjacentPairs('abcd abcd'));



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