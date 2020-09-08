
// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

// Examples:

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - number
// Output:
// - number
// Rules:
// - a double num left side === right side num (when in half)
// - if three num is not a double num 
// -
// -
// -
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - detemin  whether a num is double num 
//   - coerce to string
//   - if odd return false
//   - if even split it in half and compare both sides
//   - if same return true 
//   - else false 
// - if yes return the num 
// - if not multiply by 2 qnd return 
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function twice(num) {
  if (isADoubleNum(num)) {
    return num;
  } else {
    return num * 2;
  }
}


function isADoubleNum(number) {
  let stringNum = String(number);

  if (!(stringNum.length % 2)) {
    return (stringNum.slice(0, stringNum.length / 2) === stringNum.slice(stringNum.length / 2)) {
    }
  } else {
    return false;
  }
}

//In this solution we have created twice function that takles one argument which is an integer. We them determin whether the number is double number by calling a helper function isADoubleNum on this number. isADoubleNum firstly takes the number and then explicitly coerceed it to a string by using STring() method. Afterwards it check whether the length of the string is even. Id not it will immiditeley returns false. However if it is the function will then slice the string in half and compare if the both halfs are same. If so ot will return true. Twice function will then somply return the number. Hovever if the number is not a double number twice() will multiply the number by two and return the result of this multiplication. 