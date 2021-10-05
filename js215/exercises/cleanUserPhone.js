// Problem Description
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1. users input a message 
//2.
//3.
//Input:
//- string (may contain special char) 
//Output:
//- string (contained of only 10 digits) or 10 0s  
// 
// Clarification of domain terms: 
// -
// - 
//RULES:
// Explicit:
//- Valid number: 
//- 10 digits 
//- 11 digits (first 1) 
//-  Bad number:
// - more than 11 digits 
// - less than 10 digits
// - 11 digits with the first that is not 1 

//-Implicit
//- digits (0-9)
//- characters (any characters - ' ' , * ! etc.)
//- if NaN, '', undefined, [], {}, false, true, null => null
//- if more than 1 arg choose the first one 
// - if contains any other characters than digits, ignore them 
// - if no input => null
// if string is empty => null


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
// 1111111111  
// 11111111111 
//
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//
// Happy Path
// console.log(cleanNumber('1111111111')) // => '1111111111'
// console.log(cleanNumber('11111111111')) //=> '1111111111'
// console.log(cleanNumber('111111111111')) // 0000000000
// console.log(cleanNumber('1234567890')) // 1234567890
//
// console.log(cleanNumber('12-34-5678-90')) // 1234567890
// console.log(cleanNumber('   1234567890  ')) //1234567890
// console.log(cleanNumber('+461234567890')) // 0000000000
// console.log(cleanNumber('+1234567890'))
//
//
//Edge Cases: 
// console.log(cleanNumber('1234567890'))
// console.log(cleanNumber('')) // null
// console.log(cleanNumber([])) // null
// console.log(cleanNumber({})) // null
// console.log(cleanNumber(false)) // null
// console.log(cleanNumber(undefined)) // null
// console.log(cleanNumber(1234567890)) // null
// console.log(cleanNumber('  1 1234567890  ')) //1234567890
// console.log(cleanNumber()) // null
// console.log(cleanNumber('1234567890', '1234567890')) // '1234567890'
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
//- check if the ijnpiut is a valid data type if not return null
//- if there is no input return null
//- if more than one arg choose the first one 
//- remove all the non-digit characters 
//- if the length of the remaining string is 10 return the string 
//- if not check if it's 11 and if the first number is 1
//-   - if true remove leading 1 and return the number  
//- else return 0000000000
//
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
function cleanNumber(phoneNumber) {

  if (typeof phoneNumber !== 'string') return null;
  if (phoneNumber.length === 0) return null;
  
  phoneNumber = phoneNumber.replace(/\D/g, '');

  if (phoneNumber.length < 10 || phoneNumber.length > 11 ||       (phoneNumber.length === 11 && phoneNumber[0] !== '1')) {
    return '0000000000'
  } else if (phoneNumber.length === 11) {
    return phoneNumber.slice(1);
  }  
  return phoneNumber;
};





// Happy Path
console.log(cleanNumber('1111111111')   ==='1111111111');
console.log(cleanNumber('11111111111') === '1111111111');
console.log(cleanNumber('111111111111') === '0000000000');
console.log(cleanNumber('1234567890') === '1234567890');
//
console.log(cleanNumber('12-34-5678-90') === '1234567890');
console.log(cleanNumber('   1234567890  ') ==='1234567890');
console.log(cleanNumber('+461234567890') === '0000000000');
console.log(cleanNumber('+1234567890') === '1234567890');
console.log(cleanNumber('34567890') === '0000000000');
console.log(cleanNumber('-- 5  dd67 qw890 &&') === '0000000000');
//Edge Cases: 

console.log(cleanNumber('') ===  null);
console.log(cleanNumber([]) ===  null);
console.log(cleanNumber({}) ===  null);
console.log(cleanNumber(false) ===  null);
console.log(cleanNumber(undefined) ===  null);
console.log(cleanNumber(1234567890) ===  null);
console.log(cleanNumber('  1 1234567890  ') === '1234567890');
console.log(cleanNumber() ===  null);
console.log(cleanNumber('1234567890', '1234567890') ===  '1234567890');