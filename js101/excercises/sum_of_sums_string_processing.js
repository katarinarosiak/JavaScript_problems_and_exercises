// /Sum of Sums
// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// Examples:

// Copy Code
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35


// 5, 11, 4, 2 // => 



function sumOfSums (arr) {
let sumArr = [];

for(let index = 1; index < arr.length + 1; index++) {
  sumArr.push(arr.slice(0, index).reduce((sum, num) => sum + num));

}
return sumArr.reduce((sum, num) => sum + num );
}
