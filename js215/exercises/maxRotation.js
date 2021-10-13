// Rotation Part 3
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// i: number  
// o : number with max rotation  

// DS => number => str => numbers 

// A: 
// - coerce num to string 
// - find the length of the number
// - ietaret starting from i = length and on 0 end decremet every round 
// - pass the str coerced to number to the function rotateIt and i as second arg 
// - save the num in a variable 
// - after the iteration is done return the variable 


function maxRotation(num) {
  let numLen = num.toString().length;
  let maxRotated = num;
  
  for (let idx = numLen; idx >= 0; idx--) {
    maxRotated = rotateRightmostDigits(maxRotated, idx);
  }

  return maxRotated; 
}

//Happy Path
console.log(maxRotation(1234) === 2431);
console.log(maxRotation(735291) === 321579);

// //negative
console.log(maxRotation(-1234) === -2431);

//zeros
console.log(maxRotation(0) === 0);
console.log(maxRotation(-0) === -0);

console.log(maxRotation(4) === 4);

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15) //-- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);