// Is It an Ordered Subarray?
// Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

// Examples:

// [4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
// [5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
// [5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].
// Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

// Examples
// isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) ➞ true

// isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) ➞ true

// isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) ➞ false

// isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) ➞ true
// Notes
// Be careful of examples like the fourth example, where the elements of smarr appear multiple times in bigarr.

// i: two arrays (smarr, bigarr) 
// o: boolean 

// R; 
// ordered subarr:
// - bigarr contains all the elments of small aray 
// - all the elemnts of smal arr are in teh same order as in bgarr

// - all numbers 
// - always input, two arrays as input 

// DS: [] => numbers => strings => true 

//Algo:
// - if any array is empty return false
// - cretae a regex from the first smallarr
//   - /.*1.*2.*3.*/g
//   - place '.*' in between each elemnts 
//     -map the array and return '.*' + el 
//   - push '.*'
//   - save regex in a varibale 
//   - call new Regex and pass the created regex
// - coerce the bigarray to a string 
// - check if there is macth with the regex
// - return true if there is and false otehrwise 


function isOrdSub(smarr, bigarr) {
  if (!smarr.length || !bigarr.length) return false;

  smarr = smarr.map(el => '.*' + el);
  smarr.push('.*');

  let RE = new RegExp(smarr.join(''));
  return RE.test(bigarr.join(''))
};


// //Happy Path 
console.log(isOrdSub([1, 2, 3], [1, 2, 3]) === true);
console.log(isOrdSub([1, 2, 3], [0, 1, 2, 3]) === true);
console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) === true);
console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) === false);
console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) === true);

// //Edge Cases 
// //othere elemnts in between 
console.log(isOrdSub([1, 2, 3], [1, 0, 2, 0, 3, 0]) === true);
console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) === true);

// //not the same order 
console.log(isOrdSub([1, 2, 3], [4, 3, 2, 1]) === false);

//empty array s
console.log(isOrdSub([], [1, 2, 3]) === false) // === false));
console.log(isOrdSub([1, 2, 3], []) === false);