//Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:

// Copy Code
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - three num, not negative
// Output:
// - string
// Rules:
// - imput, positive 
// - if any of num 0 - return invalid 
// - if sum of two shortest is shorten then third return not valid 
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
// - 
// - if any of the num 0 - return invalid 
// -find out two shortest sides   
//    - sort from shortest to longest  
//    - take the two first add and check if longer then third
//    - if not return invalid 
//  - if yes check what kind of traingle it is 
//       - if all three sides equal return Equilateral:
//       - if only two sides equal return Isosceles
//       - else return scalene

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function triangle(length1, length2, length3) {
  if (!length1 || !length2 || !length3) {
    return "invalid";
  }
  let arrOflengths = [length1, length2, length3];
  if (isValidTraingle(arrOflengths)) {
    return returnNameOfTraingle(arrOflengths);
  } else {
    return "invalid";
  }
}

function isValidTraingle(arrOfLengths) {
  arrOfLengths.sort((a, b) => a - b);
  return arrOfLengths[0] + arrOfLengths[1] > arrOfLengths[2];

}

function returnNameOfTraingle(arr) {
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    return "Equilateral";
  } else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[0]) {
    return "Isosceles";
  } else {
    return "Scalene";
  }

  return 'ok'
}

//In this solution we begin with checking the edge case whether any of the given numbers are `0` if so we will simply return `invalid`. Otheriwise w e will create an array of the given input numbers and pass it as a reference to a function `isValidTraingle`. This function will evaluate is the traingle a valid traingle by checking if two shortest sides's lengths is greater then the length of the longest one. To do that we would firstly sort the array ascendently and add first two elements and compare them with the last one. If the traingle is valid the function will return `true` else it will return `false`. The evaluated value of this function will then serve as a condition in the `if statement`. If the traingle is valid we will then pass the `arrOfLengths` array as an argument to another helper function `returnNameOfTraingle` that will determin what type of traingle it is. Hoewever if the traingle is not valid `traingle` will return 'invalid'. `returnNameOfTraingle` function is will return "Equilateral" if all the given lengths are equal, "Isosceles" if only two sides are equal and "Scalene" otheriwse. FInally that evaluated value of the function `returnNameOfTraingle` will be what is a return value of `Traingle`. 