// 63. Find The Parity Outlier
//   (https://www.codewars.com/kata/5526fc09a1bbd946250002dc​ )
//     6 kyu
// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is
// either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a
// method that takes the array as an argument and returns this "outlier" N.
//   Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11(the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160(the only even number)

// i: arr  
// o: 
// - arr len at least 3 
// - eiter all off or all even and on eint that is not (N) 

// A: 
// - sort all even to one array and all odd to another
// - return first element of the shorter array

function outlier(arr) {
  let even = [];
  let odd = [];

  arr.forEach(el => {
    if (el % 2 === 0) {
      even.push(el);
    } else {
      odd.push(el);
    }
  })
  return even.length > odd.length ? odd[0] : even[0];
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
console.log(outlier([160, 3, 1719, 19, 11, 13, -21])); //160

