// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca/train/javascript

// You are given a table, in which every key is a stringified number, and each
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }

// Create a function that returns a table with the same keys, but each
// character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }


// {
//   "1": ["C",]
//     2 : ["G"]
//   "3": ["A", "B", "D" ],
// }

// {
//   "1": ["C"],
//   "2": ["A", "B", "D", "C"],
// }


// i: obj. to properties , key: stringified number, 
//   values; array of strings, 

// o: object with two 




// r: 
// - many keys 
// - at least one key in an object 
// - value always array, 
// - array can be empty
// - always letter 
// - always uppercase 
// - always upercase letter no empty strings 

// i: 
// - always object 
// - always one argumenr
// - new object 
// keys: 
// - integerst greater than 0 

// o: 
// - order: of appearence 
// - the higehst value key should keep all the duplicates 

// - all the values that are duplicates are stored in the higest key array 
//  and removed from all the lowest keys array 

// - if there are any duplicates in the latest array remove them 


// //Hhapy Path: 
// let obj1 = {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// };
// console.log(removeDuplicateIds(obj1)); 
// {
//   "1": ["C"],
//   "2": ["A", "B", "D", ],
// };

// // remove duplicates from every array 
// let obj2 = {
//   "1": ["A", "B", "C", "C"],
//   "2": ["A", "B", "D", "A"],
// };
// console.log(removeDuplicateIds(onj2)); 
// {
//   "1": ["C"],
//   "2": ["A", "B", "D", ],
// };

// //order of appearance
// let obj2 = {
//   "1": ["G", "F", "C"],
//   "2": ["A", "B", "D","F"],
// };
// console.log(removeDuplicateIds(onj2)); 
// // {
// //   "1": ["G","C"],
// //   "2": ["A", "B", "D","F"],
// // };


// //more than two keys 
// let obj2 = {
//   "1": ["G", "F", "C"],
//   "2": ["A", "B", "D","F"],
//   "3": ["F"]
// };
// console.log(removeDuplicateIds(onj2)); 
// {
//   "1": ["G", "C"],
//   "2": ["A", "B", "D"],
//   "3": ["F"]
// };

// //order of appearance
// let obj2 = {
//   "2": ["G", "F", "C"],
//   "1": ["A", "B", "D","F"],
// };
// console.log(removeDuplicateIds(onj2)); 
// // {
// //   "2": ["G","C"],
// //   "1": ["A", "B", "D","F"],
// // };



// DS: 
// Objec => arrays => strings    object => nested array 
// new object 

// A:  
// - object coerce to an array    [['1' ['A', 'B'], 
//                                 ['2', ['B' ]]]]
 // - declare an empty arr (already seen)
 // - remove duplicates from each inner array (reverse_
 // - iterate through arr and 
 //    - iterate through at each inner array
 //    - and check if teh curr letter exist in already seen 
 //    - if not push it there
 //    - else remove it:
 //        - replace with false; 
 //    - filter Out all false; 
//   - reverse
 // - return the array coerced to an object :
//      - ietreate throgh the arr and create an object , each arr[innerArr[0] is a key , while innerArr[1] value 
//  return 


function removeDuplicateIds(obj) {
  let ids = Object.entries(obj);
  let alreadySeen = [];
  
  let noDuplics =  ids.reverse().map(innerArr => innerArr.map(el  => {
    if (typeof el !== 'object') {
      return el;
    } else {
      return el.filter(char => {
               if (!alreadySeen.includes(char)) {
                  alreadySeen.push(char);
                  return true;
                  } 
            })
    }
  })).reverse();
  
  
  return noDuplics.reduce((acc, el) => {
    acc[el[0]] = el[1];
    return acc;
  },{})
  
}



// // //Hhapy Path: 
// let obj1 = {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// };
// console.log(removeDuplicateIds(obj1)); 
// // {
// //   "1": ["C"],
// //   "2": ["A", "B", "D", ],
// // };

// // remove duplicates from every array 
// let obj2 = {
//   "1": ["A", "B", "C", "C"],
//   "2": ["A", "B", "D", "A"],
// };
// console.log(removeDuplicateIds(obj2)); 
// // {
// //   "1": ["C"],
// //   "2": ["A", "B", "D", ],
// // };

// //order of appearance
// let obj3 = {
//   "1": ["G", "F", "C"],
//   "2": ["A", "B", "D","F"],
// };
// console.log(removeDuplicateIds(obj3)); 
// // {
// //   "1": ["G","C"],
// //   "2": ["A", "B", "D","F"],
// // };


// //more than two keys 
// let obj6 = {
//   "1": ["G", "F", "C"],
//   "2": ["A", "B", "D","F"],
//   "3": ["F"]
// };
// console.log(removeDuplicateIds(obj6)); 
// // {
// //   "1": ["G", "C"],
// //   "2": ["A", "B", "D"],
// //   "3": ["F"]
// // };

//order of appearance
let obj4 = {
  "2": ["G", "F", "C"],
  "1": ["A", "B", "D","F"],
};
console.log(obj4)
console.log(removeDuplicateIds(obj4)); 
// {
//   "2": ["G","C"],
//   "1": ["A", "B", "D","F"],
// };


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