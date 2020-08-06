//Rotation (Part 1)
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]


// i: array, empty arr, all other data types
// O: a new array, an empty array or undefined 

// rules: 
// - the input can be any data types
// - rotate by moving element from beginning to the end 
// - needs to be a new array not modified 
// - has to be a function and take one arg


// test edge cases: 



// MM> 

// Al. take a value and determin if it's an array
// - if it's not return undefined 
// - if it is take the first element and move it to the end of the array 
// - if an array is empty return empty array 
// - return a new array 

function rotateArray(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === result.length) {
    return result;
  } else {
    result = arr;
    result.push(result.shift());
    return result;
  }
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

console.log(rotateArray(NaN)); // => undefined
console.log(rotateArray(undefined)) // => undefined 
console.log(rotateArray(1)) // => undefined
console.log(rotateArray(0)) // => undefined 
console.log(rotateArray())    // => undefined 
console.log(rotateArray("")) // => undefined 
console.log(rotateArray("1")) // => undefined 
console.log(rotateArray(false))  // => undefined 
console.log(rotateArray(null)) // => undefined 
console.log(rotateArray({ 1: 0 })) // => undefined 