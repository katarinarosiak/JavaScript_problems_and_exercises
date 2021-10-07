// Problem Description
// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611



// "1, 3, 7, 2, 4, 1" => [1, 3, 7, 12, 14, 21]
// "1-3, 1-2" => [1, 2, 3, 11, 12])
// "1:3, 1:2" =>  [1, 2, 3, 11, 12]
// "1..3, 1..2" =>  [1, 2, 3, 11, 12]
// "1:5:2" =>  1, 2, 3, 4, 5, 6, ... 12
// "104-2" => 104, 105, ... 112
//  "545, 64:11" => 545, 564, 565, .. 611
// "245, 55:22" => 245, 255 .. 322
// "1,5,9, 

// 1. "firsNum, secondNUm:lastNum"
//                  [range]
// 2. firstNUm-secondNum
//    [range]
// 3. firstNum-secondNum-thirdNum 
//     [range]
// 4. firstNum:secondNUm, thirdNum:fourthNum
//    [range]           , [range]
// 5.         -                   - 
// 6. f, s, t, f, f, 
//     <  <  >  <  
//   [range] [last digit range] - special range ? 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//- string (a shorthand range) => significant part of next number 
//Output:
//- array with complete numbers (containing all digits) 
// 
// Clarification of domain terms: 
// - "short-hand" range
// - significant part of the next number
// - complete numbers
//RULES:
// Explicit:
//- range always increase 
//- ranges are always inclusive 
//- The possible separators are: ["-", ":", ".."]
//- We can estimate the length of the output array:
// //    -  "1, 3, 7, 2, 4, 1" => teh same 
//       - "1-3, 1-2" => if 1 => 3
//       - 77 - 100      => last-first+1=> 
    // To detemine the range:
    // - check the last highest number in the array (if exist any)
    //   - if doesn't exist make a range: 
    //       - split the range into array of two numbers 
    //       - loop starting fron 1num end on sec num 
    //       - push nums to array 
    //       - return arr 
    //  -  if it exist find the next number that ends on the starting rage digit 
    // = and then find the next number that ends with the second digit 
    //  - create range 
    
     
     
    // Array.from({length: 20}, (x, i) => i);
//-Implicit
//- if the numbers in a given range are less than the previous one it means there are just a significant part of a number 
//- comma separates ranges 
// EDGE CASES:
//    INPUT:
// => input data type: (can input be different data type?)
// => boundary conditions:
// => too many, too little arguments or none 
// => repetition / duplication 
// => if ARRAYS:
//    - [], [1, 2, a: 'A'], [1,,3], [<3 empty values>], large arrays
// => if NUMBERS:
//     - 0, -0, Infinity, -Infinity, very large nums, NaN, +/-, .234, 
// => if STRINGS: 
//    - case sensitive.insensitive (special case UuU, AA)
//    - ' ', '  ', ' q', 'q ', tabs,  /n etc.
//    - '42', '@', 'dog\n'
// => SPECIAL VALUES AND EMPTINESS  
//    - undefined, NaN, null, function, /abc/
//    - {}, '', [], 0, [''],
// => BOOLEAN
//    -  true / false
//  
// => Failures / Bad input: 
//   - exceptions? 
//   - return special val (null/undefined/0)
// OUTPUT: 
// - same or new obj? 
// - 
//QUESTIONS: 
//- 
//
//----------------------- TEST YOUR UNDERSTANDING  -----------------
// 
//
//
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//
// Happy Path
// console.log()
// console.log()
// console.log()
//
// Edge Cases: 
//
// 
// Failures / Bad input: 
// 
//
//
//
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------  ALGORYTHM:  -----------------------------
// declare empty array 
//- split on commas
// iterate the  returned array on each element 
//- check if just one number
//   - if if the previous number is grater return the number 
//        else: 
//      return findNextBiggest()
//- if not just one number: 
//       return generateNumrange(): 
//      
//
//-
       
//        create a Num from range (str, arg)
//          - get delimter 
//         - split str on delimter (:, .., - )
//         - coerce to num
//         - [1, 2]
//        - if arg:
//            - arr[0] < arg ?  
//               - if true:
//                 - create range from arr[0] to arr[1]
//               - if not true:
//                 find the next biggest num that ends on arg: f() 
//                 finds the next boggest number after the fits biggest 
//                 - generate numbers between one and second and return 
//       - if !arg: 
//         - generate nums between arr[0] and arr[1] and return 


//         generate nums between (a,b)
          
        //[...Array(10).keys()].map(num => num+15)

    
       
       
