/* Given a List [] of n integers , find the minimum number to be inserted in a list, so that the sum of all elements of the list should equal the closest prime number . 
Notes 
List size is at least 2 . 
List's numbers will only have positives (n > 0) . 
Repetition of numbers in the list could occur . 
The newer list's sum should equal the closest prime number . 
Input >> Output Examples 
1- minimumNumber ({3,1,2}) ==> return (1) 
Explanation: 
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make *the sum of the List** equal the closest prime number (7)* . 2- minimumNumber ({2,12,8,4,6}) ==> return (5) 
Explanation: 
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make *the sum of the List** equal the closest prime number (37)* . 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2) 
Explanation: 
Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make *the sum of the List** equal the closest prime number (191)* . */
console.log(minimum_number([3, 1, 2])) // == 1 
console.log(minimum_number([5, 2])) // == 0 
console.log(minimum_number([1, 1, 1])) //== 0 
console.log(minimum_number([2, 12, 8, 4, 6])) //== 5
console.log(minimum_number([50, 39, 49, 6, 17, 28])) //== 2

//PEDAC
//UNDERSTAND THE PROBLEM: 
//1.
//2.
//3.
//Input:
//- arr of numbers
//Output:
//- number (that had o be added to the list to get nearest prime num) 
//Rules:
// Explicit:
//- list size at leats 2
// - only positive inte
//-  repetition can occure
//-Implicit
//- if a sum is a prime num return 0 
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
//- take a list and sum 
//- check if it's a prime num 
//    - loop and divide by 1 - 9 , if return 0 for any other num that itself or 1 then not prime 
//      - create a list of num to divide 
//      -  remove the sum number from it
//      - divide by all other num than itsel if return o then prime 
//- if it is return 0
//- if not loop and incement counter by one
//- sum the sum and the counter 
// check if prime 
// continue until prime 
// return counter 

//Checklist:
//- () ;
//- names
//-logic
//- return  !!!!!!!!!!

//PSEUDOCODE:
//CODE: 


function minimum_number(numArr) {
  let counter = 0;

  let sum = numArr.reduce((acc, num) => acc + num);
  if (isPrime(sum)) return counter;

  do {
    counter++;
  } while (!isPrime(sum + counter))

  return counter;
}


function isPrime(number) {

  for (let index = 2; index <= 9; index++) {
    if (index !== number && number % index === 0) {
      return false;
    }
  }
  return true;
}

