/// Super Strict Grading
// Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

// Examples
console.log(whoPassed({
  "John": ["5/5", "50/50", "10/10", "10/10"],
  "Sarah": ["4/8", "50/57", "7/10", "10/18"],
  "Adam": ["8/10", "22/25", "3/5", "5/5"],
  "Barry": ["3/3", "20/20"]
})) // ➞ ["Barry", "John"]

console.log(whoPassed({
  "Zara": ["10/10"],
  "Kris": ["30/30"],
  "Charlie": ["100/100"],
  "Alex": ["1/1"]
})) // ➞ ["Alex", "Charlie", "Kris", "Zara"]

console.log(whoPassed({
  "Zach": ["10/10", "2/4"],
  "Fred": ["7/9", "2/3"]
})) // ➞ []
// Notes
// All of a student's test scores must be 100% to pass.
// Remember to return an array of student names sorted alphabetically.

/// in: object
// out: arr with names 

// pass: 100%
// 5/5 


function whoPassed(obj) {
  let newArr = [];

  for (let key in obj) {
    if (obj[key].every(score => {
      return getScore(score) === 1

    })) {
      newArr.push(key)
    }
  }
  return newArr.sort();
}


function getScore(str) {
  let score = str.split('/');
  return score[0] / score[1];
}