//- ---------------------- TESTING ALGORYTHM WITH TEST CASES --------

//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// -------------------------------- CODE:  -----------------------------  

     

       // create a Num from range (str, arg)
//          - get delimter 
//         - split str on delimter (:, .., - )
//         - coerce to num
//         - [1, 2]
//        - if arg:
//            - arr[0] < arg ?  
//               - if true:
//                 - create range from arr[0] to arr[1]
//               - if not true:
//                 find the next biggest num that ends on arg: f() 
//                 finds the next boggest number after the fits biggest 
//                 - generate numbers between one and second and return 
//       - if !arg: 
//         - generate nums between arr[0] and arr[1] and return 


//         generate nums between (a,b)

//[1, 3, 7, 2, 4, 1]

function fromSharthandRange(ranges) {
  let rangesArr = ranges.split(',');
  let numbersFromRanges = [];
  
  if (numbersFromRanges.length === 0) {
    if (isRange(rangesArr[0])) {
       numbersFromRanges.push(generateNumsFromRange(rangesArr[0]));
    } else {
       numbersFromRanges.push(+rangesArr[0]);
    }
  }
  
  for (let idx = 1; idx < rangesArr.length; idx++) {
    let current = +rangesArr[idx] || rangesArr[idx];
    let previous = numbersFromRanges[idx-1];
    
    if (isRange(current)) {
      numbersFromRanges.push(current, previous);
    } else {
      if (previous >= current) {
        console.log(previous, current);
        numbersFromRanges.push(nextBiggest(previous, current));
      } else {
        numbersFromRanges.push(current);
      }
    }
  }
  
  return numbersFromRanges;
}


console.log(fromSharthandRange("1-3, 1-2"));



function isRange(numOrRange) {
  return isNaN(+numOrRange);
};




//takes a range and a number, creates an array of numbers starting from firstEl of the range and end of the last one (only if) they are greater than lastNum. Otehrwise it will find the next largest number after lastNum as start , next biggest number that's last digits are 'end'   

function generateNumsFromRange(range, lastNum) {
  const rgx = /[-\.+:]/g;
  const delimiter = range.match(rgx).join('').toString();
  let nums = range.split(delimiter).map(Number);
  let start = +nums[0];   [4,5]
  let end = +nums[1];

  if (start < lastNum) {
      start = nextBiggest(lastNum, start);
      end = nextBiggest(start, end)
    }
  return generateNumsBetween(start, end);
};



//generrates array of numbers between start and end incl
function generateNumsBetween(start, end) {
  let nums = [];
  for (let idx = start; idx <= end; idx++) {
    nums.push(idx)
  }
  return nums; 
}


//find the next biggest nymber after biggestNum that ends up with lastDig
function nextBiggest(biggestNum, lastDig) {
 let nextBiggNum = biggestNum;
 let DigLength = lastDig.toString().length;
  
 while(true) {
    nextBiggNum++   
   let nextBiggNumLen = nextBiggNum.toString().length;
   let lastDigit = +nextBiggNum.toString().slice(nextBiggNumLen-DigLength);

    if (lastDigit === lastDig) {
      return nextBiggNum;
    }
 } 
};

     
//console.log(fromSharthandRange("1, 3, 7, 2, 4, 1")) // => [1, 3, 7, 12, 14, 21]
// console.log(fromSharthandRange("1-3, 1-2") // => [1, 2, 3, 11, 12])
// console.log(fromSharthandRange("1:3, 1:2") // =>  [1, 2, 3, 11, 12]
// console.log(fromSharthandRange("1..3, 1..2") // =>  [1, 2, 3, 11, 12]
// console.log(fromSharthandRange("104-2") // => 104, 105, ... 112
// console.log(fromSharthandRange("545, 64:11") // => 545, 564, 565, .. 611
// console.log(fromSharthandRange("245, 55:22") // => 245, 255 .. 322
// console.log(fromSharthandRange("0") // => ['0']
// console.log(fromSharthandRange("245, 55, 11") // => 245, 355, 411
// console.log(fromSharthandRange("245, 55, 22, 1-2") // => 245, 355, 422, 431, 432            
 //console.log(fromSharthandRange("1-3, 1..2") // =>  [1, 2, 3, 11, 12]

// console.log(fromSharthandRange("1:5:2") // =>  1, 2, 3, 4, 5, 6, ... 12
// "1,2,3,4,1" => [ 1, 2, 3, 4, 11 ]
// "1,2,3,4,1,1" => [1,2,3,4,11,21]