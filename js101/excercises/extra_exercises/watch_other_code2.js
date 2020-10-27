// # Write a method that takes a string and returns a boolean indicating if this string has a balanced set of parentheses.

console.log(balancer("(hi")) // == false
console.log(balancer("(hi)")) // == true
console.log(balancer("(()) hi")) // == true
console.log(balancer(")(")) // == false





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  ------------------------  UNDERSTAND THE PROBLEM:  ---------------------------- 
//1.
//2.
//3.
//Input:
//- str
//Output:
//- boolean
//RULES:
// Explicit:
//- must have even num ()
//- must start with (
//- must ends with )
//- must have the same number ( as )
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
//-  iterateing through the string 
//-  fid teh first paranthes if it's not (  return false immidietely 
//       - check index of (  if it's greater then index of ) return fale 
//-  count ( and  )  by using a counter 
//-  counter will add +1 for each (
//-  counter will _1 for each )
//-  if the counter in the end of iteration is 0 return true
//- else return false 


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


function balancer(str) {
  let counter = 0;

  if (str.indexOf('(') > str.indexOf(')')) return false;

  for (let index = 0; index < str.length; index++) {
    if (str[index] === '(') counter++;
    if (str[index] === ')') counter--;
  }

  return !counter
}

