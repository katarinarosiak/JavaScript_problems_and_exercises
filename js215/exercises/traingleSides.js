// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:

// Copy Code
// triangle(3, 3, 3);        // "equilateral"


// i: three numbers 
// o: string: 'equilateral', 'isosceles', 'scalene', or 'invalid'

// R:
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// Valid triangle: 
// side a (short) + side (short) b > side (longest)c
// - side len > 0 

// DS: number  => string
// A: 
// Check if valid traingle: 
// if a b || c <= 0 
// find longest 
// if shortes + short <= long 
// return false 

// if a, b , c are equal return 'Equilateral'
//   - find longest side 
//   - if longest < shortes + shortes return  'Isosceles'
//   - if a != b != c return 'Scalene'

function isValidTraingle(sides) {
    let [longest, short1, short2] = sides.sort((a,b) => b-a);
  return ((short1+short2) > longest) && (short1 > 0 && short2 > 0 && longest > 0);
}

function triangle(...sides) {
  if (!isValidTraingle(sides.slice())) return 'invalid';
  if (sides[0] === sides[1] && sides[1] === sides[2]) return  'equilateral';
  if (sides[0] !== sides[1] && sides[1] !== sides[2]) return 'scalene';

  return 'isosceles';
}




// //Happy Path:
console.log(triangle(3, 3, 3) === 'equilateral');
console.log(triangle(3, 3, 4) === 'isosceles');
console.log(triangle(3, 4, 6) === 'scalene');

  
  
//invalid  
console.log(triangle(3, 3, 0) === 'invalid'); 
console.log(triangle(2, 2, 6) === 'invalid'); 
console.log(triangle(3, 3, -3) === 'invalid');
console.log(triangle(3, 3, 6) === 'invalid');
console.log(triangle(3, 3, 7) === 'invalid');

console.log(triangle(3, 3, 3)   === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5)   === "scalene");
console.log(triangle(0, 3, 3)   === "invalid");
console.log(triangle(3, 1, 1)   === "invalid");