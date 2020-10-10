// /Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

// Examples:

// Copy Code
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150


// let d = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 +10)**2 - (1**2 + 2**2 + 3**2 + 4**2 + 5**2 + 6**2 + 7**2 + 8**2 + 9**2 + 10**2)


//PEDAC
//UNDERSTAND THE PROBLEM: 
//1.
//2.
//3.
//Input:
//-  number
//Output:
//- number 
//Rules:
//-  if input is 1 => 0 
//- (x + x)**2   -   (y + y)**2
//-  first count positive integer 
//-
//-
//Questions: 
//-

//EXAMPLES/TEST CASES:
//i:
//=>
//o:
//=>
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
//ALGORYTHM: 
//- 
//-
//-
//-
//-

//Checklist:
//- () ;
//- names
//-logic
//- return  !!!!!!!!!!

//PSEUDOCODE:
//CODE: 



function sumSquareDifference(num) {

  let firstCount = [];

  for (let index = 1; index <= num; index++) {
    firstCount.push(index)

  }

  let squareOfTheSum = firstCount.reduce((sum, number) => sum + number) ** 2;
  let sumOfTheSquare = firstCount.reduce((sum, number) => sum + number ** 2);

  return squareOfTheSum - sumOfTheSquare;
}