// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

// Examples:

console.log(rotateRightmostDigits(735291, 1));      // 735291    1
console.log(rotateRightmostDigits(735291, 2));      // 735219    9
console.log(rotateRightmostDigits(735291, 3));      // 735912   2
console.log(rotateRightmostDigits(735291, 4));      // 732915   5
console.log(rotateRightmostDigits(735291, 5));      // 752913   3
console.log(rotateRightmostDigits(735291, 6));      // 352917   7


// i: number, number 
// O; 
// rules:
// function takes two arg
// - rotating by moving the rotated num to end and the rest to left 
// - 

// Q: last count?always numbers?
// whatif only one digit? what if index > length? 

// ex: 
// i: (1234, 2) => 1243
// (abcd , 2) => inx = abcd.length - indx = c  slice(0, 3)

// ; 
// - coerce digit to a string 
// - find the value of given index counted bakwards
//     - count index backwards (str.lenght - index )
// - concat left side + right side + the digit
// - return 

// - 

//function rotateRightmostDigits(number, index) {
let coercedNumbers = number.toString();
return Number(coercedNumbers.slice(0, coercedNumbers.length - index) + coercedNumbers.slice(coercedNumbers.length - index + 1) + coercedNumbers[coercedNumbers.length - index]); 
}
