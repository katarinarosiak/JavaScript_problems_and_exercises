// Keeping Count
// Given a number, create a function which returns a new number based on the following rules:

// For each digit, replace it by the number of times it appears in the number.
// The final instance of the number will be an integer, not a string.
// The following is a working example:

// digitCount(136116) ➞ 312332
// // The number 1 appears thrice, so replace all 1s with 3s.
// // The number 3 appears only once, so replace all 3s with 1s.
// // The number 6 appears twice, so replace all 6s with 2s.
// Examples
// digitCount(221333) ➞ 221333

// digitCount(136116) ➞ 312332

// digitCount(2) ➞ 1
// Notes
// Each test will have a positive whole number in its parameter.


// i: number 
// o: a new number (not string) 

// R: 
// - each digit - replace with a number of times it appears in the number 

// DS: number => string => array of strings => string => number

// A: 
// - coerce to string
// - split to array of digits 
// - map each number and return number of times it appears in the array 
//    - countTime(currentChar, arrOfString)
//    - {'a' : 1} reduce 
// - join to a string 
// - coerce to number and return

function digitCount(number) {
  let digits = [...number.toString()];

  let occurs = digits.map(digit => countOccurences(digit, digits))

  return +occurs.map(String).join('');
}

function countOccurences(digit, digitsArr) {
  let obj = digitsArr.reduce((obj, num) => {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
    return obj;
  }, {})
  return obj[digit];
}


// Examples
console.log(digitCount(221333)) // ➞ 221333

console.log(digitCount(136116)) // ➞ 312332

console.log(digitCount(2)) // ➞ 1