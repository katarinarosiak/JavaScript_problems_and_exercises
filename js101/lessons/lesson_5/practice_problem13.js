// Practice Problem 13
// Given the following data structure, sort the 
//array so that the sub-arrays are ordered based 
//on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


//Algorithm
// 1. loop through the array 
// 2. find out the worth of each arr (sum odd num) and save it in arr[0]
// 3. sort array according to the worth  
// sum all the odd num in array 
// 3. 

//solution 1

// function sortOdd(array){
//   let sumArr = array; 
//   sumArr.forEach((subArr, index) => {
//     sumArr[index].push(subArr.reduce((total, num) => {
//       if(num % 2 !== 0 ) {
//       return total + num;
//         }
//       else {
//       return total + 0;
//          }}))
//   })

//  sumArr.sort((a, b) => a[a.length -1] - b[b.length -1] )
//   sumArr.forEach(subArr => subArr.pop());
//   return sumArr;
// }

// console.log(sortOdd(arr));



//solution 2
arr.sort((a, b) => {


  let subArr1 = a.filter(num => num % 2 === 1)
    .reduce((sum, nextNum) => sum + nextNum);

  let subArr2 = b.filter(num => num % 2 === 1)
    .reduce((sum, nextNum) => sum + nextNum);

  console.log(subArr1);
  return subArr1 - subArr2;
});



console.log(arr);