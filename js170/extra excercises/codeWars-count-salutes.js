// Description
// There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

// Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
// Note: 2 salutes occur when people meet, one to the other and vice versa.

// Input
// People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

// Examples
// Input: >----->-----<--<
// Output: 8

// Explanation: Both guys moving right will meet both guys moving left.
// Hence a total of 4 meetings will occur and 8 salutes will occur.

// Input: <---<--->----<
// Output: 2

// Explanation: Only one meeting occurs.



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.count number of sultes 
//2.
//3.
//Input:
//- string (ppl moving through hallway)
//Output:
//- 
//RULES:
// Explicit:
//- 2 salutes occure when 2 ppl meet
//- >   ppl moving right 
//- < ppl moving left 
//-  - empty space 
//-Implicit
//-
//-
// EDGE CASES:
// =>
// => 
// => 
//QUESTIONS: 
//- can mutate the obj or need to return new one?
//- other questions, clarification
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//input:
//=>
//=>
//=>
//output:
//=>
//=>
//=>
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------  ALGORYTHM:  -----------------------------
//- is it < or > 
// if < any > before in the string?
// no? keep going
// yes? increment counter +2;

// iterate through the string
// go until encounter > or <
// if <, check if we we encountered any > before 
// if no place keep going 
// if yes increment counter by length of the string times 2. h

// if > place in a string 
//-
//-
//-
//-
//-
//-
//-
//-
//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// -------------------------------- CODE:  -----------------------------  



function countSalutes(hallway) {
  let salut = 0;
  let signs = [];
  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === '<') {
      salut += signs.length * 2;
    } else if (hallway[i] === '>') {
      signs.push('>');
    }
  }
  return salut;
}

console.log(countSalutes("<---<--->----<"));