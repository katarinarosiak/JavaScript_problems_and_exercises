

function filter(array, callback, index, thisArg = array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (callback.call(thisArg, array[index])) {
      result.push(array[index]);
    }
  }
  return result;
}


let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]