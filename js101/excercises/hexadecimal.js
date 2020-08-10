

/// Further Exploration
// Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

// Example:

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('AF3') === 2803);
console.log(hexadecimalToInteger('FF') === 255);


/// i: string
// o: int - decimal representation of of given hexadecimal number 

// a: 
// - convert string to array 
// convert all lowercase to uppercase
// - convert each arr element to number represenation of hexadecimal system 

// - count: 
//  - reverse the array 
//  - arr[0] * 16 ** 0 + arr[1]  * 16 ** 1 + 
// - save the result in value 
// - return value 


function hexadecimalToInteger(string) {
  let hexadecimalCalculator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };

  let hexaConverted = string.split('').map(character => hexadecimalCalculator[character.toUpperCase()]);
  hexaConverted.reverse();
  let value = 0;

  hexaConverted.forEach((element, i) => {
    value += element * 16 ** i;
  }
  )
  return value;
};