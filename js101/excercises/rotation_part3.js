
// /Rotation (Part 3)
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// Examples:

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// i: number (integer) to count max rotation for
// O: number that is a maxim rotation of the original num  
// rules: 
// input has to be integer
// - rotate first number by taking it end
// - after every rotation remove first digit from the rotation 
// function that takes one arg



// ex: 
// i: 1234
//  - 2341
//  - 1 413
//  - 14 31
//  O 1231

//  i: 735291
//   - 352917
//   - 3 29175
//   - 32 1759
//   - 321 597
//   - 3215 79
//   - 321579  



// 735291 rotate firs number to end => 3 52917
// keep first digit and rotate 3 29175

// a: 
// - take a number and save it as an string 
// - rotate the number by using previous alg:
//   - take concat secondPart + num
// - slice the number and push it to final array 
// rotate 
// - save the remaining in the string 
// - slice first num and push it to array
// - save the remaining part in a string  
// - continue untli empty string  0

// DS ; array, string 

// code:

function maxRotation(number) {
  let numberStr = String(number);
  let result = [];
  let rotatedNum = "";

  while (numberStr.length > 0) {
    numberStr = numberStr.slice(1) + numberStr.slice(0, 1);
    result.push(numberStr.slice(0, 1));
    numberStr = numberStr.slice(1);
  }
  if (result[0] === "0") {
    result.shift();
  }
  return result.join('');
}