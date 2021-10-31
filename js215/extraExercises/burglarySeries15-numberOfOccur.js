// Burglary Series (15): Number of Occurrences
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

// Examples
console.log(countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
})) //➞ { moron: 2, scumbag: 1, idiot: 2 }


// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }


// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }) ➞ { idiot: 1, scumbag: 1 }

function countNumberOfOccurrences(adjectives) {
  return Object.values(adjectives).reduce((obj, val) => {
    obj[val] ? obj[val]++ : obj[val] = 1;
    return obj;
  }, {})
}