// 1. Create a function that takes a nested arrays and returns an array with each element on the second position of the nested arrays: 


let arr = [[1, 2, 3, 4], ['a', 'b', 'c', 'd'], [undefined, NaN, null], [[], {}]];
console.log(secondNested(arr))
// => [2, 'b', NaN, {}]

// i: nested arr [[], []]
// o: arr of el (on idx 1 of inner arr)

// A: 
// - map teh given array 
// - on each element get the second element 
// - return that element


function secondNested(arr) {
  return arr.map(innerArr => innerArr[1]);
}