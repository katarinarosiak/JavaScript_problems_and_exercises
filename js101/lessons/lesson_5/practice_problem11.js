// /Practice Problem 11
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each the number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

let newArr = deepCopiedArr.map(obj => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
});

console.log(arr);
console.log(newArr);

