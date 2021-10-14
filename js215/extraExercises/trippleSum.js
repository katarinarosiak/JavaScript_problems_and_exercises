// Triplet Sum
// Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.

// Examples
// tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11) ➞ 2
// // Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

// tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20) ➞ 5

// tripletSum([5, 2, 8], n = 2) ➞ 0
// Notes
// You should also expect lists with less than three elements.

// i: unsorted list of nums, n-int  
// o: integer (number of unique triplets, whose sum === n)

// R; 
// - input list is unsorted 
// - find all combination of unique triplets 
// - uique [1,2,3] but [1,1,2] is not 
// - if there is no triplet  return 0 
// - if n is 0 return 0 
// - remove duplicates
// - 
// num = 11
// [0, 1, 2, 3]
// 0,1,2  0,1,3  0,2,3  1,2,3
  

// [0,1,2,3,4]
// 0,1,2  0,1,3  0,1,4  0,2,3  0,2,4  0,3,4 
// 1,2,3  1,2,4  1,3,4 
// 2 3 4  



// DS: array numbers 

// A: 
// - if n is 0 remove 0 
// - if n < 3 and arr doesn't include 0 return 0

// - reomove duplicates from the array 
// - generate all combinations of triplets
//     - loop array length times 
//     - i = 0
//     for each i loop once again
//       y =0 
//       for each y loop 
//        z = 0
      
// - check if its sum is 3 and if yes push to a new arr 
// - return length of the new arr  


function tripletSum(arr, num) {
  let counter = 0;
  let triples = [];

  if (num === 0) return 0; 
  for (let i = 0; i < arr.length; i++) {
    for (let y = i+1; y < arr.length; y++) {
      for (let z = y+1; z < arr.length; z++) {
        let sum = arr[i] + arr[y] + arr[z] 
        if (sum === num) counter++;
      }
    }
  }
  return counter;
}

function removeDuplicates(arr) {
  let nonDupl = [];

  arr.forEach(el => {
    if (!nonDupl.includes(el)) {
      nonDupl.push(el);
    }
  })
  return nonDupl;
};

//Happy Path
console.log(tripletSum([1, 0, 2, 6, 3, 9, 3], 11)); //2

console.log(tripletSum([5, 2, 8], n = 2)); //0

console.log(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20)); //5

//duplicates 
console.log(tripletSum([1, 2, 2, 6, 6, 3,3, 4,4, 5, 9, 10, 11], n = 20)); //5
//empty array
console.log(tripletSum([], 10)); //[]

//no second arg
console.log(tripletSum([5, 2, 8])); //0

//less then 3 elements 
console.log(tripletSum([5, 2]), 2); //0