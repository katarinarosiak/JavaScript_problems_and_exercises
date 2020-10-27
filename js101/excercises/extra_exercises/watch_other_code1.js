/// remove vowels from an array of strings
// # Write a method that takes an array of strings and returns an array of the same string values, except with the vowels removed.

console.log(remove_vowels(['green', 'yellow', 'black', 'white'])) // == ['grn', 'yllw', 'blck', 'wht']







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  ------------------------  UNDERSTAND THE PROBLEM:  ---------------------------- 
//1.
//2.
//3.
//Input:
//- arr of str
//Output:
//- arr of str 
//RULES:
// Explicit:
//- the same strings with vowels removed 
//-
//-
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
//- iterate through arr of strings
//-  iterate through all oletters innthe string 
//-  check if it's consonant
//-  if it is create a new str with it 
//-  the array with changed strings 
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


function remove_vowels(arr) {
  let vowels = 'aeiou'

  return arr.map(word => word.split('').filter(char => !vowels.includes(char.toLowerCase())).join(''))

}