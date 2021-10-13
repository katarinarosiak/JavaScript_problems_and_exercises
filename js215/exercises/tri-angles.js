// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

// Examples:

// Copy Code
// triangle(60, 70, 50);       // "acute"

// > 360? => 0 

// i: three nums
// u: str 

// r: 
// - all int 
// - args in degrees 
// valid:
//  - sides > 0
//  - angle1+angle2+angle3 === 180

// DS: numbers => string
// A: 
// - check if angle >= 360 
//  - if yes count: 
//     - num - 360 return     

//  - else 
//   - check validity:
//     - all sides > 0 
//     - side1+side2+side3 === 180

//   - if valid:
//   - check if one angle === 90 => 'right'
//   -  if one angle > 90 => 'obtuse'
//   - else acute 

function triangle(...angles) {
  angles = angles.map(angle => {
    if (angle > 360) return angle - 360;
    return angle;
  });
  
  if (!isValidTraingle(angles)) return 'invalid';
  if (angles.includes(90)) return 'right'
  if (angles.find(el => el > 90)) return 'obtuse'
  
  return 'acute';
}

function isValidTraingle(angles) {
  return angles.every(angle => angle > 0) &&
    angles.reduce((acc,sum) => acc+sum) === 180
}


//Happy Path
console.log(triangle(90, 50, 40) === 'right');
console.log(triangle(80, 50, 50) === 'acute');
console.log(triangle(100, 40, 40) === 'obtuse');

//Invalid
console.log(triangle(0, 40, 40) === 'invalid');
console.log(triangle(-1, 40, 40) === 'invalid');
console.log(triangle(0, 0, 0) === 'invalid');
console.log(triangle(10, 40, 0) === 'invalid');
console.log(triangle(20, 20, 40) === 'invalid');
console.log(triangle(100, 50, 50) === 'invalid');

//counting 
console.log(triangle(0, 360, 40) === 'invalid');
console.log(triangle(160, 370, 10)  === 'obtuse');



console.log(triangle(60, 70, 50) ===  "acute");
console.log(triangle(30, 90, 60) ===  "right");
console.log(triangle(120, 50, 10) ===  "obtuse");
console.log(triangle(0, 90, 90)    === "invalid");
console.log(triangle(50, 50, 50)   === "invalid");