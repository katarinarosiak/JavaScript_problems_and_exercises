//Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168


// input: integer greater than 1
// output: integer 

// rules: 
// - has to be a function that takes one argument
// - input is always an integer
// - all numbers that we will sum has to be a multiplies of 3 or 5  
// - calculation will inlcude the argument 

// example: 
// input: 5 
// 3 + 5
// output: 8

// input: 12
// 3 + 5 + 6 + 9 + 10 + 12 
// output: 45 
// i: 15
// 3 + 5 + 6 + 9 + 10 + 12 
// o: 60

// DS: array
// Mm: 
// 1. Take a given number and axtract al numbers between 1 and given num that are miltiplied by 3 or 5
//   - starting from one check if the number is multiplies of 3 or 5 
//     checking if a num is a multiplier:
//       - num / 3   or num / 5 
//       - if any of the calculation has no remained it's a multiplier  
//   if yes push if 
//   - incemenet 
// 3. summ the numbers
// 4. return the result


// code: 

function multisum(num) {
  let multiplies = [];
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplies.push(i);
    }

  }
  console.log(multiplies.reduce((a, b) => a + b));
  return multiplies.reduce((a, b) => a + b);

}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168