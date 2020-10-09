// /Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:

// Copy Code
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


//PEDAC
//UNDERSTAND THE PROBLEM: 
//1.
//2.
//3.
//Input:
//- number
//Output:
//- number (next featured num)
//Rules:
//- featured num : odd, multiplie by 7 (num % 7 === 0)
//- largest possible f num 9876543201
//- all of it's digit occuring once each 
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
//- generate a number that pass the condition 
//-   -iterating starting from num input  until the num is found 
//    - the condition of appears once: 
//        - coerce to a string 
//        - iterate through the string 
//        - push each character to arr  if not in array 
//        - if it is in array return false directly
//-  if the num is found return the number if not return "There is no possible number that fulfills those requirements."
//-  
//-

//Checklist:
//- () ;
//- names
//-logic
//- return  !!!!!!!!!!

//PSEUDOCODE:
//CODE: 

function featured(num) {
  let featuredNum = 0;

  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements."
  }

  num++;
  while (!featuredNum) {

    if (!(num % 7) && (num % 2) && isOnce(num)) {
      featuredNum = num;
    } else {
      num++;
    }
  }

  return featuredNum;
}

function isOnce(num) {
  let arr = [];

  num = num.toString();
  for (let index = 0; index < num.length; index++) {
    if (!arr.includes(num[index])) {
      arr.push(num[index])
    } else {
      return false;
    }
  }

  return true;
}
