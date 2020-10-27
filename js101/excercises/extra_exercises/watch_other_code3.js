/// Problem 3: find primes between two numbers
// # Write a method that takes two numbers. Return an array containing all primes between the two numbers (include the two given numbers in your answer if they are prime). Don't use Ruby's 'prime' class.

console.log(find_primes(3, 10)) // == [3, 5, 7]
// console.log(find_primes(11, 20)) // == [11, 13, 17, 19]
// console.log(find_primes(100, 101)) // == [101]
// console.log(find_primes(1, 100)) // == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// console.log(find_primes(1, 2)) // == [2]  *Please note that in the video, Conrad’s solution to this test case includes the integer 1, but it should only include the integer 2 because 1 is not a prime number. Thanks to Christian L. for this disclaimer.







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  ------------------------  UNDERSTAND THE PROBLEM:  ---------------------------- 
//1.
//2.
//3.
//Input:
//- start num end num 
//Output:
//-  array of prime numbers 
//RULES:
// Explicit:
//- doesn't inlucdde 1
//- inlcusive 
//- prime is a num divisible only by itself and 1
//-
//-Implicit
//-
//-
// Edge Cases:
// =>
// => 
// => 
//QUESTIONS: 
//- can mutate the obj or need to return new one?
//- other questions, clarification

// ------------------------------- EXAMPLES/TEST CASES: -----------------------------
//i:
//=>
//o:
//=>
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------------  ALGORYTHM:  -------------------------------------- 
//- iteater through numbers starting from start num ending on end num (inclusive)
//- check if index is a prime number
//    - chekc if it's divisible by itself  
//    - check if it's divisible by any other number but itself it's not prime 
//    if first one true and second false then it's prime   
//- if yes place it in an array 
//- retrurn the array with primes 
//-
//-
//-


//  ---------------------------  PSEUDOCODE:  -------------------------------------
//
//
//
//
//
//
//
// ==>   Checklist:  <==
//- () ;
//- names
//- logic/dry run
//- return  !!!!!!!!!!
// ----------------------------------- CODE:  ----------------------------------------   


function isPrime(num) {
  let arr = [2, 3, 4, 5, 6, 7, 8, 9];
  let removed = arr.filter(el => el !== num);
  return !removed.some(int => num % int === 0);
}



function find_primes(start, end) {
  let primes = [];

  for (let index = start; index <= end; index++) {
    if (isPrime(index) && index !== 1) {
      primes.push(index);
    }
  }

  return primes;
}


console.log(find_primes(3, 10)) // == [3, 5, 7]
console.log(find_primes(11, 20)) // == [11, 13, 17, 19]
console.log(find_primes(100, 101)) // == [101]
console.log(find_primes(1, 100)) // == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
console.log(find_primes(1, 2)) // == [2]  *Please note that in the video, Conrad’s solution to this test case includes the integer 1, but it should only include the integer 2 because 1 is not a prime number. Thanks to Christian L. for this disclaimer.
