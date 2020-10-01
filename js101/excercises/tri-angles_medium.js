// /Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

// Examples:

// Copy Code
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - thre integers 
// Output:
// -  string
// Rules:
// -one angle ga 90 deg. -> Right
// - a < deg, b < 90 de, c < 90 d ->Acute
// - a > 90 || b > 90 || c > 90 -> Obtuse
// - all int valid, 
//  - if a, b, c === 0 -> invalid    || a + b + c !== 180 -> invalid
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
// -  check if valid traingle 
// -  if any of inputs are 0 or sum of all angles not 180 return 'invalid' 
// - check what kind of traingle 
// - if one angle is 90 d return Right
// - if a < deg, b < 90 de, c < 90 d ->Acute
// if a > 90 || b > 90 || c > 90 -> Obtuse

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function triangle(a, b, c) {

  if (isValidTraingle(a, b, c)) {
    return traingleName(a, b, c);

  } else {
    return 'invalid';
  }
}

function isValidTraingle(a, b, c) {

  return !((a === 0 || b === 0 || c == 0) || (a + b + c !== 180));
}



function traingleName(a, b, c) {

  if (a === 90 || b === 90 || c === 90) {
    return 'Right'
  } else if (a < 90 && b < 90 && c < 90) {
    return 'Acute';
  } else {
    return 'Obtuse';
  }

}

