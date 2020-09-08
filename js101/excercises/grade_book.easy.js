// Grade Book
// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:


// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Examples:

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - 
// Output:
// - 
// Rules:
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

// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function getGrade(num1, num2, num3) {
  let averageNum = (num1 + num2 + num3) / 3;

  if (90 <= averageNum && averageNum <= 100) {
    return 'A';
  } else if (80 <= averageNum && averageNum < 90) {
    return 'B';
  } else if (70 <= averageNum && averageNum < 80) {
    return 'C';
  } else if (60 <= averageNum && averageNum < 70) {
    return 'D';
  } else if (0 <= averageNum && averageNum < 60) {
    return 'F';
  } else {
    console.log('not ok');
  }
}


//In this solution we simply take the given numbers and calculate their average. To dod that we add all three numbers and then divide it by 3. Later we simply use if statement to determin which condition averageNum passes and return the letter accordingly. 
