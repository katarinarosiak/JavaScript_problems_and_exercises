// Grade Book
// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


function getGrade(...args) {
  let score = [ 
    ['A', 90],
    ['B', 80],
    ['C', 70],
    ['D', 60],
    ['F', 0]
  ];
  
  let mean = args.reduce((acc, sum) => acc+sum) / args.length;
  return score.find((el, idx) => {
        return mean >= el[1];
        })[0];
};

// Examples:

// Copy Code
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(60, 60, 60));    // "D"