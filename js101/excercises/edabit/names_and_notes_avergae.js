/// Get Students with Names and Notes Average
// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.

// Examples
let arr1 = [
  { name: "John", notes: [3, 5, 4] }]
//➞ [
//   { name: "John", avgNote: 4 }
// ]


function countAv(arr) {

  return arr.map(obj => {
    obj['avgNote'] = obj['notes'].reduce((acc, num) => acc + num) / obj['notes'].length;
    delete obj['notes'];
    return obj;
  })
}

console.log(countAv(arr1))