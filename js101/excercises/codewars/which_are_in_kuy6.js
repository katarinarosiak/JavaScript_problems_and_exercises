// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.






//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  ------------------------  UNDERSTAND THE PROBLEM:  ---------------------------- 
//1.
//2.
//3.
//Input:
//- array of strings 
//Output:
//- sorted arr
//RULES:
// Explicit:
//- sort lexicographical 
//- don't mutate 
//- no duplicates 
//-
//-Implicit
//- on letter is not a substring 
//-
// Edge Cases:
// => if no return []
// => 
// => 
//QUESTIONS: 
//- can mutate the obj or need to return new one?
//- other questions, clarification

// ------------------------------- EXAMPLES/TEST CASES: -----------------------------
//i:let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//let a1 = ["xyz", "live", "strong"]
//=>
//o:
//=>  
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------------  ALGORYTHM:  -------------------------------------- 
//- iterate through given array a1 
// for each word in a1 iterate through each word in a2 
//- check if the current word in a1 is substring of a2 words 
//- if yes push the word from a1 to a new array (if doesn't exist already)  
//-  return the new arr 
//-
//-
//-


//  ---------------------------  PSEUDOCODE:  -------------------------------------
//  forEach 
//  forEach  push  includes() 
//  if  includes
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



function inArray(array1, array2) {
  let newArr = [];

  array1.forEach(subStr => {
    array2.forEach(word => {
      if (word.includes(subStr) && !newArr.includes(subStr)) {
        newArr.push(subStr);
      }
    })
  })
  return newArr.sort();
}


let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2)); //, ["live", "strong"])


//a1 = ["live", "strong", "arp"]
//console.log(inArray(a1, a2)); //, ["arp", "live", "strong"])
//a1 = ["tarp", "mice", "bull"]
//console.log(inArray(a1, a2)) //, [])); //



