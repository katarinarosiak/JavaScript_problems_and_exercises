// /1000 Lights
// You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.

// Examples:




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  -------------------  UNDERSTAND THE PROBLEM:  ------------------
//2.
//3.
//Input:
//- 
//Output:
//- 
//RULES:
// Explicit:
//- count === number of swtiches 
//- go back and forward
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

// ----------------------- EXAMPLES/TEST CASES: -------------------
//i:  5    [on, on, on , on , on ]         1
//         [on, off, on , off , on ]       2  
//         [on, off, off , off , on ]    3
//         [on, off, off , on, on ]   4
//         [on, off, off , on, off ]  5
//=>       
//o:
//=>
//MENTAL MODEL: 
//*
// ------------------- THINGS TO BE DONE ---------------------------
// * create arr of num between 0 and count and populate it with false
// * save the staet in var 
// * helper function to toggle the state 
// * determin the indexes to toggle 
// * function to itearate
//DATA STRUCTURES AND ALGORYTH: 
// ------------------------  ALGORYTHM:  ---------------------------
//- create arr of num between 0 and count and populate it with false
//- loop through the array as many times as count
//- for each iteration , itearet  through the array el and toggle the the switches  
//-  starting from index of previous loop and incementing by index + 1
//-     toggle stattes
//-     use current index to detrmin which swithces to togle
//-     check if a switch is true = toggle to false 
//      if it's false toggle to true 
//      return an array filled with indexes of switches that are on +1 

//  -------------------  PSEUDOCODE:  ----------------------------
//   function lightsOn (switches)
//   let arrOfswitches = [...false, ]
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
// --------------------------- CODE:  ----------------------------- 



function lightsOn(count) {
  let switches = new Array(count).fill(false);
  let startIndx = 0;
  let increment = 1;

  for (let index = 0; index < count; index++) {
    for (let index1 = startIndx; index1 < count; index1 += increment) {
      switches[index1] ? switches[index1] = false : switches[index1] = true;
    }
    startIndx = startIndx += 1
    increment = increment += 1
  }

  return returnIndexes(switches);
}

function returnIndexes(arr) {
  let newArr = [];
  arr.forEach((el, index) => {
    if (el) newArr.push(index + 1);
  });
  return newArr;
}




console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
